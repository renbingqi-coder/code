function changeDrank( numCap ) {
    // write code here
    let result = 0;
    while(numCap>=3)
    {
        result+=3
        numCap = numCap - 3 + 1;
    }
    return result + numCap;
}
console.log(changeDrank(9));


function addStrings( num1 ,  num2 ) {
    // write code here
      let maxLength = Math.max(num1.length,num2.length)
      num1 = num1.padStart(maxLength, '0');
      num2 = num2.padStart(maxLength, '0');
    
      let result = [];
      let a = 0;
      let b = 0;
      for(let i = maxLength; i >= 0 ; i--){
          let add = Number(num1[i])+Number(num2[i])
          console.log(add);
          a = parseInt(add%10);
          b = parseInt(add/10)+result[0]?result[0]:0;
          result[0] = a;
          result.unshift(b);
      }
        result.shift()
        result.pop();
        return result.join('');
}
console.log(addStrings("11111111111111112","22222222222222222"));