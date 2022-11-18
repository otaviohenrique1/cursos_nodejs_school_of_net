let knex = require('knex');

async function up() {
    knex = knex({
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'bookshelf'
        }
    });

    // Migration Schema
    try {
        const cityResult = await knex.schema.createTable('cities', (table) => {
            table.increments();
            table.string('name');
            table.timestamps();
        });
    
        console.log(cityResult);
    } catch (err) {
        console.log('Error -> ', err);
    }

}

up();

// let knex = require('knex');
// knex = knex({
//     client: 'mysql',
//     connection: {
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'bookshelf'
//     }
// });
// knex.schema.createTable('cities', (table) => {
//     table.increments();
//     table.string('name');
//     table.timestamps();
// }).then(() => console.log('Table created'));