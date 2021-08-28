
// You should implement your task here.

module.exports = function towelSort (matrix) {
if(!matrix) return[];
arr2 = [];
for (let i = 0; i < matrix.length; i++) {
  if (i % 2 != 0) {
    arr2.push(matrix[i].reverse());
  } else arr2.push(matrix[i]);
}
return arr2.flat();
}
