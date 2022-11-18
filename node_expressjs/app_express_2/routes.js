const express = require('express');
const router = express.Router();

// Custom Middleware da rota
router.use(function(req, res, next) {
    req.name = 'SON';
    console.log('Router Custom Middleware');
    next();
});

router.get('/', function(req, res, next) {
    next(new Error('Custom error'))
    // console.log(req.params);
    // res.json({
    //     message: 'Hello World 2'
    // });
});

// rota com expressao regular
// a?r -> a é um atributo opcional
// router.get('/a?r', function(req, res) {
//     console.log('router a?r');
// });

// rota com expressao regular
// a+r -> exibe apenas a rota ar
// router.get('/a+r', function(req, res) {
//     console.log('router a+r');
// });

// rota com expressao regular
// a*r -> exibe a rota com a no inicio e r no final
// router.get('/a*r', function(req, res) {
//     console.log('router a*r');
// });

router.get('/params/:name', function(req, res) {
    res.json({
        params: req.params,
        host: req.hostname,
        headers: req.headers,
        port: req.port,
    });
});
// Link de teste -> localhost:3000/hello/params/leonan

router.post('/body', function(req, res) {
    res.json(req.body.name);
});

router.get('/res', function(req, res) {
    res.render('index', {});
    // res.send('teste');
    // res.status(201).send('teste');
    // res.status(202).json({
    //     name: 'Leonan',
    //     lastname: 'Luppi'
    // });
    // res.end();
});

module.exports = router;