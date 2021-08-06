var qian = [3,9,20,15,7];
var zhong = [9,3,15,20,7];
var hou = ['f', 'g', 'c', 'd', 'e', 'b', 'a'];

function Node(value) {
    this.value = value;
    this.leftTree = null;
    this.rightTree = null;
}

function f1(qian, zhong) {
    if (qian == null || zhong == null || qian.length == 0 || zhong.length == 0 || zhong.length != qian.length) {
        return;
    }
    //找到根节点
    var root = new Node(qian[0]);
    //找到根节点在中序中的位置
    var index = zhong.indexOf(root.value);
    //找到中序和前序的左右子树
    var zhongleft = zhong.slice(0, index); //中序遍历的左子树
    var zhongright = zhong.slice(index + 1); //中序遍历的右子树


    var qianleft = qian.slice(1, index + 1); //前序遍历的左子树  中间位置的长度加1
    var qianright = qian.slice(index + 1); //前序遍历的右子树  


    root.leftTree = f1(qianleft, zhongleft); //跟据左子树的前序和中序还原左子树
    root.rightTree = f1(qianright, zhongright); //跟据右子树的前序和中序还原右子树

    return root; //最后返回根节点
}
var a = f1(qian, zhong);
console.log(a)


function f2(hou, zhong) {
    if (hou == null || zhong == null || hou.length == 0 || zhong.length == 0 || zhong.length != hou.length) {
        return;
    }
    // 跟据后续先找根节点
    // 再跟据跟节点在中序中划分左右子树
    // 找到中序和后序左右子树
    // 再继续还原中序和后序的左右子树
    var root = new Node(hou[hou.length - 1]);
    var index = zhong.indexOf(root.value);
    var zhongleft = zhong.slice(0, index);
    var zhongright = zhong.slice(index + 1);
    var houleft = hou.slice(0, index);
    var houright = hou.slice(index, hou.length - 1);
    root.leftTree = f2(houleft, zhongleft) ? f2(houleft, zhongleft) : null;
    root.rightTree = f2(houright, zhongright) ? f2(houright, zhongright) : null;

    //返回跟节点
    return root;
}

var b = f2(hou, zhong)