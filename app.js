var http = require('http'),
    express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express(),
    db = require('./db'),
    port = process.env.PORT || 8080,
    server;

//CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, 'client')));
app.use(require('./controllers'));

/**
 * Connect to the database
 */
db.connect('mongodb://localhost/blogApp', function(err) {
    if (!err) {
        db.initData();
        db.getDatabaseInfo();
    } else {
        console.error(err);
    }
});

app.set('port', port);

/**
 * Create HTTP server.
 */
server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);

module.exports = server;