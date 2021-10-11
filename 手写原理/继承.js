// 1.call ap ply bind    借助构造函数
// 缺点:只能继承父级的属性，不能继承父级的原型
// function Father(name,age){
//     this.name = name;
//     this.age = age;
// }
// function Son(name,age){
//     Father.call(this,name,age)
// }
// let father = new Father("father",50)
// let son = new Son("xaioming",12)
// let son1 = new Son("11231",12)
// console.log(son,father,son1);

//原型链 继承
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
// const son1 = new Son();
// console.log(son.name,son1.name);
//可能会继承一些无用的东西  父亲已经有的属性的值  两个实例他们的name都一样
//所有新实例都会共享父类实例的属性。（原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改！）





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
let son1 = new Son()
console.log(son.name = 1,son1.name);





