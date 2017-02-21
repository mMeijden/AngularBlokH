'use strict';
angular.module('angularappApp.directives').directive('feedback', function($window, $location, $log) {
  return {
    restrict: 'E',
    template: '<aside id="feedback">' +
    '<div class="bar">' +
    '	<h3>Feedback</h3>' +
    '	<span class="pos" ng-click="feedback.type = \'positive\'">&check;</span>' +
    '	<span class="neg" ng-click="feedback.type = \'negative\'">&times;</span>' +
    '</div>' +
    '<div class="form" ng-hide="feedback.type == undefined">' +
    '	<h3 class="pos" ng-show="feedback.type == \'positive\'">Positive feedback</h3>' +
    '	<h3 class="neg" ng-show="feedback.type == \'negative\'">Negative feedback</h3>' +
    '	<form ng-submit="sendFeedback()">' +
    '		<textarea ng-model="feedback.message" ' +
    '		          class="form-control"></textarea>' +
    '		<button class="btn">Send</button>' +
    '	</form>' +
    '</div>' +
    '</aside>',
    scope: {},
    link: function(scope, iElement, iAttrs) {
      scope.sendFeedback = function () {
        if(iAttrs.debug !== undefined) {
          $log.log('Submitted feedback for route ' + $location.path() + ':', scope.feedback);
        }
        else {
          // Send feedback to webserver
          console.log("Message submitted to the database");
          $window.alert('Currently not supported');
        }
      };
    }
  };
});
