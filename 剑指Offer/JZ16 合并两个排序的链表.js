/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    // write code here
    let stack = [];
    while(pHead1){
        stack.push(pHead1);
        pHead1 = pHead1.next;
    }
    
    while(pHead2){
        stack.push(pHead2);
        pHead2 = pHead2.next;
    }
    
    stack.sort((a,b)=>{
        return a.val > b.val;
    })
    
    let head = stack[0];
    let cur = head;
    
    for(let i = 1; i < stack.length; i++){
       cur.next = stack[i];
       cur = cur.next;
    }
    return head;
}