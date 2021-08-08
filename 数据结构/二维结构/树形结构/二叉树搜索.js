
// 深度优先
var qian = ['a', 'c', 'f', 'g', 'b', 'd', 'e'];
var zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];

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
	var qianleft = qian.slice(1, index + 1); //前序遍历的左子树
	var qianright = qian.slice(index + 1); //前序遍历的右子树
	root.leftTree = f1(qianleft, zhongleft); //跟据左子树的前序和中序还原左子树
	root.rightTree = f1(qianright, zhongright); //跟据右子树的前序和中序还原右子树

	return root; //最后返回根节点
}
var a = f1(qian, zhong);

//深度优先搜索    类似前序遍历
function deepSearch(root, target) {
	if (root == null)
		return false;
	//如果当前节点等于目标返回true
	if (root.value == target)
		return true;
	var left = deepSearch(root.leftTree, target);
	if (left)
		return true;
	var right = deepSearch(root.rightTree, target);
	return right;
}

console.log(deepSearch(a, 'g'));


// 广度优先遍历
// 将根节点放在一个数组中,然后,在数组中查找哪个节点与目标值相同
// 找到了返回true
// 如果找不到将当前节点的左右节点放进一个新的数组,重新递归遍历该数组
function Search(rootList, target) {
	if (rootList == null || rootList.lenght == 0)
		return false;
	var childlist = [];
	for (var i = 0; i < rootList.length; i++) {
		console.log(rootList[i].value)
		if (rootList[i] != null && rootList[i].value == target) {
			return true;
		} else {
			childlist.push(rootList[i].leftTree)
			childlist.push(rootList[i].rightTree)
		}
	}
	deepSearch(childlist, target);
}

const arr = [];
//广度优先遍历
function Search(rootList,arr) {
	if (rootList == null || rootList.lenght == 0)
		return false;
	console.log(rootList);
	var childlist = [];
	for (var i = 0; i < rootList.length; i++) {
		childlist.push(rootList[i].leftTree)
		childlist.push(rootList[i].rightTree)
	}
	Search(childlist,arr);
}
console.log(Search([a]),[])