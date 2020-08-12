const { fstat } = require("fs");

var fs = require('fs')

contentFile = "created a file using fs.writeFile"

fs.writeFile('writeFile.txt', contentFile, function(err) {
    if (err) throw err;
    console.log(contentFile)
    console.log('The file has been saved!');
  });

  fs.readFile('writeFile.txt', 'utf8', function(err, contentFile) {  
    if (err) throw err;
    console.log(contentFile);
});