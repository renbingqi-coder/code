// async function a(){
// try {
//     await Promise.reject(312);
// } catch (error) {
//     console.log(error);
// }
// console.log(1);
// }

// try {
//     new Promise((res,rej)=>{
//         rej(1);
//     })

// } catch (error) {
//     console.log(error);
// }



function ccc(arr) {
    let pre = [0,0];
    let len = 0;
    for(let i of arr){
        let one = i.split("-")[0]
        let tow = i.split("-")[1]
        if(tow>pre[1]&&one>pre[0]){
            len += tow-one
       }
       pre[0] = Math.max(pre[0],one);
       pre[1] = Math.max(pre[1],tow);
    }
   console.log(len)
 }
 ccc(['0-2', '3-6', '4-5', '6-8', '9-10']);