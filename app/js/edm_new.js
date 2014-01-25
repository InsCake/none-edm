$(function() {

    var edm_page = $('.stage .edm_page'); //edm container

    // templates --------------------------------------------------------------------
    var floor_tps = [ // floors templates
        '<table cellspacing="0" cellpadding="0" style="width:100%" class="floor floor_tp_0101"><tr><td><table cellspacing="0" cellpadding="0" class="room room_tp_0102"><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="152" height="151" alt="item-image"></a></td><td width="5"></td></tr><tr><td width="5"></td><td style="vertical-align:top;" height="36px"><a href="#" style="text-decoration:none;color:#333;"><span style="display:block;height:36px;overflow:hidden;font-size:12px;max-height:36px;line-height:18px;">蓝钻石蜜烤风味巴旦木仁美国大杏仁 扁桃仁</span></a></td><td width="5"></td></tr></table></td><td><table cellspacing="0" cellpadding="0" class="room room_tp_0102"><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="152" height="151" alt="item-image"></a></td><td width="5"></td></tr><tr><td width="5"></td><td style="vertical-align:top;" height="36px"><a href="#" style="text-decoration:none;color:#333;"><span style="display:block;height:36px;overflow:hidden;font-size:12px;max-height:36px;line-height:18px;">蓝钻石蜜烤风味巴旦木仁美国大杏仁 扁桃仁</span></a></td><td width="5"></td></tr></table></td><td><table cellspacing="0" cellpadding="0" class="room room_tp_0102"><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="152" height="151" alt="item-image"></a></td><td width="5"></td></tr><tr><td width="5"></td><td style="vertical-align:top;" height="36px"><a href="#" style="text-decoration:none;color:#333;"><span style="display:block;height:36px;overflow:hidden;font-size:12px;max-height:36px;line-height:18px;">蓝钻石蜜烤风味巴旦木仁美国大杏仁 扁桃仁</span></a></td><td width="5"></td></tr></table></td><td><table cellspacing="0" cellpadding="0" class="room room_tp_0102"><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="152" height="151" alt="item-image"></a></td><td width="5"></td></tr><tr><td width="5"></td><td style="vertical-align:top;" height="36px"><a href="#" style="text-decoration:none;color:#333;"><span style="display:block;height:36px;overflow:hidden;font-size:12px;max-height:36px;line-height:18px;">蓝钻石蜜烤风味巴旦木仁美国大杏仁 扁桃仁</span></a></td><td width="5"></td></tr></table></td></tr></table>',
        '<table cellspacing="0" cellpadding="0" style="width:100%" class="floor"><tr><td><a href="#"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="217" height="217"></a></td><td><a href="#"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="216" height="217"></a></td><td><a href="#"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="217" height="217"></a></td></tr></table>'
    ];
    var room_tps = [{ // room templates
        tpContent: '<table cellspacing="0" cellpadding="0" class="room room_tp_0101"><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="152" height="151" alt="item-image"></a></td><td width="5"></td></tr></table>',
        tpSrc: 'img/room_tp1.png'
    }, {
        tpContent: '<table cellspacing="0" cellpadding="0" class="room room_tp_0102"><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="152" height="151" alt="item-image"></a></td><td width="5"></td></tr><tr><td width="5"></td><td style="vertical-align:top;" height="36px"><a href="#" style="text-decoration:none;color:#333;"><span style="display:block;height:36px;overflow:hidden;font-size:12px;max-height:36px;line-height:18px;">蓝钻石蜜烤风味巴旦木仁美国大杏仁 扁桃仁</span></a></td><td width="5"></td></tr></table>',
        tpSrc: 'img/room_tp2.png'
    }];

    // sidebar templates ---------------
    /*var sidebar_floorEditor = {
        'cate_goods': [],
        'cate_banner': []
    };
    var sidebar_roomEditor = {
        'cate_goods': [],
        'cate_banner': []
    };
    sidebar_floorEditor.cate_goods = [{ // 商品类楼层
        'id': '1',
        'name': 'edit_room-tp',
        'title': '房间模板',
        'content': '<div class="form-group edit_room-tp"><label for="inputEmail3" class="col-sm-3 control-label">房间模板</label><div class="col-sm-9"><a class="thumbnail room-tp_a" href="#modal-changeRoom" data-toggle="modal"><img src="" class="room-tp_img"></a></div></div>'
    }];
    sidebar_floorEditor.cate_banner = [ // banner类楼层

    ];
    sidebar_roomEditor.cate_goods = [{ // 商品类房间
        'id': '1',
        'name': 'edit_image-url',
        'title': 'banner image url',
        'content': '<div class="form-group edit_image-url"><label for="inputEmail3" class="col-sm-3 control-label">Image Url</label><div class="input-group col-sm-9"><input type="url" class="form-control input-sm" id="room-img-url" placeholder="粘贴你要替换的图片地址"><span class="input-group-btn"><button class="btn btn-default input-sm icn-btn edit_image-url-btn" type="button"><i class="fa fa-retweet"></i></button></span></div></div>'
    }];
    sidebar_roomEditor.cate_banner = [{ // banner类房间
        'id': '1',
        'name': 'edit_image-url',
        'title': 'banner image url',
        'content': '<div class="form-group edit_image-url"><label for="inputEmail3" class="col-sm-3 control-label">Image Url</label><div class="input-group col-sm-9"><input type="url" class="form-control input-sm" id="room-img-url" placeholder="粘贴你要替换的图片地址"><span class="input-group-btn"><button class="btn btn-default input-sm icn-btn edit_image-url-btn" type="button"><i class="fa fa-retweet"></i></button></span></div></div>'
    }];*/





    // document event --------------------------------------------------------------------
    $(document).on('click', function() {
        $('.remFloor-btn').hide(); // 隐藏层删除按钮
        $('.floor').removeClass('floor-actived');
        $('.room').removeClass('room-actived');
    });


    // action_bar object --------------------------------------------------------------------
    var action_bar = {
        showRemFloorBtn: function() { // 显示层删除按钮
            $('.remFloor-btn').show();
        },
        isDelActivedFloor: function() { // 弹出模态窗以确认是否删除激活层
            $('.action_bar').on('click', '.remFloor-btn', function(e) { // 点击删除这层
                e.stopPropagation();
                $('#modal-cfmRemFloor').modal('toggle');
                var clone_floorToRemove = $('.stage .floor-actived').clone();
                $('#modal-cfmRemFloor .floorToRemove').html('').append(clone_floorToRemove);
            });
        }
    };
    action_bar.isDelActivedFloor(); // 弹出模态窗以确认是否删除激活层


    // sidebar object --------------------------------------------------------------------
    var sidebar = {
        editFloor: {}, // 子集-楼层编辑器
        editRoom: {}, // 子集-房间编辑器
        stopPropa: function() { // 阻止冒泡
            $('.sidebar').on('click', function(e) {
                e.stopPropagation();
            });
        },
        switchEditTabs: function() { // 切换tab
            $('.sidebar').on('click', '.dashboard .nav-tabs a[href=#tab_editFloor]', function() {
                $(this).tab('show'); // 激活装修楼层面板
            });
            $('.sidebar').on('click', '.dashboard .nav-tabs a[href=#tab_editRoom]', function() {
                $(this).tab('show'); // 激活装修楼层面板
            });
        }
    };
    sidebar.stopPropa(); // 阻止冒泡
    sidebar.switchEditTabs(); // 切换tab

    sidebar.editFloor = { // 子集-楼层编辑器 -----------------------
        showRoomTpModal: function() { // 显示房间模板弹窗
            $('.sidebar').on('click', '.dashboard .room-tp_a', function() {
                $('#modal-changeRoom').modal('toggle');
            });
        },
        getFloorTpName: function(floor_tpCount) {
            var floorCateCount = floor_tpCount.slice(0, 2);
            switch (floorCateCount) {
                case '01':
                    return 'cate_goods';
                    break;
                case '02':
                    return 'cate_banner';
                    break;
            }
        }
    };
    sidebar.editFloor.showRoomTpModal();

    sidebar.editRoom = { // 子集-房间编辑器 ----------------------
        changeImgUrl: function() { // 修改图片
            $('.sidebar').on('click', '.dashboard .edit_image-url-btn', function() {
                var newSrc = $('#room-img-url').val();
                $('.room-actived img[alt=item-image]').attr('src', newSrc);
            });
        },
        getRoomTpName: function(room_tpCount) {
            var roomCateCount = room_tpCount.slice(0, 2);
            switch (roomCateCount) {
                case '01':
                    return 'cate_goods';
                    break;
                case '02':
                    return 'cate_banner';
                    break;
            }
        }
    };
    sidebar.editRoom.changeImgUrl();

    sidebar.editRefresher = { // 子集-侧边栏刷新器 -----------------------
        refreshDashboard: function() { // 更新仪表盘
            sidebar.editRefresher.refreshDashboardFloorTp(); // 更新仪表盘模板
            sidebar.editRefresher.refreshDashboardRoomTp();
            sidebar.editRefresher.refreshDashboardFloorPara(); // 更新仪表盘参数
            sidebar.editRefresher.refreshDashboardRoomPara();
        },
        refreshDashboardFloorTp: function() { // 更新仪表盘模板
            // 刷新楼层编辑器
            var floor_tpCount = $('.stage .floor-actived').attr('class').split(' ')[1].slice(9, 11); // 获取楼层tp相关类名的序号
            var floorTpName = sidebar.editFloor.getFloorTpName(floor_tpCount);
            $('#tab_editFloor').html('');
            for (var i = 0; i < golbalTp.sidebar_floorEditor[floorTpName].length; i++) {
                $('#tab_editFloor').append(golbalTp.sidebar_floorEditor[floorTpName][i].content);
            }
        },
        refreshDashboardRoomTp: function() { // 更新仪表盘模板
            // 刷新房间编辑器
            var room_tpCount = $('.stage .room-actived').attr('class').split(' ')[1].slice(8, 10);
            var roomTpName = sidebar.editRoom.getRoomTpName(room_tpCount);
            $('#tab_editRoom').html('');
            for (var i = 0; i < golbalTp.sidebar_roomEditor[roomTpName].length; i++) {
                $('#tab_editRoom').append(golbalTp.sidebar_roomEditor[roomTpName][i].content);
            }
        },
        refreshDashboardFloorPara: function() { // 更新仪表盘参数 ***
            var floor_tpCount = $('.stage .floor-actived').attr('class').split(' ')[1].slice(9, 11); // 获取楼层tp相关类名的序号
            var floorTpName = sidebar.editFloor.getFloorTpName(floor_tpCount);
            for (var i = 0; i < golbalTp.sidebar_floorEditor[floorTpName].length; i++) {
                sidebar.editRefresher.doSwitchRefreshWhich(golbalTp.sidebar_floorEditor[floorTpName][i]); // 分支判断具体刷新那个参数
            }
        },
        refreshDashboardRoomPara: function() {
            var room_tpCount = $('.stage .room-actived').attr('class').split(' ')[1].slice(8, 10);
            var roomTpName = sidebar.editRoom.getRoomTpName(room_tpCount);
            for (var i = 0; i < golbalTp.sidebar_roomEditor[roomTpName].length; i++) {
                sidebar.editRefresher.doSwitchRefreshWhich(golbalTp.sidebar_roomEditor[roomTpName][i]); // 分支判断具体刷新那个参数
            }
        },
        doSwitchRefreshWhich: function(tName) { // 分支判断具体刷新那个参数
            switch (tName.name) {
                case 'edit_image-url':
                    sidebar.editRefresher.refreshImgUrl(); // 刷新主图片地址
                    break;
                case 'edit_room-tp':
                    sidebar.editRefresher.refreshRoomTp(); // 更新模版示意图片
                    break;
            }
        },
        refreshImgUrl: function() { // 刷新主图片地址
            var activePara = $('.stage .room-actived img[alt=item-image]').attr('src');
            $('.dashboard #room-img-url').val(activePara);
        },
        refreshRoomTp: function() { // 更新模版示意图片
            var activePara = $('.stage .room-actived ').attr('class').split(' ')[1].slice(11) - 1; // 获取房间tp相关类名的序号
            $('#tab_editFloor .room-tp_img').attr('src', room_tps[activePara].tpSrc); // 更新src
        }
    };


    // stage object --------------------------------------------------------------------
    var stage = {
        doActiveFloor: function() { // 激活被点击的层，并做出响应动作
            $('.stage').on('click', '.floor', function(e) {
                if (stage.timer) {
                    clearTimeout(stage.timer);
                    stage.timer = null;
                }
                e.stopPropagation();
                e.preventDefault();
                $('.floor').removeClass('floor-actived');
                $(this).addClass('floor-actived');
                stage.showEditFloor(); // 显示仪表盘
                action_bar.showRemFloorBtn(); // 显示层删除按钮
                stage.timer = setTimeout(function() {
                    $('tab_editRoom').hide();
                    sidebar.editRefresher.refreshDashboard(); // 更新仪表盘参数
                    $('.dashboard .nav-tabs a[href="#tab_editFloor"]').tab('show'); // 激活装修楼层面板
                }, 200);
            });
        },
        showEditFloor: function() { // 显示仪表盘
            $('.control_panel .dashboard').show('500');
            $('.control_panel .fa-tachometer').css({
                'top': '95%',
                'color': '#eee'
            });
        },
        doActiveRoom: function() { // 激活被点击的层
            $('.stage').on('click', '.room', function(e) {
                e.preventDefault();
                $('.room').removeClass('room-actived');
                $(this).addClass('room-actived');
            });
        },
        doDblClickRoom: function() { // 双击层，并做出响应动作
            $('.stage').on('dblclick', '.room', function(e) {
                e.stopPropagation();
                e.preventDefault();
                if (stage.timer) {
                    clearTimeout(stage.timer);
                    stage.timer = null;
                }
                $('tab_editFloor').hide();
                sidebar.editRefresher.refreshDashboard(); // 更新仪表盘参数
                $('.dashboard .nav-tabs a[href="#tab_editRoom"]').tab('show'); // 激活房间楼层面板
            });
        }
    };
    stage.doActiveRoom(); // 激活被点击的房间
    stage.doActiveFloor(); // 激活被点击的层
    stage.doDblClickRoom(); // 双击房间，并做出响应动作


    // modal object --------------------------------------------------------------------
    var modal = {
        stopPropa: function() { // 阻止冒泡
            $('.modal').on('click', function(e) {
                e.stopPropagation();
            });
        },
        selectNewFloorTp: function() { // 选择要新增一层的模板
            $('.newFloor_modal').on('click', '.floor-tp > a', function() {
                var tpIndex = $(this).parent().attr('id').slice(8) - 1;
                edm_page.append(floor_tps[tpIndex]);
                $('#modal-newFloor').modal('hide');
            });
        },
        changeRoomsTp: function() { // 选择要替换的整层房间模板，保持房间激活
            $('#modal-changeRoom').on('click', '.room-tp > a', function() {
                var room_active_index = $('.room-actived').parent().index();
                var tpIndex = $(this).parent().attr('id').slice(7) - 1;
                $('.floor-actived .room').replaceWith(room_tps[tpIndex].tpContent);
                $('.floor-actived').children().children().children().eq(room_active_index).children().addClass('room-actived'); // 保持房间激活
                sidebar.editRefresher.refreshDashboardFloorPara(); // 更新仪表盘参数
                $('#modal-changeRoom').modal('hide');
            });
        },
        delFloor: function() { // 删除当前层
            $('.cfmRemFloor_modal').on('click', '#delFloor-btn', function() {
                $('#modal-cfmRemFloor').modal('hide');
                $('.stage .floor-actived').remove();
            });
        }
    };
    modal.stopPropa(); // 阻止冒泡
    modal.selectNewFloorTp(); // 选择要新增一层的模板
    modal.changeRoomsTp(); // 选择要替换的整层房间模板
    modal.delFloor(); // 删除当前层

});