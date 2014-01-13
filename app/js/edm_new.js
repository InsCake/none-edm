$(function() {

    var edm_page = $('.stage .edm_page'); //edm container

    var floor_tps = [ // floors templates
        '<table cellspacing="0" cellpadding="0" style="width:100%" class="floor"><tr><td><a href="#"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="162" height="161"></a></td><td><a href="#"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="162" height="161"></a></td><td><a href="#"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="162" height="161"></a></td><td><a href="#"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="162" height="161"></a></td></tr></table>',
        '<table cellspacing="0" cellpadding="0" style="width:100%" class="floor"><tr><td><a href="#"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="217" height="217"></a></td><td><a href="#"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="216" height="217"></a></td><td><a href="#"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="217" height="217"></a></td></tr></table>'
    ];


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



    // modal object --------------------------------------------------------------------
    var modal = {
        selectNewFloor: function() { // 选择要新增一层的模板
            $('.newFloor_modal').on('click', '.flooe-tp', function() {
                var tpIndex = $(this).attr('id').slice(2) - 1;
                edm_page.append(floor_tps[tpIndex]);
                $('#modal-newFloor').modal('hide');
            });
        }
    };
    modal.selectNewFloor();
    $('.cfmRemFloor_modal').on('click', '#delFloor-btn', function() {
        $('#modal-cfmRemFloor').modal('hide');
        $('.stage .floor-actived').remove();
    });

    // sidebar --------------------------------------------------------------------
    var sidebar = {
        editRoom: {}, // 子集-房间编辑器
    };

    sidebar.editRoom = { // 子集-房间编辑器
        refreshImgRul: function() {
            $('.sidebar').on('click', '#tab_editRoom .edit_image-url-btn', function() {
                var newSrc = $('#room-img-url').val();
                $('.room-actived img[alt=item-image]').attr('src', newSrc);
            });
        }
    };
    sidebar.editRoom.refreshImgRul();

    // stage object --------------------------------------------------------------------
    var stage = {
        doActiveFloor: function() { // 激活被点击的层，并做出响应动作
            $('.stage').on('click', '.floor', function(e) {
                e.stopPropagation();
                $('.floor').removeClass('floor-actived');
                $(this).addClass('floor-actived');
                action_bar.showRemFloorBtn(); // 显示层删除按钮
                stage.showEditFloor(); // 显示仪表盘
                $('.dashboard .nav-tabs a[href="#tab_editFloor"]').tab('show'); // 激活装修楼层面板
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
                $('.room').removeClass('room-actived');
                $(this).addClass('room-actived');
            });
        },
        doDblClickRoom: function() { // 双击层，并做出响应动作
            $('.stage').on('dblclick', '.room', function(e) {
                e.stopPropagation();
                $('.dashboard .nav-tabs a[href="#tab_editRoom"]').tab('show'); // 激活房间楼层面板
            });
        }
    };
    stage.doActiveFloor(); // 激活被点击的层
    stage.doActiveRoom(); // 激活被点击的房间
    stage.doDblClickRoom(); // 双击房间，并做出响应动作

});
