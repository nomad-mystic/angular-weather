const http = require('http');
const config = require('./config');

const controllers = {};


// Basic controller to get weather data from:
// https://www.wunderground.com/weather/api/d/

/**
 *
 * @param {object} request
 * @param {object} response
 * @param {string} state
 * @param {string} city
 * @returns {*}
 */

controllers.hour10 = (request, response, state, city) => {
  console.info('controller running');

  const key = config.APIKEY;
  const endpoint = `http://api.wunderground.com/api/${key}/hourly10day/q/${state}/${city}.json`;

http.get(endpoint, (res) => {

    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;

    if (statusCode !== 200) {
      error = new Error(`Request failed: Status Code ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
      error = new Error(`Expected application to be JSON but received ${contentType}`);
    }

    if (error) {
      console.log(error);

      res.resume();
      return;
    }

    res.setEncoding('utf8');

    let rawData = ``;

    res.on('data', (chunk) => {
      rawData += chunk;
    });

    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);

        response.send(parsedData);
      } catch(e) {
        console.error(e);
      }
    }).on('error', (e) => {
        console.error(e);
    });
  });
};

module.exports = controllers;
