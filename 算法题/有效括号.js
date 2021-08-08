function validBraces(str) {
    if(str.length%2 !== 0)
        return false;

    let arr = []; //栈结构
    let map = new Map();
    //左括号存放一个右括号
    map.set("]","[");
    map.set("}","{");
    map.set(")","(");
    for(let i of str){
        console.log(arr,i);
        //遇到右括号 前一个出栈  看出栈的是否等于该括号的左括号
        if(i==="}"||i==="]"||i===")"){
            console.log(i,map.get(i))
            if(arr.pop()!==map.get(i)){
                return false;
            }
        }else{
           arr.push(i);
        }  
    }
    return arr.length === 0;  //看最终栈是否为空
}
console.log(validBraces("()"))

var isValid = function(s) {
    //如果是有括号 必定存在()[]{}这样的组合  每次去掉字符串中这样的一对括号  看最终s的length是否为0
    while(s.includes("()")||s.includes("[]")||s.includes("{}")){
                s = s.replace("()","");
                s = s.replace("{}","");
                s = s.replace("[]","");
        }
    return s.length===0;
}
// console.log(validBraces("[[]}"))