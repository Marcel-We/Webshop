var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('Webshop-API');
});

app.listen(3000, function () {
    console.log("Webshop API running on port 3000...");
});