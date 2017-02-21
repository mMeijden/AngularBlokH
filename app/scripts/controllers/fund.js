'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:FundCtrl
 * @description
 * # FundCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
  .controller('FundCtrl', function ($scope, $http) {
    $http({
      method: "GET",
      url: "https://nknb2xyowi.execute-api.eu-west-1.amazonaws.com/prod/funds"
    }).then(function success(response) {
      $scope.funds = response.data;
    }, function error(response) {
      $scope.funds = response.statusText;
    });
  });
