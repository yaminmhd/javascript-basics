var assertEquals = require("./test-helper");

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function that returns 'hello world'
function hello() {
  return "hello world";
}

//assertEquals(hello(), "hello world");

/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function, greet(personName), that returns 'hello specificPersonName'. If no name is supplied, return 'hello world'
function greet(name){
  if(name){
    return 'hello ' + name;
  }else{
    return 'hello world';
  }
}

 //assertEquals(greet('tom'), 'hello tom')
 //assertEquals(greet(), 'hello world')

/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function, add2Numbers(num1, num2), to return the sum of 2 values
function add2Numbers(num1, num2){
  return num1 + num2;
}
// assertEquals(add2Numbers(1, 1), 2)
// assertEquals(add2Numbers(100, 1), 101)

/* ---------------------- EXERCISE 4 ---------------------- */
// Define a function, invertCase(someString), that returns the input string with its case inverted

function invertCase(string){
  var array = string.split('');
  for(var i =0; i<array.length; i++){
    if(array[i] === array[i].toUpperCase()){
      array[i] = array[i].toLowerCase();
    }else if(array[i] === array[i].toLowerCase()){
      array[i] = array[i].toUpperCase();
    }
  }
  return array.join('');
}
//assertEquals(invertCase('Hello'), 'hELLO')
//assertEquals(invertCase('hELLO wORLD'), 'Hello World')
