#! /usr/bin/env babel-node

import request from 'request';
import _ from 'lodash';

module.exports = class LichessClient {
  constructor(options = {}) {}

  getUser(username, options, callback) {
    r(`user/${username}`, options, callback);
  }

  getGamesForUser(username, options = {}, callback) {
    options = _.defaults(options, {username: username});
    r(`game`, options, callback);
  }

  getGameById(id, options, callback) {
    r(`game/${id}`, options, callback);
  }
};

// Create request with route, param, options, and callback
let r = (route, options, callback) => {
  request(`http://en.lichess.org/api/${route}${opts(options)}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, JSON.parse(body));
    }
  });
};

// Create querystring from options object
let opts = (options) => {
  if (options) {
    console.log('?' + _.map(options, (value, key) => `${key}=${value}`).join('&'));
    return '?' + _.map(options, (value, key) => `${key}=${value}`).join('&');
  } else {
    return '';
  };
};