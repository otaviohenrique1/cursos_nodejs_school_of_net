const express = require('express');
const path = require('path');
// const http = require('http');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');

app.set('views', './views_dir');
// Template engine
app.set('view engine', 'pug');

// Custom Middleware global
app.use(function(req, res, next) {
    console.log('Custom Middleware');
    next(); //Passa para a proxima configuracao
});

app.get('/', function(req, res) {
    res.render('index', {
        message: 'Hello world from express by SON'
    });
    // res.send('Hello World 1' + req.name);
});

app.get('/world', function(req, res) {
    res.send('Hello World 3');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, 'public')));
// localhost:3000/public/style/main.css
// localhost:3000/public/style/main.js
// localhost:3000/public/
// localhost:3000/scripts/main.js
// localhost:3000/style/main.css

app.use(function(err, req, res, next) {
    res.status(500)
        .json({
            message: 'Something wrong happens'
        });
});

app.use('/hello', routes);

// app.use(routes);

// http.createServer(app).listen(3000, function() {
//     console.log('Express started');
// });

app.listen(3000, function() {
    console.log('Express started');
})