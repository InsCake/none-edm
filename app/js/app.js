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
  $routeProvider.when('/theNewOne', {templateUrl: 'partials/theNewOne.html', controller: 'newEDMCtrl'});
  $routeProvider.when('/new', {templateUrl: 'partials/new.html', controller: 'newEDMCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
