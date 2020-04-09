const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(URL, (err, resp, body) => {
    const data = JSON.parse(body);
    if (data[0]) {
      callback(err, data[0]['description']);
    } else {
      callback(err, 'Breed Doesn\'t Exits');
    }
  });
};

module.exports = fetchBreedDescription;