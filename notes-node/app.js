const validator = require('validator');

// console.log(validator.isEmail('bnaik2611@gmail.com'));
// console.log(validator.isBefore('2019-01-01','2019-02-02'));
// console.log(validator.isCreditCard('1000 2000 3000 4000'));
// console.log(validator.isEmpty(''));
// console.log(validator.isDivisibleBy('4','4'));

var input = ['bnaik2611@gmail.com', 'hello@g.coc','hello world']
var emails = input.filter(function isAnEmail(string){
  return validator.isEmail(string)
})

var words = ['BHALCHCOGFDFOBHNDFOIVOI','OFHDFHUFHDF'];
var capitals = words.filter(function isCapitaWord(string){
  return validator.isUppercase(string)
})

var numbers = [1,2,3,4,5,6]
for (var i = 0; i < numbers.length; i++) {
  if(validator.isDivisibleBy(String(numbers[i]), '2')){
    console.log(numbers[i]);
  }
}
