const express = require('express');
const bodyParser = require('body-parser');
const PGS = require('./pagseguro');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/pay', async (req, res) => {
    // Recebedor
    PGS.sender({
        name: 'Leonan Luppi',
        email: 'leonan.luppi@gmail.com',
        phone: {
            areaCode: '27',
            number: '996094456'
        }
    });

    // Produto
    PGS.addItem({
        id: '10',
        description: 'Payment test',
        amount: '20.00',
        quantity: 1
    });

    // Frete
    // PGS.shipping({ type: 3 });
    PGS.shipping({
        type: 1,
        name: req.body.name,
        email: req.body.email,
        card: req.body.card,
        cvv: req.body.cvv,
        date: req.body.date,
        address: {
            street: 'Rua das palmeiras',
            number: '',
            city: '',
            state: '',
            country: ''
        }
    });

    /*
    http://localhost:3000/pay -> link de teste
    {
        "email": "c92818328062315130433@sandbox.pagseguro.com.br",
        "name": "Leonan Luppi",
        "card": "411111111111111",
        "cvv": "123",
        "date": "12/2030"
    }
    */

    // Checkout
    PGS.checkout((data, response) => {
        if (data) {
            return res.json({ data });
        }
        return res.json({ response });
    });
    // return res.send('ok');
});

app.listen(3000, () => console.log(`Express has been started... env: ${process.env.NODE_ENV}`));