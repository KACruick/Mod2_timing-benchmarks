const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  let array = [];
  let count = 0
  let num = increment
  let start = Date.now()
  console.time()

  while (count < 10){
    array.push(addNums(num))
    console.timeLog()
    num += increment
    count++
  }
  let finish = Date.now()
  console.timeEnd()
  console.log("time", finish-start)
  return array;
  

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here 
  let array = [];
  let count = 0
  let num = increment
  let start = Date.now()
  console.time()

  while (count < 10){
    array.push(addManyNums(num))
    console.timeLog()
    num += increment
    count++
  }
  let finish = Date.now()
  console.timeEnd()
  console.log("time", finish-start)
  return array;
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
