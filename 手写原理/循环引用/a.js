const b = require('./b')
b.b = 1;
console.log('ina===',b);
exports.a = b;
const c = require('./c')
console.log("ina cache=======",require.cache);
// this === exports === module.exports
