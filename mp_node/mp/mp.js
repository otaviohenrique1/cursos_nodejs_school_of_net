const mercadopago = require('mercadopago');
const configPayments = require('./config_payment');

mercadopago.configure({
    sandbox: true,
    access_token: configPayments.sanbox.accessToken
});

// if (process.env.NODE_ENV == 'development') {
//     mercadopago.configure({
//         sandbox: true,
//         access_token: configPayments.sanbox.accessToken
//     });
// } else {
//     mercadopago.configure({
//         access_token: configPayments.production.accessToken
//     });
// }

// Criar variavel de ambiente -> SET NODE_ENV=development

module.exports = mercadopago;