const request = require('request');
const geocode = require('./utils/geocode');

// weatherstack uri
const url =
  'http://api.weatherstack.com/current?access_key=9af5b906c999cccad566ff5cf5720a10&query=40.7831,-73.9712';

geocode('seoul', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});
