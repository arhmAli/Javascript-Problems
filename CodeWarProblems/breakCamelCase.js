Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""


//Solution:
// complete the function
function solution(string) {
    return string.replace(/([A-Z])/g,' $1')
}
Approach:
// /([A-Z])/g regex to find globally the uppercase A to Z
// $1 finds the first occurence of the upper case 
// I habe added a space before $ indicating replace the first uppercase with space

//Test:
//some of the sample test with chai are
const chai = require("chai");
const assert = chai.assert;

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    assert.strictEqual(solution('camelCasing'), 'camel Casing', 'Unexpected result')
    assert.strictEqual(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')
  });
});

