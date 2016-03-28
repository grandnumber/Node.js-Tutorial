var http = require("http");
// require http module (ships w node) & make available with var http

http.createServer(function(request, response){
  response.writeHead(200,{"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);

// pass the createServer an anonymous function - i.e. can refactor to:
    // var http = require("http");
    // 
    // function onRequest(request, response){
    //   response.writeHead(200, {"Content-Type": "text/plain"});
    //   response.write("Hello World");
    //   response.end();
    // }
    //
    // http.createSever(onRequest).listen(888);
