function Find(target, array)
{
    let result = false;
    for(const i of array){
        for(const j of i){
            if(j===target){
                result = true;
                break;
            }     
        }
    }
    return result;
}
console.log(Find(7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]));

// for in 返回的是属性名  用来遍历对象除symbol外的属性
// Object.keys()/Objec.hasOwnProperty()+forin  
// Object.getOwnPropertyNames()
// Object.getOwnPropertySymbols()
// Reflect.ownKeys()



// for of 直接返回的是值