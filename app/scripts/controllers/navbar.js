'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
  .controller('NavbarCtrl', function($scope, $auth) {
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
  });
