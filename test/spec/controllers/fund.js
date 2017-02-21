'use strict';

describe('Controller: FundCtrl', function () {

  // load the controller's module
  beforeEach(module('angularappApp'));

  var FundCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FundCtrl = $controller('FundCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FundCtrl.awesomeThings.length).toBe(3);
  });
});
