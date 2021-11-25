function nizhi(root){
    const curnode = root;
    const arr = [];
    while(curnode){
        arr.push(curnode)
        curnode = curnode.next;
    }
    const newNode = arr.pop();
    const cur = newNode;
    while(arr.length){
        cur.next = arr.pop();
        cur = cur.next()
    }
    return newNode;
}




function nizhi(root){
    if(root.next === null){
        return root;
    }
    const result = nizhi(root.next) //返回最后一个节点
    root.next.next = root.next;
    root.next = null;
    return result;
}