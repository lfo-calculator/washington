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
    = Additive / Test
    
Test
   = "Applies(" a:Additive "," _ "\"" c:[^"]* "\"" ")" { // make it not a string and then rewrite with less parsing
     return a(c, {isDV : true, court: "CLJ", charge: "G"});
   }

/* An expression with set union (+) and difference (-),
   parsed as right-associative but in reality left-associative. */
Additive
    = _ head:Atomic tail:(_ ("+" / "-" / "&") _ Atomic)* {
      return tail.reduce((result, element) => {
        if (element[1] === "+") {
          return (citation,context) => {
            let left = result(citation,context);
            let right = element[3](citation,context);
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
    / Atomic

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
      return cs.reduce((result, element) => {
        return citation => result(citation) || element[0](citation);
      }, c);
    }

Citation
    = c: ((N ".")* N SubSection*) 
    {
      return citation => {
        console.log(citation.join(""), "in", c[0].map(x => x.join("")).join("")+c[1]+c[2].join(""));
        return citation.join("") == c[0].map(x => x.join("")).join("")+c[1]+c[2].join("");
      }
    }

SubSection 
    =  "(" subsection:([0-9]+ / [a-z]+ / [A-Z]+) ")" {
      return subsection.join("");
    }

N 
    = digits:[0-9]+ {
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
    	pattern = pattern.flat(2).join("");
      return citation => {
        citation = citation.join("");
        
        // check if subsection wildcard
        let idx = pattern.indexOf("(*)");
        
        if (idx == -1) {
        	  // otherwise, check for N.* wildcard
            idx = pattern.indexOf(".*");
            if (idx == -1) {
            	// otherwise, check for * wildcard
              idx = pattern.indexOf("*");
            }
        }
        return citation.substring(0, idx) == pattern.substring(0, idx);
      };
    }
    
_ "whitespace"
  = [ \t\n\r]*
