let mod = require('./a');
console.log(mod);
console.log(mod.counter);  // 3
mod.incCounter();
console.log(mod);
console.log(mod.counter); // 3