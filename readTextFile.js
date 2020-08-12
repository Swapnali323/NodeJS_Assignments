var fs = require('fs')

fs.readFile('readTextFile.txt','utf8',function(err,data){
    console.log(data)
})