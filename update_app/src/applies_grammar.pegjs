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
  | p                    // prefix pattern

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
     return a(c);
   }

/* An expression with set union (+) and difference (-),
   parsed as right-associative but in reality left-associative. */
Additive
    = _ head:Atomic tail:(_ ("+" / "-") _ Atomic)* {
      console.log("START");
      return tail.reduce((result, element) => {
        if (element[1] === "+") {
          return citation => {
            console.log("+");
            let left = result(citation);
            console.log("left", left);
            let right = element[3](citation);
            console.log("right", right);
            let r = left || right;
            console.log("result", r);
            return r;
          }
        }
        if (element[1] === "-")
          return citation => {
            console.log("-");
            let left = result(citation);
            console.log("left", left);
            let right = element[3](citation);
            console.log("right", right);
            let r = left && !right;
            console.log("result", r);
            return r;
          }
      }, head);
    }
    / Atomic

/* A base citation, set of citations, or pattern. */
Atomic
    = a:(Pattern / Citation / Set / Paren / ChargeClass) {
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
    	return charge => {
        	return charge.join("") == chargeClass;
        }
    }

Pattern
    = pattern:((N ".")* "*" / (N ".")* N SubSection* "(*)")
    {
    	pattern = pattern.flat(2).filter((element) => { return element != ".";});
        pattern.forEach((element, index) => {
        	pattern[index] = element.replaceAll(/[()]/g, "");
        });
        console.log(pattern);
      return citation => {
	    console.log(citation);
      	let citation_elems = citation.join("").split(/[.()]/).filter((elem) => { return elem != "";});
        console.log(citation_elems);

        while (citation_elems.length !== 0 && pattern.length !== 0) {
            let c_section = citation_elems.shift();
            let p_section = pattern.shift();

            if (p_section == "*") {
                return true;
            }
            if (c_section != p_section) {
                return false;
            } 
        }

		// the pattern is longer than the citation
        if (pattern.length != 0) {
        	p_section = pattern.shift();
            // the pattern may end in a wildcard encompassing the citation, e.g. (1.1.*, "1.1")
            if (p_section == "*") {
            	return true;
            }
            // otherwise, the pattern cannot be a match, e.g. (1.1.1(*), "1.1")
            return false;
        }
      	return true;
      };
    }
    
_ "whitespace"
  = [ \t\n\r]*
