(function () {
  'use strict';

  angular.module('cars.login')
    .controller('LoginController', LoginController);

  function LoginController(loginFactory) {

    this.authenticate = function authenticate() {
      loginFactory
        .authenticate(this.user)
        .then(this.afterGet.bind(this));   
    };
  }

  LoginController.prototype.afterGet = function afterGet(data) {
    this.profile = data;

    return this;
  };
})();