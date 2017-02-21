'use strict';

describe('Controller: SpeeCtrl', function () {

  // load the controller's module
  beforeEach(module('angularappApp'));

  var SpeeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpeeCtrl = $controller('SpeeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SpeeCtrl.awesomeThings.length).toBe(3);
  });
});
