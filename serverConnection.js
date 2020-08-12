var http = require('http')

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/palin'})
    res.end('This is the end');
})

server.listen(3000,'localhost');
console.log('Success,I am listening from port : 3000')