'use strict';

/* Controllers */

var noneEDMControllers = angular.module('noneEDM.controllers', []);

noneEDMControllers.controller('newEDMCtrl', ['$scope',

    function($scope) {
        /*$scope.rooms = [
            {
                name: 'haha'
            },
            {
                name: 'haha'
            }
        ];

        $scope.putFloorIntoBuilding = function () {
            var floor = {
                dom: document.getElementById('previewFloor'),
                html: document.getElementById('previewFloor').innerHTML,
                id: document.getElementById('previewFloor').children[0].title
            };

            function isFloorExist() {
                var existFloorId = document.getElementById('previewBuilding')；
            }
        };*/
    }
]);

noneEDMControllers.controller('editor', ['$scope',
    function($scope) {

        var building = document.getElementById('previewBuilding');


        //将现有的单层插入或更新到右侧的大楼里

        $scope.putFloorIntoBuilding = function() {

            //断插入还是更新
            var existId = isFloorExist();
            if (existId !== -1) {
                //更新
                building.children[existId].innerHTML = document.getElementById('previewFloor').children[0].innerHTML;
            } else {
                //插入
                var cloneOfCurrentFloor = document.getElementById('previewFloor').children[0].cloneNode(true);
                building.appendChild(cloneOfCurrentFloor);
            }
        }


        //更具层号是否存在判断插入还是更新

        function isFloorExist() {
            var currentFloor_id = document.getElementById('previewFloor').children[0].className.slice(6);
            var floorArr = building.children;

            for (var i = 0; i < floorArr.length; i++) {
                if (currentFloor_id === floorArr[i].className.slice(6)) {
                    return i;
                }
            }
            return -1;
        }
    }
]);


noneEDMControllers.controller('newEDMCtrl2', ['$scope',

    function($scope) {
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
        var _rooms = [{
            id: roomIndex
        }];
        $scope.floors = [{
            id: 0,
            rooms: _rooms
        }];

        $scope.roomQuantity = 1;
        /*$scope.rowQuantity = 1;*/


        //新建一层
        $scope.newFloor = function() {
            $scope.floors.push({
                id: floorIndex++,
                rooms: _rooms
            });
        };

        //监控房间数设置
        $scope.$watch('roomQuantity', function() {
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

    }
]);
