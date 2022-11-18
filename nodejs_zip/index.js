const zip = require('node-zip')();
const fs = require('fs');

// Cria arquivo zip

zip.file('son.txt', 'School od net', {
    base64: false,
    comment: 'A sample comment',
    date: new Date()
});

const zipFile = zip.generate({
    base64: false,
    compression: 'DEFLATE'
});

fs.writeFileSync('zipfile.zip', zipFile, 'binary');