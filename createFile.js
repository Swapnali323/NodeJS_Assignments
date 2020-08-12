var fs = require("fs");

var writeStream = fs.createWriteStream("createFile.txt");
writeStream.write("hey ho! Let’s go ");

writeStream.end();

fs.readFile('createFile.txt', 'utf8', readData)
function readData(err, data) {
    console.log(data);
    console.log("The file is saved!!")
}
