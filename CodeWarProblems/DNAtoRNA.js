Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty.
All input is guaranteed to be valid, i.e. each input string will only 
ever consist of 'G', 'C', 'A' and/or 'T'.

Solution:

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
//   let lower=dna.toLowerCase()
//   let word=dna.replace('t','u')
//   return word.toUpperCase()
  return dna.replace(/T/g,"U")
  }

Test Cases:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
    assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
    assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
    });
  })
