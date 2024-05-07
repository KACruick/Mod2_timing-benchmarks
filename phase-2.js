const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let array = [];
  let count = 0
  let num = increment

  while (count < 10){
    array.push(addNums(num))
    num += increment
    count++
  }
  return array;
}

console.log(addNums10(10))

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let array = [];
  let count = 0
  let num = increment

  while (count < 10){
    array.push(addManyNums(num))
    num += increment
    count++
  }
  return array;

}

module.exports = [addNums10, addManyNums10];
