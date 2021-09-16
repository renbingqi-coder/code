let b = 1

const a = {
    get value(){
        return b;
    } ,
    set value(c){
        b = c;
    }
}
a.value = 2
console.log(JSON.stringify(a.value),b);

function ref(raw){

    const r = {
        get value(){
            return raw;
        } ,
        set value(c){
            raw = c;
        }
    }
    return r
}

const c = ref(b)
console.log(JSON.stringify(c));