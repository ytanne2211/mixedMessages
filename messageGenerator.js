var fs = require('fs');
var array= []

//function reads file "message.txt" and gets a random line from the textfile
function generateMessage(){
  var lines = '';
  let filename = 'message.txt'
  array = fs.readFileSync(filename).toString().split("\n");

  return array[Math.floor(Math.random()*array.length)];
}

//generates random number
function getRandomNumber(){
    return [Math.floor(Math.random()*100)]
}


console.log(`Your lucky number is : ${getRandomNumber()}. \nMessage: ${generateMessage()}`);
