//传递二叉树要传根节点

function Node(value) {
    this.value = value;
    this.leftTree = null;
    this.rightTree = null;
}
//遍历方式  （先跟）先序遍历(当前节点 左子树 右子树)  （中跟）中序遍历(左子树 当前节点 右子树)  （后跟）后续遍历(左子树 右子树 当前节点)
var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');
var g = new Node('g');
a.leftTree = b;
a.rightTree = c;
b.leftTree = d;
b.rightTree = e;
c.leftTree = f;
c.rightTree = g;

//左右子树交换之后不是同一颗二叉树
function compareTree(root1,root2){
    if(root1 === root2){
        return true;
    }
    if(root1 === null && root2 !==null || root1 !== null && root2 === null)
        return false;
    if(root1.value !== root2.value)
        return false;
    if(root1.value === root2.value){
        let left = compareTree(root1.leftTree,root2.leftTree);
        let right = compareTree(root1.rightTree,root2.rightTree);
    }
    return left&&right;
}


//左右子树交换之后是同一颗二叉树
function compareTree1(root1,root2){
    if(root1 === root2){
        return true;
    }
    if(root1 === null && root2 !==null || root1 !== null && root2 === null)
        return false;
    if(root1.value !== root2.value)
        return false;
    return    compareTree(root1.leftTree,root2.leftTree)&&compareTree(root1.rightTree,root2.rightTree)||
    compareTree(root1.leftTree,root2.rightTree)&&compareTree(root1.rightTree,root2.leftTree);

}

console.log(compareTree1(a,a));