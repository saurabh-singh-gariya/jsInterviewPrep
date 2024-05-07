//map in js is a array function which takes a callback function as an input and then returns us a new array
//based on the computation defined inside the callback function
//the map function takes three arguments
/*
    1: inidividual item
    2: index
    3: full array
*/


//pollyfill of map function of array

Array.prototype.myMap = function (fn) {
  let ans = [];
  for (let i = 0; i < this.length; i++) {
    ans.push(fn(this[i], i));
  }
  return ans;
};

const nums = [1, 3, 5, 6];

const arr = nums.myMap((num, index) => num * 3);

console.log(arr);
