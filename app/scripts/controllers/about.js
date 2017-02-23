'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
  });
