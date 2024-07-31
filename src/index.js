module.exports = function reverse (n) {
  
  let result = '';

  if (n < 0) {
    n = Math.abs(n);
  }

let stringN = String(n);

for (let i = 0; i < stringN.length; i++) {
    
    
    if (stringN[i.length - 1] == 0) {
        stringN[i.length - 1] = '';
    }

    result = stringN[i] + result;    
}

return Number(result.trim());

//   if (stringN.length == 1) {
//     return Number(stringN);
//   }
 
//   if (stringN.length == 2) {
//     return Number(stringN[1] + stringN[0]);
//   }
   
//   if (stringN.length == 3) {
//     return Number(stringN[2] + stringN[1] + stringN[0]);
//   }
 }

console.log(module.exports(-132));