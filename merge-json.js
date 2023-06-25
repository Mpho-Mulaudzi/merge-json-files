const fs = require('fs');
const mergePatch = require('json-merge-patch');

const files = [
  './src/assets/data1.json',
  './src/assets/data2.json'
];


const merged = files.map(file => {
  const fileContents = fs.readFileSync(file, 'utf8');
  return JSON.parse(fileContents);
}).reduce((a, b) => mergePatch.apply(a, b));



fs.writeFileSync('./src/assets/merged.json', JSON.stringify(merged));
