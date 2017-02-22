'use strict';

/**
 * @ngdoc overview
 * @name angularappApp
 * @description
 * # angularappApp
 *
 * Main module of the application.
 */

/**
 * Helper auth functions
 */
var skipIfLoggedIn = ['$q', '$auth', function ($q, $auth) {
  var deferred = $q.defer();
  if ($auth.isAuthenticated()) {
    deferred.reject();
  } else {
    deferred.resolve();
  }
  return deferred.promise;
}];

var loginRequired = ['$q', '$location', '$auth', function ($q, $location, $auth) {
  var deferred = $q.defer();
  if ($auth.isAuthenticated()) {
    deferred.resolve();
  } else {
    $location.path('/login');
  }
  return deferred.promise;
}];

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
    'ui.router',
    'satellizer',
    'toastr',
    'angularappApp.directives',
    'angularappApp.filters'
  ])
  .config(function ($routeProvider, $stateProvider, $urlRouterProvider, $authProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        controller: 'MainCtrl',
        controllerAs: 'main',
        templateUrl: 'views/main.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'fund'
      })
      .state('funds', {
        url: '/funds',
        templateUrl: 'views/funds/overview.html',
        controller: 'FundCtrl',
        controllerAs: 'fund'
      })
      .state('isin', {
        url: '/funds/:isin',
        templateUrl: 'views/funds/details.html',
        controller: 'FundDetailCtrl',
        controllerAs: 'fundDetail'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('logout', {
        url: '/logout',
        template: null,
        controller: 'LogoutCtrl'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        resolve: {
          loginRequired: loginRequired
        }
      });
    $urlRouterProvider.otherwise('/');



    $authProvider.facebook({
      clientId: '603122136500203'
    });


    //   $routeProvider
    //     .when('/', {
    //       templateUrl: 'views/main.html',
    //       controller: 'MainCtrl',
    //       controllerAs: 'main'
    //     })
    //     .when('/about', {
    //       templateUrl: 'views/about.html',
    //       controller: 'AboutCtrl',
    //       controllerAs: 'about'
    //     })
    //     .when('/contact', {
    //       templateUrl: 'views/contact.html',
    //       controller: 'ContactCtrl',
    //       controllerAs: 'fund'
    //     })
    //     .when('/funds', {
    //       templateUrl: 'views/funds/overview.html',
    //       controller: 'FundCtrl',
    //       controllerAs: 'fund'
    //     })
    //     .when('/funds/:isin', {
    //       templateUrl: 'views/funds/details.html',
    //       controller: 'FundDetailCtrl',
    //       controllerAs: 'fundDetail'
    //     })
    //     .otherwise({
    //       redirectTo: '/'
    //     });
     });
    angular.module('angularappApp.filters', []);
    angular.module('angularappApp.directives', []);
    angularappApp.config(['$locationProvider', function ($locationProvider) {
      $locationProvider.hashPrefix('');
    }]);

