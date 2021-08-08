/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pHead ListNode类 
 * @param k int整型 
 * @return ListNode类
 */
 function FindKthToTail( pHead ,  k ) {
    //     let current = pHead;
    //     let count = 0;
    //     const map = [];
    //     //计算链表长度
    //     while(current){
    //         map.push(current)
    //         current = current.next;
    //         count++;
    //     }
    //     //返回符合条件的节点
    //     if(count>=k){
    //         return map[count-k];
    //     }else{
    //         return null
    //     }
        
        //快慢指针
        let fast = pHead;
        let slow = pHead;
        
        //快指针先走k步
        while(k-- > 0){
            fast = fast.next;
        }
        //慢指针再和快指针一起走   当快指针为空时输出慢指针对应的值
        while(fast){
            fast = fast.next;
            slow = slow.next;
        }
        
        return slow;
    } 
    module.exports = {
        FindKthToTail : FindKthToTail
    };