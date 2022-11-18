// require('dotenv/config');
// require('dotenv').config();
// console.log(process.env.TITLE);
// No terminal do windows digitar -> set APP_TITLE=SON_ENV
// No terminal do linux/mac digitar -> export APP_TITLE=SON_ENV
// console.log(process.env);

require('dotenv').config({
    path: process.env.NODE_ENV == 'development' ? '.env.dev' : '.env'
});
console.log(process.env.TITLE);
console.log(process.env);