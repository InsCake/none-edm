'use strict';

/* Controllers */

var noneEDMControllers = angular.module('noneEDM.controllers', []);

//globel-controller
noneEDMControllers.controller('golbelCtrl', ['$scope',
    function($scope) {
        $scope.documentClick = function() {
            $scope.$broadcast('to-child-documentClick');
        };
    }

]);

//新的EDM-controller
noneEDMControllers.controller('newEDMCtrl', ['$scope',
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

        //显示或隐藏移动楼层按钮
        $scope.isFloorFocus = true;
        $scope.toggleMoveFloorBtn = function(e) {
            e.stopPropagation();
            $scope.isFloorFocus = false;
        };
        $scope.$on('to-child-documentClick', function(e) {
            $scope.isFloorFocus = true;
        });
    }
]);

//左侧编辑器-controller
noneEDMControllers.controller('editor', ['$scope',
    function($scope) {


    }
]);

//右侧预览-contraller
noneEDMControllers.controller('preview', ['$scope',
    function($scope) {



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
