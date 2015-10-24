var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    db = require('./db'),
    port = process.env.PORT || 8080;

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
app.use(require('./controllers'));

/**
 * Connect to the database
 */
db.connect('mongodb://localhost/dayco-stl', function(err) {
    if (!err) {
        db.getDatabaseInfo();
    } else {
        console.error(err);
    }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(port);

module.exports = app;