(function () {
  'use strict';

  angular.module('coreFilters')
    .filter('fiveMaskFilter', FiveMaskFilter);

    function FiveMaskFilter () {
      return function maskFilter(text) {
        if (text) {
          var cardCodified;
          try{
           cardCodified = text.substr(0,5);
          }catch(error){
            throw new TypeError("Invalid data");
          }

          return text.replace(cardCodified, '*****');
        } else {
            return '';
        }
      };
    }
})();