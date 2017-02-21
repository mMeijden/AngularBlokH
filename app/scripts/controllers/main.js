'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp').controller('MainCtrl', function ($scope) {
  $scope.contacts = [
    {
      firstName: 'Frank',
      surname: 'Muscles',
      email: 'frank@muscles.com'
    },
    {
      firstName: 'Eddy',
      surname: 'Valentino',
      email: 'eddy@valfam.co.uk'
    }
  ];

  $scope.newContact = {};
  $scope.saveContact = function() {
    $scope.contacts.push(angular.copy($scope.newContact));
    // Note that we're doing a copy action above. This is because objects are passed through reference
    // in JavaScript, meaning the new table entry will be the same object as the one bound to the form.
    // Editing the form then means the table entry gets edited as well.
    // Also, when adding multiple entries an error occurs because it's the same object and duplicates
    // are not allowed.

    $scope.newContact = {};
  };

  $scope.deleteContact = function(contact) {
    var index = $scope.contacts.indexOf(contact);
    if(index !== -1) {
      $scope.contacts.splice(index, 1);
    }
  };
  });
