//reduce is another array function that is used used to basically perform some calculation on the array and
//accumulate the result into one single item
//reduce takes two args
/*
    1. A callback function, which again takes three args
        a. accumlater/previous value
        b. current item
        c. current whole array

    2. initial value   (if not passed, it wil assume the first value of the array to be initial)
*/

//differece between || and ?? is

/*
        || : it takes the right side value if the left value is falsy, means
                0, empty string, null, undefined, false, NaN, ""

        ?? : it takes the right side value if the left value is 
                null or undefined
*/
Array.prototype.myReduce = function (fn, initialValue) {
  let ans = initialValue ?? this[0];
  for (let i = 0; i < this.length; i++) {
    ans = fn(ans, this[i]);
  }
  return ans;
};

const abc = [1, 2, 3, 3];

console.log(abc.myReduce((acc, item) => acc + item, 0));

console.log("" || 'Right')