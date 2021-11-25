/*
 * @Author: your name
 * @Date: 2021-09-29 15:29:35
 * @LastEditTime: 2021-11-19 21:55:37
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /code/TS/index.ts
 */
interface Person{
    name:string;
    age:number;
}

let my:Person = {
    name:"rending",
    age:22,
}

enum goodType{
    a=1,
    b=2
}

// let a:keyof typeof goodType = 'a' 
// let b:keyof typeof goodType = 'b' 

console.log(goodType[1], typeof goodType);

console.log(my);

console.log(new Date('2020/2/2'));

export enum MODE_ENUM{
    新建预案= 12,
    更新预案= 'update',
    复制预案= 'copy'
}

console.log(MODE_ENUM['update']);



class A<T>{
    
}

// A<String>


// 只有数字支持反射枚举

