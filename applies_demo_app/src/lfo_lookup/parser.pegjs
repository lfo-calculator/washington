/*
    Grammar of the applies field:
    =============================

    N a number
    n a number, lowercase letter, or roman numeral

C ::=
  | G, S, F_A, F_B, F_C  // class of charge
  | c                    // singleton charge
  | { c, ... }           // set of charges
  | C-C                  // set difference
  | C+C                  // set union
  | C&C                  // set intersection
  | p                    // prefix pattern
  | DV                   // case involving domestic violence
  | CLJ, SC              // court

*/

/*
    Examples of applies fields:
    ===========================

    Note: concrete syntax for `p`

    *-(46.*-{46.60.0, 46.60.1})

    (G+S) - 46.07.08.(1)(a)
*/

Start
    = Test / Additive

Test
   = "Applies(" a:Additive "," _ c:BareCitation ")" {
     return a(c, { isDV : true, court: "CLJ", charge: "G", offense_number: 4, foobar: true });
   }

BareCitation
    = c: ((N ".")* N SubSection*) {
      return c[0].map(x => x[0]).concat(c[1]).concat(c[2]);
    }

/* An expression with set union (+) and difference (-),
   parsed as right-associative but in reality left-associative. */
Additive
    = _ head:SideCondition tail:(_ ("+" / "-" / "&") _ SideCondition)* {
      return tail.reduce((result, element) => {
        if (element[1] === "+") {
          return (citation, context) => {
            let left = result(citation, context);
            let right = element[3](citation, context);
            let r = left || right;
            return r;
          }
        }
        if (element[1] === "-")
          return (citation, context) => {
            let left = result(citation, context);
            let right = element[3](citation, context);
            let r = left && !right;
            return r;
          }
         if (element[1] === "&")
          return (citation, context) => {
            let left = result(citation, context);
            let right = element[3](citation, context);
            let r = left && right;
            return r;
          }
      }, head);
    }
    / SideCondition

SideCondition
    = _ f:Field _ op:(">=" / "=") _ v:Value {
      return (citation, context) => {
        switch (op) {
          case ">=":
            return (f in context) && context[f] >= v;
          case "=":
            return (f in context) && context[f] == v;
        }
      }
    } /
    _ f:Field {
      return (citation, context) => {
        return (f in context) && context[f];
      }
    } / Atomic

Field = c:[a-z_]+ { return c.join(""); }
Value =
  n:[0-9]+ { return parseInt(n.join("")); } /
  "true" { return true; } /
  "false" { return false; }

/* A base citation, set of citations, or pattern. */
Atomic
    = a:(Pattern / Citation / Set / Paren / ChargeClass / CourtLevel / DomesticViolence) {
      return a;
    }

Paren
	= "(" a:Additive ")" {
    	return a;
    }

/* A set of citations, denoted { C1, ..., Cn } */
Set
    = "{" _ cs:(Citation _ "," _)* c:Citation _ "}" {
      // We skip the second argument here because only citations are in sets,
      // meaning we will not need the context to evaluate any of those.
      return cs.reduce((result, element) => {
        return citation => result(citation) || element[0](citation);
      }, c);
    }

Citation
    = c: ((N ".")* N SubSection*)
    {
      // Same thing: citations do not need the context to evaluate
      return citation => {
        // citation is an array of components originally dot-separated
        let components = c[0].map(x => x[0]).concat(c[1]).concat(c[2]);
        return components.reduce((acc, n, i) => acc && n == citation[i], true);
      }
    }

SubSection
    =  "(" subsection:([0-9]+ / [a-z]+ / [A-Z]+) ")" {
      return subsection.join("");
    }

N
    = digits:([0-9]+[a-zA-Z]*) {
      return digits.join("");
    }

ChargeClass
	= chargeClass:("G" / "S" / "F_A" / "F_B" / "F_C") {
    	return (charge, context) => {
        	return context.charge == chargeClass;
        }
    }

DomesticViolence
  = domesticViolence: "DV" {
    return (dv, context) => {
      return context.isDV;
    }
  }

CourtLevel
  = courtLevel : ("CLJ" / "SC") {
    return (court, context) => {
      return context.court == courtLevel;
    }
  }

Pattern
    = pattern:((N ".")* "*" / (N ".")* N SubSection* "(*)")
    {
      return citation => {
        let components = pattern[0].map(x => x[0]).concat(pattern[1]).concat(pattern[2] || []);
        return components.reduce((acc, n, i) => acc && n == "*" || n == citation[i], true);
      };
    }

_ "whitespace"
  = [ \t\n\r]*


