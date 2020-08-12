var fs = require("fs");

var data = fs.readFileSync("readFile.txt", "utf8");
console.log(data);
