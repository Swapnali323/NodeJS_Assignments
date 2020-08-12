  var fs = require('fs');

fs.readFile("findword.txt", 'utf8', function(err, contentInFile) {  
    var count=0;
    var fileText = contentInFile.split(' ');
    console.log(fileText)

    for (var i=0;i<fileText.length;i++){
        if(fileText[i]==="file"){
            count++
        }
    }
    
    console.log("The word appears "+count+" times")
});