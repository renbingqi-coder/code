let b = 1

// const a = {
//     get value(){
//         return b;
//     } ,
//     set value(c){
//         b = c;
//     }
// }
a = {}


a.value = 2

c = JSON.parse(JSON.stringify(a))


function ref(raw){

    c = JSON.parse(JSON.stringify(raw))

    Object.defineProperty(raw,'value',{
        get(){
            return c.value
        },
        set(value){
            console.log(c.value,value)
            c.value = value;
        }
    })
}

ref(a)

console.log(a);


