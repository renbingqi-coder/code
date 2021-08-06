//树的度最多为2的树
// 特性
// 满二叉树:所有的叶子节点都在最后一层，每个非叶子节点都有两个子节点  可以不有孩子 但不能有一个 必须两个
// 完全二叉:1.国内定义：叶子节点都在最后或倒数第二层, 叶子节点必须从左到右
// 2.国际定义：叶子节点都在最后或倒数第二层,如果有叶子节点,就必然有两个叶子结点
// 子树:每一节点或者叶子节点都是一个子树的跟节点    每个节点都认为自己是根节点
// 左子树
// 右子树


//传递二叉树要传根节点

function Node(value) {
    this.value = value;
    this.leftTree = null;
    this.rightTree = null;
}

function Tree() {
    this.root = null;

    Tree.prototype.create = function (Node) {

    }
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

//递归版
function f1(root) {
    // 如果该节点为空，返回
    if (root == null)
        return;
    //先打印该节点
    console.log(root.value);
    //遍历该节点的左节点
    f1(root.leftTree);
    //遍历该节点的右节点
    f1(root.rightTree);
}
f1(a);
//非递归
function f2(root) {
    var stack = [];
    if (root === null)
        return;
    // 入栈
    stack.push(root);
    while (stack.length != 0) {
        // 出栈
        var value = stack.pop();
        console.log(value);
        if (value.rightTree != null) {
            stack.push(value.rightTree);
        }
        if (value.leftTree != null) {
            stack.push(value.leftTree);
        }
    }
}
f2(a)

//中序遍历
//递归
function f3(root) {
    //如果该节点为空，返回
    if (root == null) {
        return;
    }
    //遍历该节点的左子树
    f3(root.leftTree);
    //打印该节点
    console.log(root.value);
    //遍历该节点的右子树
    f3(root.rightTree);
}
f3(a);
//非递归
function f4(root) {
    var stack = [];
    while (root != null || stack.lenght != 0) {
        while (root != null) {
            stack.push(root);
            root = root.leftTree;
        }
        if (stack.length != 0) {
            root = stack.pop(root);
            console.log(root);
            root = root.rightTree;
        }
    }
}
f4(a);
// 后序遍历
//递归
function f5(root) {
    if (root == null) {
        return;
    }
    f5(root.leftTree);
    f5(root.rightTree);
    console.log(root.value);
}
f5(a);
//跟据前序中序还原二叉树