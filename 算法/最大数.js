const arr = [3,1,6,4,5,2].sort().reverse();
let max = 1;
console.log(arr)
const arr1 = []
for(let i of arr){
    arr1.push(i)
    const sum = arr1.reduce((a,b) => {
        return a+b;
    },0);
    const result = sum * Math.min(...arr1);
    max = Math.max(max,result)
    
}

console.log(max);

