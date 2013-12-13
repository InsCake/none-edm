'use strict';

/* Controllers */

var noneEDMControllers = angular.module('noneEDM.controllers', []);

noneEDMControllers.controller('MyCtrl1', [

	function () {

  }]);

noneEDMControllers.controller('newEDMCtrl', ['$scope',

	function ($scope) {
		//游标
		var floorIndex = 0,
			roomIndex = 0;
		/*rowIndex = 0;*/

		//设置 楼层、房间、行的初始状态
		/*var _rows = [
			{
				id: rowIndex
			}
		];*/
		var _rooms = [
			{
				id: roomIndex
			}
		];
		$scope.floors = [
			{
				id: 0,
				rooms: _rooms
			}
		];

		$scope.roomQuantity = 1;
		/*$scope.rowQuantity = 1;*/


		//新建一层
		$scope.newFloor = function () {
			$scope.floors.push({
				id: floorIndex++,
				rooms: _rooms
			});
		};

		//监控房间数设置
		$scope.$watch('roomQuantity', function () {
			$scope.floors[floorIndex].rooms = [];
			for (var i = 0; i < $scope.roomQuantity; i++) {
				$scope.floors[floorIndex].rooms.push({
					id: (i + 1)
				});
			}
		});
		//监控行数设置
		/*$scope.$watch('rowQuantity', function () {
			$scope.floors[floorIndex].rows = [];
			for (var i = 0; i < $scope.rowQuantity; i++) {
				$scope.floors[floorIndex].rows.push({
					id: (i + 1)
				});
			}
		});*/

  }]);