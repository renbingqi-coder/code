// // 1.call ap ply bind    借助构造函数
// // 缺点:只能继承父级的属性，不能继承父级的原型
// function Father(name,age){
//     this.name = name;
//     this.age = age;
// }
// function Son(name,age){
//     Father.call(this,name,age)
// }
// let father = new Father("father",50)
// let son = new Son("xaioming",12)
// console.log(son,father);

// //原型链 继承
// function Father(name,age){
//     this.name = name;
//     this.age = age;
// }
// const father = new Father("任兵齐",50);
// Son.prototype = father;
// function Son(sex){
//     this.sex = sex
// }
// const son = new Son();

//可能会继承一些无用的东西

Father.prototype.name = "renbingqi"
function Father(){
    
}
function F(){
}
F.prototype = Father.prototype;
Son.prototype = new F();
Son.prototype.constructor = Son
function Son(){
}

Son.prototype.sex = 123

let son = new Son()
let father = new Father();
console.log(father.sex,son.sex);





