'use strict';
angular.module('angularappApp.filters').filter('contactName', function() {
  return function(input) {
    return input.firstName + ' ' + input.surname;
  };
});
