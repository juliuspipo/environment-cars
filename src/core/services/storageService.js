(function () {
  'use strict';

  angular.module('coreServices')
    .service('StorageService', StorageService);

  function StorageService() {
    var storage;
    var storageBox = {};

    if (localStorage) {
      storage = localStorage;
    } else {
      storage = {
        getItem: function getItem(key) {
          return storageBox[key];
        },
        removeItem: function removeItem(key) {
          delete storageBox[key];
        },
        setItem: function setItem(key, value) {
          if (key && value) {
            storageBox[key] = value;
          }
        }
      };
    }

    this.getItem = function getItem(key) {
      var result = storage.getItem(key);

      return (result) ? JSON.parse(result) : result;
    };

    this.removeItem = function removeItem(key) {
      storage.removeItem(key);
    };

    this.setItem = function setItem(key, value) {
      storage.setItem(key, JSON.stringify(value));
    };

    return this;
  }
})();