function ListNode(x){
    this.val = x;
    this.next = null;
}
function deleteDuplication(pHead)
{
    let map = {};
    let cur = pHead;
    
    //遍历所有链表
    while(cur){
        if(map[cur.val]){
            map[cur.val]++;
        }else{
            map[cur.val] = 1;
        }
      cur = cur.next;
    }
    
    //去重
    const arr = Object.keys(map).filter(el=>{
        return map[el]===1;
    })
    
    
    const list = arr.map(el=>{
        return  new ListNode(el);
    })
    
    
    //重建链表
    const result = list[0];
    let head = result;
    
    for(let i = 1; i < list.length; i++){
        head.next = list[i];
        head = head.next;
    }
    
    return result;
    
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(3);
const node5 = new ListNode(4);
const node6 = new ListNode(4);
const node7 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

console.log([node1,node2,node3])

console.log(deleteDuplication(node1));