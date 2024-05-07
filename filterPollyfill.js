//Filter is another Array function that gives us ability to filterout array elements based on some conditions
//it also take a callback function and then returns us the filtered array
//the filter function takes three arguments
/*
    1: inidividual item
    2: index
    3: full array
*/

Array.prototype.myFilter = function (fn) {
  let ans = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      ans.push(this[i]);
    }
  }
  return ans;
};

const ages = [31, 5, 5, 23, 34, 18, 59, 3, 14, 9, 19];

console.log(ages.myFilter((age, index) => age >= 18));
