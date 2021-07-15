// 描述
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
// 示例1
// 输入：
// 2
// 复制
// 返回值：
// 2
// 复制
// 示例2
// 输入：
// 7
// 复制
// 返回值：
// 21
function jumpFloor(number)
{
    if(number === 1 || number === 2){
        return number;
    }
    return jumpFloor(number - 1)+jumpFloor(number - 2)
}