var assertEquals = require("./test-helper");

/* ---------------------- EXERCISE 1 ---------------------- */
// Write a JavaScript function which accept a number as input and insert dashes (-) between each two even numbers. (Sample input: 025486, Sample output: 0-254-8-6)

function addDashes(numString) {
  //declare empty array
  var result = [];
  //split numString into array [0,2,5,4,8,6]
  var array = numString.split('');
  //loop through array and the previous position to see if it's even
  for(var i = 0; i<array.length; i++){
    //if both location are even, push in a - followed by the the number
    if (array[i] % 2 === 0 && array[i-1] % 2 === 0){
      result.push('-', array[i]);
    }else{
      //otherwiser just push the number
      result.push(array[i]);
    }
  }
  return result.join('');
}

// assertEquals(addDashes("025486"), "0-254-8-6"); // check that your function works as expected
// assertEquals(addDashes('111246777'), '1112-4-6777') // uncomment this and run program. if test passes, uncomment subsequent tests one by one
// assertEquals(addDashes('0021100'), '0-0-2110-0')
// assertEquals(addDashes('99999230089'), '99999230-0-89') // uncomment this line and add 2-3 more test cases. Do the same for all remaining functions

/* ---------------------- EXERCISE 2 ---------------------- */
// Write a Javascript function to find the most frequent item of an array. It should return a string denoting the item and the number of times it occurs in the array. (Sample input: [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3], expected output : 'a (5 times)')

function mostFrequentItem(arr) {
//   var mostFrequenItem;
//   //create variable to count occurence of item here
//   var counts = {};

//   var compare = 0;

//   //store most frequent item here
//   var mostFrequent;

//   for(var i =0 ;i<arr.length; i++){
//     var items = arr[i];
//     if(counts[items] === undefined){
//       counts[items] = 1;
//     }else{
//       counts[items] += 1
//     }

//     if(counts[items] > compare){
//       compare = counts[items]
//       mostFrequent = arr[i];
//     }
//   }
//   return mostFrequent;
}

// uncomment the following test to run it
 //assertEquals(mostFrequentItem(['a', 'a', 'b']), 'a')
 //assertEquals(mostFrequentItem(['a', 'b', 'b', 'b', 'c', 'a', 'b', 'a', 'b']), 'b')
 //assertEquals(mostFrequentItem(['yes', 'yes', 'no', 'no', 'yes']), 'yes')

/* ---------------------- EXERCISE 3 ---------------------- */
// Write a Javascript function to remove duplicate items from an array (ignore case sensitivity). (Sample input : [1, 'a', 'A', 'b', 2, 2], expected output: [1, 'a', 'b', 2])
function removeDuplicateItems(arr) {
  //create a empty array variable
  var arrayCopy = [];
  for(var i = 0; i<arr.length; i++){
    //if a value from arr does not exist in arrayCopy push into arrayCopy
    if(arrayCopy.indexOf(arr[i]) === -1){
      arrayCopy.push(arr[i]);
    }
  }
  return arrayCopy;
  // var out=[],
  //     obj={};

  // for (var i=0; i<arr.length; i++) {
  //   obj[arr[i]]=0;
  // }
  // for (i in obj) {
  //   out.push(i);
  // }
  // return out;
}

 //assertEquals(removeDuplicateItems([1, 1, 'a']), [1, 'a'])
 assertEquals(removeDuplicateItems([1, 1, 'a', 'A']), [1, 'a'])
 assertEquals(removeDuplicateItems([1, 'a', 'A', 'b', 'B', 2, 2]), [1, 'a', 'b', 2])

/* ---------------------- EXERCISE 4 ---------------------- */
// Write a Javascript function to compute the union of two arrays. the returned array should be sorted in ascending order (Sample input: union([1, 2, 3], [100, 2, 1, 10]), expected output: [1, 2, 3, 10, 100])
function union() {}

// assertEquals(union([1, 2], [2, 3]), [1, 2, 3])
// assertEquals(union([1, 2, 3], [100, 2, 1, 10]), [1, 2, 3, 10, 100])

/* ---------------------- EXERCISE 5 ---------------------- */
// Write a Javascript function to compute sum of a union. (Hint: Reuse the union() function which you wrote!) (Sample input: intersection([1, 2, 3], [1, 2]), expected output: 3)
function unionSum() {}
// assertEquals(unionSum([1, 2, 3], [1, 2]), 3)
// assertEquals(unionSum([1, 2, 3, 4], [2, 3, 4]), 9)
// assertEquals(unionSum([2000, 50, 551, 550, 23], [551, 50, 23]), 624)

/* ---------------------- REVISED ARRAY EXERCISES ---------------------- */

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function that returns the sum of an array
function sum(array) {
  var sum = 0;
  array.forEach(function(number){
    sum += number;
  });
  return sum;
}

//assertEquals(sum([1, 2, 3, 4]), 10);
//assertEquals(sum([10, 10, 10]), 30);

/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function that returns an array of even numbers
function evenNumbersOnly(array) {
  var even = [];
  array.forEach(function(number){
    if(number % 2 === 0){
      even.push(number);
    }
  });
  return even;
}

//assertEquals(evenNumbersOnly([1, 2, 3, 4]), [2, 4]);
//assertEquals(evenNumbersOnly([10, 11, 12]), [10, 12]);

/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function that returns the sum of even numbers in the array
// hint: reuse the 2 functions that you defined earlier!
function sumEvenNumbers(array) {
  var sum = 0;
  array.forEach(function(number){
    if (number % 2 === 0){
      sum += number;
    }
  });
  return sum;
}

//assertEquals(sumEvenNumbers([1, 2, 3, 4]), 6);
//assertEquals(sumEvenNumbers([10, 11, 12]), 22);