'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
  .controller('ContactCtrl', ['$scope', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.counter = 1;
  }]);
