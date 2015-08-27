function fizzbuzz(max) {
  var results = [];
  for (var i = 1; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push('FizzBuzz');
    } else if (i % 3 === 0) {
      results.push('Fizz');
    } else if (i % 5 === 0) {
      results.push('Buzz');
    }
  }
  return results;
};
var me = 'Anthony';
function hello(name) {
  return "Hi" + " " + name;
};
console.log(fizzbuzz(20));
console.log(hello(me));
