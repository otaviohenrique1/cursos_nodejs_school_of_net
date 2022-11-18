const fs = require('fs');
const yaml = require('js-yaml');

const data = {
    title: 'Learning Node.js',
    pages: 277,
    author: 'School if net',
    ISBN: 78654
};

const str = yaml.safeDump(data);
fs.writeFileSync('book.yaml', str, 'utf8');