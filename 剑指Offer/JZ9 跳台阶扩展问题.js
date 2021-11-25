/*
 * @Author: your name
 * @Date: 2021-09-07 20:09:51
 * @LastEditTime: 2021-11-18 12:43:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /code/剑指Offer/JZ9 跳台阶扩展问题.js
 */
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