let knex = require('knex');
const bookshelf = require('bookshelf');

knex = knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'bookshelf'
    }
});

module.exports = bookshelf(knex);