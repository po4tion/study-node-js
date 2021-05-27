const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=9af5b906c999cccad566ff5cf5720a10&query=Seoul';

request({ url: url, json: true }, (error, response) => {
  const data = response.body.current;
  const print = `It is currently ${data.temperature} degrees out. There is a ${data.precip}% chance of rain.`;

  console.log(print);
});
