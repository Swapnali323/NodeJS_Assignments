  var fs = require('fs');

fs.readFile("concat-stream.txt", 'utf8', function(err, file) {  

    var data = file.split(' ');
    console.log(data);
});