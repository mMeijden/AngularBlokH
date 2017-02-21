'use strict';
angular.module('angularappApp.directives').directive('fundOverview', function () {
  return {
    restrict: 'E',
    template:
    '<table class="table">' +
    ' <tr>' +
    '   <th>Isin code</th>' +
    '   <th>Law Country</th>' +
    '   <th>Benchmark Name</th>' +
    ' </tr>' +
    ' <tr ng-repeat="fund in funds">' +
    '  <td>'+
    '   <label>{{fund.isin}}</label>' +
    '  </td>' +
    '  <td>' +
    '   <label>{{fund.lawCountry}}</label>' +
    '  </td>' +
    '  <td>' +
    '   <label>{{fund.benchmark}}</label>' +
    '  </td>' +
    ' </tr>' +
    '</table>'
  }
});
