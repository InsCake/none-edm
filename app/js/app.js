'use strict';


// Declare app level module which depends on filters, and services
angular.module('noneEDM', [
  'ngRoute',
  'noneEDM.filters',
  'noneEDM.services',
  'noneEDM.directives',
  'noneEDM.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/new', {templateUrl: 'partials/new.html', controller: 'newEDMCtrl'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
