
// 平衡二叉树
// 1.每个节点的左右子树高度叉不能超过1
/**
 * 一个节点
 * @param {Object} value  值
 */
function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}
//获取左右深度判断左右深度是否大于1
/**
 * 获取二叉树深度
 * @param {Object} root  根节点
 */
function getDeep(root) {
	if (root == null)
		return 0;
	var leftDeep = getDeep(root.left);
	var rightDeep = getDeep(root.right);
	//左右的最深深度再加上当前的节点
	return Math.max(leftDeep, rightDeep) + 1;
}

/**
 * 判断一个二叉树是否平衡
 * @param {Object} root
 */
function isBalance(root) {
	if (root == null) return true;
	var leftDeep = getDeep(root.left);
	var rightDeep = getDeep(root.right);
	return Math.abs(leftDeep - rightDeep) > 1 ? false : isBalance(root.left) && isBalance(root.right);
}

