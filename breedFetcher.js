const request = require('request');
const argv = process.argv.slice(2);
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${argv}`;

request(URL, (err, resp, body) => {
  if (err) console.log(err);
  const data = JSON.parse(body);
  if (data[0]) {
    console.log(data[0]['description']);
  } else {
    console.log('Sorry, That\'s not a breed of Cat!');
  }
});