const { Router } = require('express');
const router = Router();
const MP = require('./mp');

router.get('/', (req, res) => {
    return res.sendFile(__dirname + '/index.html');
});

router.get('/thanks', (req, res) => {
    return res.sendFile(__dirname + '/thanks.html');
});

router.post('/', async (req, res) => {
    const paymentData = {
        transaction_amount: 10,
        description: 'Test Payment',
        installments: 1,
        token: req.body.token,
        payment_method_id: 'visa',
        payer: {
            email: 'admin@admin.com'
        }
    };

    return MP.payment.save(paymentData)
        // .then(data => res.status(200).json({ data }))
        .then(data => res.redirect('/thanks'))
        .catch(err => res.status(500).json({ err }));
    // return res.json({ msg: 'hello' });
});

// Teste Cartao de credito Visa -> Brasil: 4235647728025682

module.exports = router;