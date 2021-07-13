function ListNode(val){
    this.val = val;
    this.next = null;
}

//反向遍历链表   利用栈 先入栈  再出栈  
function printLinkList(head){
    const stash = []
    while(head){
        stash.push(node.val);
        head = head.next;
    }
    const result = []
    while(stash.length){
        result.push(result.pop())
    }
    return result;
}
// 时间复杂度：n
// 空间复杂度：n

function printLinkList(head){
    const stash = []
    while(head){
        stash.unshift(node.val);
    }
    return stash;
}