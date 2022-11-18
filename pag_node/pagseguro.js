const Pagseguro = require('pagseguro-nodejs');

const mode = process.env.NODE_ENV === 'development' ? Pagseguro.MODE_SANDBOX : Pagseguro.MODE_PAYMENT;

const token = process.env.NODE_ENV === 'development' ? '123' : '456';

const pag = new Pagseguro({
    email: 'leonan.luppi@gmail.com',
    token,
    mode 
});

// const pag = new Pagseguro({
//     email: 'otaviohlsilva@gmail.com',
//     token: '',// Nao aparece na conta do pagseguro
//     mode: process.env.NODE_ENV === 'development' ? Pagseguro.MODE_SANDBOX : Pagseguro.MODE_PAYMENT
// });

pag.currency('BRL');
pag.reference('LEONAN123')

module.exports = pag;