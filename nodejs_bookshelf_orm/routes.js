module.exports = (app) => {
    app.use('/cities', require('./cities'));
}