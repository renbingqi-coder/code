// 描述
// 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。
// n\leq 39n≤39

// 示例1
// 输入：
// 4
// 复制
// 返回值：
// 3
function Fibonacci(n,n0=0,n1=1)
{
    if(n===0)
        return n0;
    return Fibonacci(n-1,n1,n0+n1);
}