var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var postData ="";
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    request.setEncoding("utf8");

    request.addListener("data", function(postDataChunk){
      postData += postDataChunk;
      console.log("receieved POST data chunk '" + postDataChunk + "'.");
    });

    request.addListener("end", function(){
      route(handle, pathname, response, postData);
    });
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;


// var http = require("http");
// // require http module (ships w node) & make available with var http
//
// function start() {
//   function onRequest(request, response){
//     console.log("Request received.");
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
//   }
//
//   http.createServer(onRequest).listen(8888);
//   console.log("Sever has started");
// }
//
// exports.start = start;

// http.createServer(function(request, response){
//   response.writeHead(200,{"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }).listen(8888);

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
