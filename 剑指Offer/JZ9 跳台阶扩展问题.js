// 描述
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶(n为正整数)总共有多少种跳法。
// 示例1
// 输入：
// 3
// 复制
// 返回值：
// 4

function jumpFloorII(number)
{
    //数学公式
  if(number === 0|| number ===1)
      return number;
    return 2*jumpFloorII(number-1)
}