var fs = require("fs")

fs.readdir(__dirname, function (err, files) {                    //psth of directory and function

    files.forEach(function (file) {
        if (fs.statSync(file).isDirectory()){                       //info about given file path
         console.log ("DIR: " + file);
        }
        else {
        console.log("FILE: " + file);
        }
    });
});