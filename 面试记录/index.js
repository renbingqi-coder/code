function MALS(members) {
  members.sort((a, b) => a - b);
  let maxLen = 1;
  let len = 1;
  for (let i = 0; i < members.length - 1; i++) {
    if (members[i + 1] - members[i] === 1) {
      len++;
      maxLen = Math.max(len, maxLen);
    } else {
      len = 1;
    }
  }
  return maxLen;
}
console.log(MALS([20, 40, 41, 41, 21, 22]));

function findNums(nums) {
  // write code here
  let map = {};
  let chongfu = null;
  let queshi = null;
  let index = nums[0];
  for (let i of nums) {
    index++;
    if (map[i]) {
      chongfu = i;
    } else {
      map[i] = true;
    }
    console.log(i,index);
    if (i !== index) {
      queshi = index;
    }
  }
  return [chongfu, queshi];
}
console.log(findNums([1,2,2,4]));