function Node(value) {
				this.value = value;
				this.left = null;
				this.right = null;
			}
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

function buildSearchTree(arr) {
	if (arr == null || arr.length == 0)
		return;
	var root = new Node(arr[0]);
	arr.forEach(function(ele) {
		addNode(root, ele)
	});
	return root;
}
var root = buildSearchTree(arr);
var num1 = 0;

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
