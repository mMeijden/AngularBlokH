'use strict';

/**
 * @ngdoc directive
 * @name angularappApp.directive:passwordStrength
 * @description
 * # passwordStrength
 */
angular.module('angularappApp')
  .directive('passwordStrength', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the passwordStrength directive');
      }
    };
  });
