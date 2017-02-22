'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
  .controller('SignupCtrl', function($scope, $location, $auth, toastr) {
    $scope.signup = function() {
      var response = 123;
      // $auth.signup($scope.user)
      //   .then(function(response) {
          $auth.setToken(response);
          $auth.setAuthenticated(true);
          $location.path('/');
          toastr.info('You have successfully created a new account and have been signed-in');
     //   })
      //  .catch(function(response) {
        //  toastr.error(response.data.message);
       // });
    };
  });
