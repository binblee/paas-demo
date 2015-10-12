var express = require('express');
var app = express();

var port = process.env.PORT || 8081;

var router = express.Router();

router.get('/', function(req,res){
    res.json({greeting: 'from API:version 2'});
});

app.use('/v1', router);
app.listen(port);
console.log('server listen on port ' + port);
