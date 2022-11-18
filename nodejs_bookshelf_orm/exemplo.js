const { Model } = require('./connection');

const City = Model.extend({
    tableName: 'cities',
    hasTimestamps: true
});

async function findAll() {
    const data = await City.fetchAll();
    console.log(data.toJSON());
}

findAll();

// City.fetchAll()
//     .then((data) => {
//         console.log(data.toJSON());
//     });