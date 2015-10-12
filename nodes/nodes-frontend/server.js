var http = require('http');

host = process.env.NODES_BACKEND_SVC_SERVICE_HOST || "localhost"
url = "http://" + host + ":8081/v1"

var handleRequest = function(request, response){
    var apiCall = http.get(url, function(apiResponse){
        
        var buffer = "";

        apiResponse.on("data", function(chunk){
            buffer += chunk
            console.log("on data: receive ");
        });

        apiResponse.on("end", function(err){
            console.log("on end: " + buffer);
            apiResult = JSON.parse(buffer);
            greeting = apiResult.greeting;
            response.writeHead(200);
            response.end("Hello " + greeting + "!");
        });
    });
}

var www = http.createServer(handleRequest);
var port = process.env.PORT || 8080;
www.listen(port,"0.0.0.0");
console.log("listen on port " + port);
console.log("looking for service @ " + url);
