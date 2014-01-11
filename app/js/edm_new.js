$(function() {

    var edm_page = $('.stage .edm_page'); //edm container

    var floor_tps = [ // floors templates
        '<table cellspacing="0" cellpadding="0" style="width:100%" class="floor"><tr><td><a href="#"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="162" height="161"></a></td><td><a href="#"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="162" height="161"></a></td><td><a href="#"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="162" height="161"></a></td><td><a href="#"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="162" height="161"></a></td></tr></table>',
        '<table cellspacing="0" cellpadding="0" style="width:100%" class="floor"><tr><td><a href="#"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="217" height="217"></a></td><td><a href="#"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="216" height="217"></a></td><td><a href="#"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="217" height="217"></a></td></tr></table>'
    ];


    // document event --------------------------------------------------------------------
    $(document).on('click', function() {
        $('.remFloor-btn').hide(); // 隐藏层删除按钮
        $('.floor').removeClass('actived');
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
                var clone_floorToRemove = $('.stage .actived').clone();
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
        $('.stage .actived').remove();
    });


    // stage object --------------------------------------------------------------------
    var stage = {
        doActiveFloor: function() {
            $('.stage').on('click', '.floor', function(e) {
                e.stopPropagation();
                $('.floor').removeClass('actived');
                $(this).addClass('actived');
                action_bar.showRemFloorBtn();
            });
        }
    };
    stage.doActiveFloor();

});
