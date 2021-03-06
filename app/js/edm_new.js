$(function() {

    var edm_page = $('.stage .edm_page'); //edm container

    // tools  -------------------------------------------------------------------
    var tools = {
        html_encode: function(str) {
            var s = "";
            if (str.length == 0) return "";
            s = str.replace(/&/g, "&gt;");
            s = s.replace(/</g, "&lt;");
            s = s.replace(/>/g, "&gt;");
            s = s.replace(/    /g, "");
            s = s.replace(/\'/g, "&#39;");
            s = s.replace(/\"/g, "&quot;");
            s = s.replace(/\n/g, "");
            return s;
        },
        html_decode: function(str) {
            var s = "";
            if (str.length == 0) return "";
            s = str.replace(/&gt;/g, "&");
            s = s.replace(/&lt;/g, "<");
            s = s.replace(/&gt;/g, ">");
            s = s.replace(/&nbsp;/g, " ");
            s = s.replace(/&#39;/g, "\'");
            s = s.replace(/&quot;/g, "\"");
            s = s.replace(/<br>/g, "\n");
            return s;
        },
        replaceAllUseless: function(un_edm_page) { // 移除不需要的元素和属性 参数为要进行移除的dom
            var edm_page = un_edm_page.clone();
            edm_page.find('.need-remove').remove();
            var un_edm_html = edm_page.html();
            var edm_html = un_edm_html.replace(/contenteditable="true"/g, '');
            return edm_html;
        }
    };

    // document event --------------------------------------------------------------------
    $(document).on('click', function() {
        $('.remFloor-btn').hide(); // 隐藏层删除按钮
        $('.stage .floor').removeClass('floor-actived');
        $('.stage .room').removeClass('room-actived');
        $('.stage .floor').find('.move-floor').remove();
        $('.stage .floor').find('.move-room').remove();
        stage.hideEditFloor();
    });


    // action_bar object --------------------------------------------------------------------
    var action_bar = {
        stopPropa: function() { // 阻止冒泡
            $('.action_bar').on('click', function(e) {
                e.stopPropagation();
            });
        },
        isDelActivedFloor: function() { // 弹出模态窗以确认是否删除激活层
            $('.stage').on('click', '.remFloor-btn', function(e) { // 点击删除这层
                e.stopPropagation();
                $('#modal-cfmRemFloor').modal('toggle');
                var clone_floorToRemove = tools.replaceAllUseless($('.stage .floor-actived'));
                $('#modal-cfmRemFloor .floorToRemove').html('').append(clone_floorToRemove);
                $('#modal-cfmRemFloor .needToRemove').remove();
            });
        },
        showNewFloorModal: function() { // 显示新建楼层弹窗
            $('.action_bar').on('click', '#newFloor_btn', function() {
                $('#modal-newFloor').modal('toggle');
            });
        },
        doClickSaveEDMBtn: function() { // 显示保存EDM弹窗
            $('.action_bar').on('click', '#showSaveEDM_btn', function() {
                action_bar.showSaveEDMModal();
            });
        },
        doClickShowEDMPreviewBtn: function() { // 现实预览EDM弹窗
            $('.action_bar').on('click', '#showEDMPreview_btn', function() {
                action_bar.showSaveEDMModal();
                $('#modal-saveEDM a[href=#EDM-preview]').tab('show');
            });
        },
        showSaveEDMModal: function() { // 保存EDM弹窗
            $('#modal-saveEDM').modal('toggle');
            var add_border = $('.edm_page').clone(); // 加border 待定
            add_border.find('.edm_table').css({
                'border-left': '2px solid #e6e6e6',
                'border-right': '2px solid #e6e6e6',
                'border-top': '3px solid #C00',
                'border-bottom': '3px solid #C00'
            });
            var edm_html = tools.replaceAllUseless(add_border); // 移除不需要的元素和属性
            action_bar.creatEDMBlob(edm_html); // 创建要下载的EDM文件（html）
            action_bar.refreshEDMPreview(edm_html); // 刷新要下载的EDM 页面预览 和 代码预览
            return 1;
        },
        creatEDMBlob: function(edm_html) { // 创建要下载的EDM文件（html）
            window.URL = window.webkitURL || window.URL;
            var bb = new Blob([edm_html], {
                type: 'text/html'
            });
            $('#modal-saveEDM .doSaveEDM_btn').attr('href', window.URL.createObjectURL(bb));
        },
        refreshEDMPreview: function(edm_html) { // 刷新要下载的EDM 页面预览 和 代码预览
            $('#modal-saveEDM #EDM-preview').html(edm_html);
            $('#modal-saveEDM #EDM-code pre').html(tools.html_encode(edm_html));
            window.prettyPrint();
            $('#modal-saveEDM #EDM-code pre').removeClass('prettyprinted');
            $('#modal-saveEDM .tab-pane').add($('#modal-saveEDM .nav-tabs li')).removeClass('active');
        }
    };
    action_bar.stopPropa(); // 阻止冒泡
    action_bar.isDelActivedFloor(); // 弹出模态窗以确认是否删除激活层
    action_bar.showNewFloorModal(); // 显示新建楼层弹窗
    action_bar.doClickSaveEDMBtn(); // 显示保存EDM弹窗
    action_bar.doClickShowEDMPreviewBtn(); // 现实预览EDM弹窗


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
            $('.sidebar').on('click', '.dashboard .nav-tabs a[href=#tab_editFloor]', function(e) {
                e.preventDefault();
                $(this).tab('show'); // 激活装修楼层面板
            });
            $('.sidebar').on('click', '.dashboard .nav-tabs a[href=#tab_editRoom]', function(e) {
                e.preventDefault();
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
        changeGoodLinkHref: function() { // 修改商品链接
            $('.sidebar').on('click', '.dashboard .edit_good-link-href-btn', function() {
                var newHref = $('#good-link-href').val();
                $('.room-actived a').attr('href', newHref);
            });
        }
    };
    sidebar.editRoom.changeImgUrl(); // 修改图片
    sidebar.editRoom.changeGoodLinkHref(); // 修改商品链接

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
            var floorTpName = golbalTp.getFloorTpName(floor_tpCount);
            $('#tab_editFloor').html('');
            for (var i = 0; i < golbalTp.sidebar_floorEditor[floorTpName].length; i++) {
                $('#tab_editFloor').append(golbalTp.sidebar_floorEditor[floorTpName][i].content);
            }
        },
        refreshDashboardRoomTp: function() { // 更新仪表盘模板
            // 刷新房间编辑器
            var room_tpCount = $('.stage .room-actived').attr('class').split(' ')[1].slice(8, 10);
            var roomTpName = golbalTp.getRoomTpName(room_tpCount);
            $('#tab_editRoom').html('');
            for (var i = 0; i < golbalTp.sidebar_roomEditor[roomTpName].length; i++) {
                $('#tab_editRoom').append(golbalTp.sidebar_roomEditor[roomTpName][i].content);
            }
        },
        refreshDashboardFloorPara: function() { // 更新仪表盘参数 ***
            var floor_tpCount = $('.stage .floor-actived').attr('class').split(' ')[1].slice(9, 11); // 获取楼层tp相关类名的序号
            var floorTpName = golbalTp.getFloorTpName(floor_tpCount);
            for (var i = 0; i < golbalTp.sidebar_floorEditor[floorTpName].length; i++) {
                sidebar.editRefresher.doSwitchRefreshWhich(golbalTp.sidebar_floorEditor[floorTpName][i]); // 分支判断具体刷新那个参数
            }
        },
        refreshDashboardRoomPara: function() {
            var room_tpCount = $('.stage .room-actived').attr('class').split(' ')[1].slice(8, 10);
            var roomTpName = golbalTp.getRoomTpName(room_tpCount);
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
                case 'edit_good-link-href':
                    sidebar.editRefresher.refreshGoodLinkUrl(); // 更新商品链接
                    break;
            }
        },
        refreshRoomTp: function() { // 更新模版示意图片
            var activePara = $('.stage .room-actived').attr('class').split(' ')[1].slice(11) - 1; // 获取房间tp相关类名的序号
            $('#tab_editFloor .room-tp_img').attr('src', golbalTp.room_tps[activePara].imgSrc); // 更新src
        },
        refreshImgUrl: function() { // 刷新主图片地址
            var activePara = $('.stage .room-actived img[alt=item-image]').attr('src');
            $('.dashboard #room-img-url').val(activePara);
        },
        refreshGoodLinkUrl: function() { // 刷新商品链接
            var activePara = $('.stage .room-actived a').attr('href');
            $('.dashboard #good-link-href').val(activePara);
        }
    };


    // stage object --------------------------------------------------------------------
    var stage = {
        op_btns: {
            'move_floor': '<tr class="move-floor need-remove"><td><i class="fa fa-trash-o remFloor-btn"></i><i class="fa fa-angle-up move-floor-up"></i><i class="fa fa-angle-down move-floor-down"></i></td></tr>',
            'move_room': '<tr class="move-room need-remove"><td><i class="fa fa-angle-left move-room-left"></i><i class="fa fa-angle-right move-room-right"></i></td></tr>'
        },
        doActiveFloor: function() { // 激活被点击的层，并做出响应动作
            $('.stage').on('click', '.floor', function(e) {
                if (stage.timer) {
                    clearTimeout(stage.timer);
                    stage.timer = null;
                }
                e.stopPropagation();
                e.preventDefault();
                $('.stage .floor').removeClass('floor-actived');
                $('.stage .floor').find('.move-floor').remove();
                $(this).addClass('floor-actived').append(stage.op_btns.move_floor);
                stage.showEditFloor(); // 显示仪表盘
                stage.showRemFloorBtn(); // 显示层删除按钮
                stage.toggleMoveFloorBtn(); // 根据是否是顶底的楼层，判断是否隐藏向下 或 向上按钮
                stage.timer = setTimeout(function() {
                    stage.showEditFloor(); // 显示仪表盘
                    sidebar.editRefresher.refreshDashboard(); // 更新仪表盘参数
                    $('.dashboard .nav-tabs a[href="#tab_editFloor"]').tab('show'); // 激活装修楼层面板
                }, 250);
            });
        },
        showRemFloorBtn: function() { // 显示层删除按钮
            $('.stage .remFloor-btn').show();
        },
        showEditFloor: function() { // 显示仪表盘
            $('.control_panel .dashboard').fadeIn('300');
            $('.control_panel .fa-tachometer').css({
                'top': '95%',
                'color': '#eee'
            });
        },
        hideEditFloor: function() { // 隐藏仪表盘
            $('.control_panel .dashboard').fadeOut('300');
            $('.control_panel .fa-tachometer').css({
                'top': '50%',
                'color': '#888'
            });
        },
        doActiveRoom: function() { // 激活被点击的层
            $('.stage').on('click', '.room', function(e) {
                e.preventDefault();
                $('.stage .room').removeClass('room-actived');
                $('.stage .floor').find('.move-room').remove();
                $(this).addClass('room-actived').append(stage.op_btns.move_room);
                stage.toggleMoveRoomBtn(); // 根据是否是两边的房间，判断是否隐藏向左 或 向右按钮
            });
        },
        doDblClickRoom: function() { // 双击层，并做出响应动作
            $('.stage').on('dblclick', '.room', function(e) {
                e.stopPropagation();
                e.preventDefault();
                if (stage.timer) {
                    clearTimeout(stage.timer);
                    stage.timer = null;
                    stage.showEditFloor(); // 显示仪表盘
                    sidebar.editRefresher.refreshDashboard(); // 更新仪表盘参数
                    $('.dashboard .nav-tabs a[href="#tab_editRoom"]').tab('show'); // 激活房间楼层面板
                }
            });
        },
        toggleMoveFloorBtn: function() { // 根据是否是顶底的楼层，判断是否隐藏向下 或 向上按钮
            var floor_index = $('.stage .floor-actived').index();
            var floor_length = $('.stage .floor-actived').parent().children().length;
            if (floor_index < 1) {
                $('.stage .floor-actived').find('.fa-angle-up').remove();
            }
            if (floor_index > floor_length - 2) {
                $('.stage .floor-actived').find('.fa-angle-down').remove();
            };
        },
        toggleMoveRoomBtn: function() { // 根据是否是两边的房间，判断是否隐藏向左 或 向右按钮
            var room_index = $('.stage .room-actived').parent().index();
            var room_length = $('.stage .room-actived').parent().parent().children().length;
            if (room_index <= 1) {
                $('.stage .room-actived').find('.fa-angle-left').remove();
            }
            if (room_index >= room_length - 2) {
                $('.stage .room-actived').find('.fa-angle-right').remove();
            };
        },
        moveFloorUp: function() { // 上移楼层
            $('.stage').on('click', '.move-floor-up', function() {
                var active_floor = $('.stage .floor-actived');
                var prev_floor = active_floor.prev();
                prev_floor.before(active_floor);
            })
        },
        moveFloorDown: function() { // 下移楼层
            $('.stage').on('click', '.move-floor-down', function() {
                var active_floor = $('.stage .floor-actived');
                var next_floor = active_floor.next();
                next_floor.after(active_floor);
            })
        },
        moveRoomLeft: function() { // 左移房间
            $('.stage').on('click', '.move-room-left', function() {
                var active_room = $('.stage .room-actived').parent();
                var prev_room = active_room.prev().prev().prev();
                prev_room.before(active_room.prev()).before(active_room);
            })
        },
        moveRoomRight: function() { // 右移房间
            $('.stage').on('click', '.move-room-right', function() {
                var active_room = $('.stage .room-actived').parent();
                var next_room = active_room.next().next().next();
                next_room.after(active_room.next()).after(active_room);
            })
        }
    };
    stage.doActiveRoom(); // 激活被点击的房间
    stage.doActiveFloor(); // 激活被点击的层
    stage.doDblClickRoom(); // 双击房间，并做出响应动作
    stage.moveFloorUp(); // 上移楼层
    stage.moveFloorDown(); // 下移楼层
    stage.moveRoomLeft(); // 左移房间
    stage.moveRoomRight(); // 右移房间


    // modal object --------------------------------------------------------------------
    var modal = {
        stopPropa: function() { // 阻止冒泡
            $('#modal-cfmRemFloor').add($('#modal-changeRoom')).on('click', function(e) {
                e.stopPropagation();
            });
        },
        selectNewFloorTp: function() { // 选择要新增一层的模板
            $('.newFloor_modal').on('click', '.floor-tp > a', function() {
                var tpIndex = $(this).parent().attr('id').slice(8) - 1;
                $('.edm_page .edm_td').append(golbalTp.floor_tps[tpIndex].html);
                $('#modal-newFloor').modal('hide');
            });
        },
        changeRoomsTp: function() { // 选择要替换的整层房间模板，保持房间激活
            $('#modal-changeRoom').on('click', '.room-tp > a', function() {
                var room_active_index = $('.room-actived').parent().index();
                var tpIndex = $(this).parent().attr('id').slice(7) - 1;
                $('.floor-actived .room').replaceWith(golbalTp.room_tps[tpIndex].html);
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
