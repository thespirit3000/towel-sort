module.exports = function towelSort(matrix) {
  if (!matrix){return []};
  let result = [];
    matrix.forEach((item, i) => {
      if ((i+1)%2 !== 0){result = result.concat(item);
      }else {
        result = result.concat(item.reverse());
      }
    });
  return result;
}
