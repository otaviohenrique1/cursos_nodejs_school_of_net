const { Model } = require('../connection');

const City = Model.extend({
    tableName: 'cities',
    hasTimestamps: true
});

module.exports = City;