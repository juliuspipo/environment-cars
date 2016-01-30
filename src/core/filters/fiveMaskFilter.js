(function () {
  'use strict';

  angular.module('coreFilters')
    .filter('fiveMaskFilter', FiveMaskFilter);

    function FiveMaskFilter () {
      return function maskFilter(text) {
        if (text) {
          var cardCodified = text.substr(0,5);

          return text.replace(cardCodified, '*****');
        } else {
            return '';
        }
      };
    }
})();