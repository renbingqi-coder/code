let init = (function(){
    let a = 1;
    console.log(123);
    return function getName(){
        console.log(a);
    }
}());
init()