const jsonData = require('./data.json');

console.log(jsonData.name);

const jsonString = '{"a": 1, "b": 2}';

const jsonObject = JSON.parse(jsonString);

console.log(jsonObject);

const jsonStringAgain = JSON.stringify(jsonObject);

console.log(jsonStringAgain);