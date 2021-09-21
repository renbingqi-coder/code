let counter = 3;
function incCounter() {
  this.counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};