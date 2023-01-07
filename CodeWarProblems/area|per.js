// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
const areaOrPerimeter = function(l , w) {
  //let per=2*(l+w)
  return l===w?l*w:2*(l+w)
};
