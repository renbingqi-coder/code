// // // // function verify(param) {
// // // //     // write code here
// // // //     const str = param.replace(/[^\w\d]/g, "");
// // // //     const strArr = str.split("")
// // // //     if (strArr.reverse().join("").toLocaleLowerCase() === str.toLocaleLowerCase())
// // // //         return true;
// // // //     return false;
// // // // }
// // // // console.log(verify("A man, a plan, a canal: Panama"));
// // // // console.log((/[^\w\d]/g).test(":123"));

// // // // function ascSort(arr1, arr2, arr3) {
// // // //     let result = [];
// // // //     result.push(Math.max(...arr1));
// // // //     result.push(Math.max(...arr2));
// // // //     result.push(Math.max(...arr3));
// // // //     return result.sort((a, b) => {
// // // //         return b - a;
// // // //     })
// // // // }

// // // // console.log(ascSort([74, 16, 302, 9, 28, 0], [10, 99, 34, 33, 502, 6], [88, 2, 77, 648, 404, -1]));

// // // // function test(){

// // // // }

// // // // aaaaaa

// // // // cccccc

// // // // 1231
// // // // 312321

// // // // 312312
// // // // 312312
// // // // 312312

// // // // 312312312
// // // // 321312312
// // // // 312312

// // // // 222222222

// // // // aaa


// // // // 3123213213

// // // console.log(new Date('2020/2/2').getFullYear(),new Date('2020/2/2').getMonth()+1,new Date('2020/2/2').getDate());
// // // function format (date, fmt) {
// // //     let year = date.getFullYear();
// // //     let month = date.getMonth()+1;
// // //     let day = date.getDate();
// // //    	let result = fmt;
// // //     result = result.replace('yyyy',year);
// // //     if(fmt.includes('MM')){
// // //         result = result.replace('MM',String(month).padStart(2,0));
// // //     }else{
// // //         result = result.replace('M',month);
// // //     }
// // //     if(fmt.includes('dd')){
// // //         result = result.replace('dd',String(day).padStart(2,0));
// // //     }else{
// // //         result = result.replace('d',day);
// // //     }  
    
// // //     return result;
    
// // // }
// // // console.log(format(new Date('2021/9/2'), 'yyyy-M-d'));



// // // console.log([1,2,3,4].splice(1,2));

// // function getCurrentWeek(year, month, date){
// //     let monthDay = [31,29,31,30,31,30,31,31,30,31,30,31]
    
// //     if(year%100!==0&&year%4===0){
// //         momthDay[1] = 28; 
// //     }

// //     monthDay = monthDay.splice(0,month-1);
    
// //     return Math.ceil(monthDay.reduce((pre,cur)=>{
// //         return pre+cur;
// //     },date)/7)
// // }

// // console.log(getCurrentWeek(2021,10,3));


// let str = `（1）检查魔表&关注大V配置 
// https://kconf.corp.com/#/ztTask/task/taskIdToFollowUserOriginInfo
// （2）任务周期开关检查（内测使用内测时间） 线上关闭
// https://kswitch.corp.com/#/flag/targeting?project=ztEncourage&environment=production&key=dailyTaskPeriodIndexCalculateCustomIntervalMillis 
// （3）检查任务完成后不展示kconf
// https://kconf.corp.com/#/ztTask/task/hideWholePeriodTaskWhenCompletedSubBizIds
// （4）检查轮询时间配置kconf
// https://kconf.corp.com/#/ztTask/api/maxRefreshRetryTimes
// https://kconf.corp.com/#/ztTask/api/minRefreshCycleSec
// （5）检查领取记录&进度更新白名单配置
// https://kconf.corp.com/#/ztTask/take/enableSaveTakeRecordBizIdSet`

// const reg = /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g
// const reg1 = /(?=https)[^\u4e00-\u9fa5]+(?=[\u4e00-\u9fa5])/g
// console.log(str.match(reg));

// function test(n){

//     // 是否是最后一个人
//     let flag = true;
    
//     // 第几个幸运人
//     let resultCount = 0;
    
//     // 计数
//     let i = 0
    
//     while(n > 0 && flag){
//         if(i>n){
//             i = i - n
//         }
//         if(n===i){
//             result = false;
//         }
//         i = i + 5; 
//         if(i<n){
//             resultCount ++  
//         }
//         i--
//         n--      
//     }
//     return  resultCount;
// }
// console.log(test(1))


