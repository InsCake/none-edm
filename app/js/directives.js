'use strict';

/* Directives */
var noneEDMDirectives = angular.module('noneEDM.directives', []);

noneEDMDirectives.directive('appVersion', ['version', function (version) {
		return function (scope, elm, attrs) {
			elm.text(version);
		};
  }]);

noneEDMDirectives.directive('roomspace', function () {
	return {
		restrict: 'EA',
		replace: true,
		template: '<table><tr><td>' + '<img src="http://ww3.sinaimg.cn/large/93884909gw1ea0x8ev6rbj20640640sp.jpg">' + '</tr></td></table>'
	};
});