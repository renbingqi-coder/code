const d = require('./d')
console.log('in b',d);
console.log('in b',require.cache);
d.d = 2;