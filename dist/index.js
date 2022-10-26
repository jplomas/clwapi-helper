(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('axios')) :
  typeof define === 'function' && define.amd ? define(['axios'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["clwapi-helper"] = factory(global.axios));
})(this, (function (axios) { 'use strict';

  class CLWAPI {
    constructor (url, username, password) {
      this.url = url;
      this.username = username;
      this.password = password;
    }

    async getToken () {
      const response = await axios.post(
        `${this.url}/publicapi/login/`,
        `username=${this.username}&password=${this.password}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json'
          }
        }
      );
      const data = await response;
      console.log(data);
      return data.token;
    }
  }

  return CLWAPI;

}));
