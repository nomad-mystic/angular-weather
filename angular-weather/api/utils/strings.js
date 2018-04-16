// Any utilities I need for string in the api part of the application

const _ = require('lodash');

stringUtils = {};

stringUtils.capitalize = (words) => {
  return words
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.substr(1)
    })
    .join(' ');
};

stringUtils.addUnderScore = (words) => {
  return words.replace(/ /g, '_');
};

module.exports = stringUtils;
