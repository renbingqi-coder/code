
var arr = [];
for (var i = 0; i < 10; i++) {
	arr.push(Math.floor(Math.random() * 10000))
}

function Search(arr1, target) {
	var num = 0;
	var l = false;
	for (var i = 0; i < 10000; i++) {
		num++;
		if (arr1[i] == target) {
			l = true;
			break;
		}
	}
	console.log(num);
	return l;
}
Search(arr, 222222);

function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}


/**
 * 
 * @param {*} root  根节点
 * @param {*} value  值
 * @returns 
 */
function addNode(root, value) {
	if (root == null || root.value == value)
		return;
	if (value < root.value) {
		if (root.left == null)
			root.left = new Node(value);
		else
			addNode(root.left, value);
	} else {
		if (root.right == null)
			root.right = new Node(value);
		else
			addNode(root.right, value);
	}
}
/**
 * 
 * @param {*} arr 创建一个二叉树
 * @returns 
 */
function buildSearchTree(arr) {
	if (arr == null || arr.length == 0)
		return;
	var root = new Node(arr[0]);
	arr.forEach(function (ele) {
		addNode(root, ele)
	});
	return root;
}
var root = buildSearchTree(arr);



var num1 = 0;


/**
 * 
 * @param {*} root  根节点
 * @param {*} target  目标节点
 * @returns 
 */
function searchTree(root, target) {
	num1++;
	if (root == null)
		return false;
	if (root.value == target) return true;
	if (root.value > target) {
		return searchTree(root.left, target);
	} else {
		return searchTree(root.right, target);
	}
}
searchTree(root, 222);
console.log(num1);

