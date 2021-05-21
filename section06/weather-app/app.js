const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=9af5b906c999cccad566ff5cf5720a10&query=Seoul';

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);

  console.log(data.current);
});
