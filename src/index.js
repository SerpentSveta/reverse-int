module.exports = function reverse(n) {
  const positiveN = n < 0 ? -n : n;
  const nString = positiveN.toString();
  let newString = '';
  for (let i = nString.length - 1; i >= 0; i -= 1) {
    newString += nString[i];
  }
  return +newString;
};
