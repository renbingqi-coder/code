const a = Promise.reject(1)

async function b(){
    try {
        await a
        // console.log(1);
    } catch (error) {
        console.log(error);
    }
    console.log(1);
}
b()


    const a = 1;
    a  = 2;
    console.log(112312);


console.log('jieshu');