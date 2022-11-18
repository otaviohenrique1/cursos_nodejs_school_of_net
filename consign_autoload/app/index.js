const express = require('express');
const al = require('consign');

const app = express();

al({
    cwd: 'app'
})
.include('src')
.then('src/routes')
.into(app);

app.listen(3000, () => {
    console.log('Started');
})