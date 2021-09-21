const d = require('./d')
console.log('in c', d);
console.log('in c',require.cache);
d.d = 3;