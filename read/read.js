var fs = require("fs");

fs.readFile(__dirname+ '/read.txt', "utf8",function(err,data){
    console.log(data);
});
console.log(__dirname)

