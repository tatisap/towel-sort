module.exports = function towelSort(matrix) {
  if (matrix === undefined) return [];
  let sortedMatrix = matrix
  let result = [];

  for (let i = 0; i < sortedMatrix.length; i++) {
    if (i % 2 !== 0) sortedMatrix[i].reverse();
  }
  
  sortedMatrix.forEach(arr => result = result.concat(arr));

  return result;
}
