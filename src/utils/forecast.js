const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/c71b887d806b8b9f3d8fe8430ea95f82/'+ latitude + ',' + longitude;

  request({url, json: true}, (error, response, body) => {
    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, body.daily.data[0].summary + 'And the temperature is '+ body.currently.temperature +' degrees');
    }
  })
}

module.exports = forecast;
