function createTree(pre,mid){
    const root = pre[0];
    const index = mid.valueOf(root)
    const preleftTree = pre.slice(1,index+1)
    const prerightTree = pre.slice(index+1)
    const midleftTree = mid.slice(0,index);
    const midrightTree = mid.slice(index+1);


    const leftTree = createTree(preleftTree,midleftTree);
    const rightTree = createTree(prerightTree,midrightTree);

    return leftTree.push(root).concat(rightTree);
}

//前序找到根节点  
//跟接点再中序中的位置  分割左右子树
//找到中序和前序的左右子树   
//递归构建左右子树

// 时间：logn
// 空间：nlogn