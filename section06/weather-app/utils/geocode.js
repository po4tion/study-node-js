const request = require('request');

const geocode = (address, callback) => {
  // mapbox uri
  const geoUri = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address,
  )}.json?access_token=pk.eyJ1IjoicG80dGlvbiIsImEiOiJja3BjZG1kcGoweHE3MnhwOTdxNnRseTV0In0.W7GAUFvHVJSwtTDU7801ZA&limit=1`;

  request({ uri: geoUri, json: true }, (error, response) => {
    if (error) {
      callback('위치 서비스에 연결할 수 없습니다.', undefined);
    } else if (response.body.features.length === 0) {
      callback('위치를 찾을 수 없습니다. 다시 시도해주세요', undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
