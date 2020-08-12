var fs = require('fs');

fs.readFile('nums.txt', 'utf8', function(err, contentFile) {  
   
    var numbers = contentFile.split(' ').map(function(num){
            return parseInt(num)
            // console.log(parseInt(num))
        }
    );
    var total = numbers.reduce(function(acc, currentNumber){
        return acc + currentNumber;
    });
    console.log('The sum of all numbers in text file is: ' + total);
});