'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
  .controller('LogoutCtrl', function($location, $auth, toastr) {
    if (!$auth.isAuthenticated()) { return; }
    $auth.logout()
      .then(function() {
        toastr.info('You have been logged out');
        $location.path('/');
      });
  });
