'use strict';

/**
 * @ngdoc overview
 * @name angularappApp
 * @description
 * # angularappApp
 *
 * Main module of the application.
 */
angular
  .module('angularappApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularappApp.directives',
    'angularappApp.filters'
  ])
  .config(function ($routeProvider ) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'fund'
      })
      .when('/funds', {
        templateUrl: 'views/funds/overview.html',
        controller: 'FundCtrl',
        controllerAs: 'fund'
      })
      .when('/funds/:isin', {
        templateUrl: 'views/funds/details.html',
        controller: 'FundDetailCtrl',
        controllerAs: 'fundDetail'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
angular.module('angularappApp.filters', []);
angular.module('angularappApp.directives', []);
angularappApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

