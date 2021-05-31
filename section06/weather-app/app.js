const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=9af5b906c999cccad566ff5cf5720a10&query=Seoul';

request({ url: url, json: true }, (error, response) => {
  const data = response.body.current;
  const print = `It is currently ${data.temperature} degrees out. There is a ${data.precip}% chance of rain.`;

  console.log(print);
});

const geoUri =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicG80dGlvbiIsImEiOiJja3BjZG1kcGoweHE3MnhwOTdxNnRseTV0In0.W7GAUFvHVJSwtTDU7801ZA&limit=1';

request({ uri: geoUri, json: true }, (error, response) => {
  const lat = response.body.features[0].center[0];
  const lon = response.body.features[0].center[1];

  console.log(lat, lon);
});
