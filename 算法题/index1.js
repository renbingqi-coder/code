//函数柯里化
//作用域
/(abc)1/g

"abc1".match(/(abc)1/g)
console.log("abcAabcAasc1".match(/[a-z]{3}/g));
var name = 1;
obj = {
    name: 2,
    getName() {
        var name = 3;

        function printName() {
            let name = 213;
            console.log(this.name);
        }
        printName()
    }
}
obj.getName()

function sun() {
    let name = 0;
    console.log(this.name);
}

sun.call(obj)