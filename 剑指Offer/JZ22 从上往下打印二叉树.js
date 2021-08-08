// 描述
// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
// 示例1
// 输入：
// {5,4,#,3,#,2,#,1}
// 复制
// 返回值：
// [5,4,3,2,1]

// 利用广度优先遍历  将每一个节点存在数组中

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    // write code here
    let result = [];
    function print1(root){
        if(root.length===0)
		   return ;
        const children = [];
//         将每个孩子的节点存在数组中
        for(let i of root){
            result.push(i.val)
            i.left&&children.push(i.left);
            i.right&&children.push(i.right);
        }
        print1(children); 
    };
    print1([root])
    return result;
}
module.exports = {
    PrintFromTopToBottom : PrintFromTopToBottom
};
