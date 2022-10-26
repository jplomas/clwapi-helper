(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["clwapi-helper"] = factory());
})(this, (function () { 'use strict';

  class CLWAPI {
    constructor (username, password) {
      this.username = username;
      this.password = password;
    }
  }

  return CLWAPI;

}));
