// function solve( k ,  a ) {
//     // write code here
//     let arr = [];
//     while(a) {
//         arr.push(a.val);
//         a = a.next;
//     }
//     let result = 0;
//     for (let i = 0,length = arr.length; i < length; i++) {
//         for(let j = i+1; j < length; j++){
//             let temp = getValue(arr[i], arr[j] , k);
//             if( temp > result);
//                 result = temp
//         }
//     }
//     return result;
// }
// function getValue(x,y,k){
//     return ((x ^ y) * k + (x * y));
// }

// function ListNode(x){
//       this.val = x;
//       this.next = null;
// }
// let  a = new ListNode(1);
// let  b = new ListNode(2);
// let  c = new ListNode(3);
// let  d = new ListNode(4);
// let  e = new ListNode(5);
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// console.log(solve(0,a));

// const str = 'You say that you love rain,but you open your umbrella when it rains:rain'
// const origin = str.split(':')[0]
// const target = str.split(':')[1]
// const reg = new RegExp(`${target}`,'g')
// console.log(origin.match(reg));
// // console.log(origin.match(reg).filter(el=>el.includes(target)).length);

// console.log(parseInt('123eqw'));

const root = {"id":1,"zIndex":1,
"children":[{"id":2,"zIndex":2},{"id":3,"zIndex":2,
"children":[{"id":4,"zIndex":3}]}]}
const a = 2;
const b = 4;
function test(root,a,b){
    const map = new Map();
    function travel(root,index = 0){
        if(root.id === a){
            map.set(a,{
                zIndex:root.zIndex,
                index,
            })
        }
        if(root.id === b){
            map.set(b,{
                zIndex:root.zIndex,
                index,
            })
        }
        if(root.children){
            for(let i of root.children){
                travel(i,index+1)
            }
        }
    }
    travel(root);
    console.log(map);
    let aValue = map.get(a);
    let bValue = map.get(b);
    if(aValue.index<bValue.index){
       return 'yes';
    }else if(aValue.index===bValue.index){
        return aValue.zIndex<aValue.zIndex?'yes':'no';
    }else{
        return 'no';
    }
}
console.log(test(root,a,b));
