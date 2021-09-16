function test1(color){
    const reg = /^\#[1-9A-Fa-f]{1,6}/g
    if(color.match(reg)[0]===color){
        color = color.substring(1)
        return toRbg(color)
    }else{
        return color
    }
}
function toRbg(str){
    let  a = '';
    let  b = '';
    let  c = '';
    if(str.length>3){
        str.padEnd(6,0)
        a = str[0] + str[1];
        b = str[2] + str[3];
        c = str[4] + str[5];
    }else{
        str.padEnd(3,0)
        a = str[0]
        b = str[1]
        c = str[2]
    }
    return `rbg(${parseInt(a,16)*16},${parseInt(b,16)*16},${parseInt(c,16)*16})`
}
console.log(test1('#FFe'));