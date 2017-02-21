'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:FundCtrl
 * @description
 * # FundCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
  .controller('FundDetailCtrl', function ($scope, $http, $routeParams) {
    $http({
      method: "GET",
      url: "https://nknb2xyowi.execute-api.eu-west-1.amazonaws.com/prod/funds/" + $routeParams.isin
    }).then(function success(response) {
      console.log($routeParams.isin);
      $scope.fund = response.data;
    }, function error(response) {
      $scope.fund = response.statusText;
    });
  });
