exports.c = 3
const b = require('./b')
console.log('inc===',b);
console.log("inc cache=======",require.cache);
