/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    if(pHead===null||pHead.next === null){
         return pHead;
    }  
    else{
       var result = ReverseList(pHead.next);
		pHead.next.next = pHead;
		pHead.next = null;				
		return result;
    }
}