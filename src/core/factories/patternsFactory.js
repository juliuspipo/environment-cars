(function () {
  'use strict';

  angular.module('coreFactories')
    .factory('patternsFactory', patternsFactory);

  function patternsFactory () {
    var factory = {
      address: /^(?=.*\d)[a-zA-ZñÑáéíóúÁÉÍÓÚ | {,. \s\d\/}]+$/,
      curp: /^[A-Z]{4}[\d]{6}(H|M){1}(AS|BC|BS|CC|CH|CL|CM|CS|DF|DG|GR|GT|HG|JC|MC|MN|MS|NE|NL|NT|OC|PL|QR|QT|SL|SP|SR|TC|TL|TS|VZ|YN|ZS){1}[A-Z]{3}([\d]|[A-Z]){1}[\d]{1}$/i,
      email: /^[\w\d-]+(\.[\w\d-]+)*@[\w\d {/\-\}]+(\.[\w\d-]+)*(\.[a-z]{2,3})$/,
      file: /^[\w\s.-]{3,}$/,
      number: /^[\d]*$/,
      password: /^[\d\wÑñ|/\+\*'&%#$!{}?=\-\{\}\~?]*$/,
      questions: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ | {},.:;?¿¡!"()@\-_*+\d\s\][]*$/,
      police: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ|\d}]*$/,
      spanish: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/,
      numbers: /^[^0][\d]*$/
    };

    return factory;
  }
})();