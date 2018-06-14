var http = require('http')
var router = require('router-middleware')
var ecstatic = require('ecstatic')({root:__dirname })
var app = router();
app.fileserver(ecstatic);
var server = http.createServer(app)
server.listen(5150)
