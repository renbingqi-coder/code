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

// forin 返回的是属性名