const express = require('express');
const router = express.Router();
const _ = require('lodash');

const controllers = require('./controllers');
const stringUtils = require('./utils/strings');

// Get the 10-day hourly api endpoint
router.get('/10-hour/state/:state/city/:city', (req, res, next) => {
  console.log(req.params);

  if (_.isEmpty(req.params) || _.isEmpty(req.params.state) || _.isEmpty(req.params.city)) {
    res.send('There was and error with you request please add a state and city to the the request');
  }

  // Make sure the city is in the right format
  let modifiedCity = req.params.city;
  modifiedCity.trim();
  modifiedCity = stringUtils.capitalize(modifiedCity);
  modifiedCity = stringUtils.addUnderScore(modifiedCity);

  // Make sure the state is in the right format
  let modifiedState = req.params.state;
  modifiedState.trim();
  modifiedState.toUpperCase();

  // console.log(modifiedState);
  // console.log(modifiedCity);

  controllers.hour10(req, res, modifiedState, modifiedCity);
});

module.exports = router;
