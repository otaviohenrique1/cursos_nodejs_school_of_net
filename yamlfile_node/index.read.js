const fs = require('fs');
const yaml = require('js-yaml');

const yamlFile = fs.readFileSync('./book.yaml', 'utf-8');
const data = yaml.safeLoad(yamlFile);

console.log(data);