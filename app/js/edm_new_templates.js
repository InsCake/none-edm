var golbalTp = {

    // edm templates --------------------------------------------------------------------
    'floor_tps': [],
    'room_tps': [],

    // sidebar templates --------------------------------------------------------------------
    'sidebar_floorEditor': {
        'cate_goods': [],
        'cate_banner': []
    },
    'sidebar_roomEditor': {
        'cate_goods': [],
        'cate_banner': []
    }
};



$(function() {
    // templates --------------------------------------------------------------------
    golbalTp.floor_tps = [{ // floors templates
        'id': '1',
        'name': '4Rooms',
        'html': '<table cellspacing="0" cellpadding="0" style="width:100%" class="floor floor_tp_0101"><tr><td><table cellspacing="0" cellpadding="0" class="room room_tp_0102"><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="152" height="151" alt="item-image"></a></td><td width="5"></td></tr><tr><td width="5"></td><td style="vertical-align:top;" height="36px"><a href="#" style="text-decoration:none;color:#333;"><span style="display:block;height:36px;overflow:hidden;font-size:12px;max-height:36px;line-height:18px;">蓝钻石蜜烤风味巴旦木仁美国大杏仁 扁桃仁</span></a></td><td width="5"></td></tr></table></td><td><table cellspacing="0" cellpadding="0" class="room room_tp_0102"><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="152" height="151" alt="item-image"></a></td><td width="5"></td></tr><tr><td width="5"></td><td style="vertical-align:top;" height="36px"><a href="#" style="text-decoration:none;color:#333;"><span style="display:block;height:36px;overflow:hidden;font-size:12px;max-height:36px;line-height:18px;">蓝钻石蜜烤风味巴旦木仁美国大杏仁 扁桃仁</span></a></td><td width="5"></td></tr></table></td><td><table cellspacing="0" cellpadding="0" class="room room_tp_0102"><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="152" height="151" alt="item-image"></a></td><td width="5"></td></tr><tr><td width="5"></td><td style="vertical-align:top;" height="36px"><a href="#" style="text-decoration:none;color:#333;"><span style="display:block;height:36px;overflow:hidden;font-size:12px;max-height:36px;line-height:18px;">蓝钻石蜜烤风味巴旦木仁美国大杏仁 扁桃仁</span></a></td><td width="5"></td></tr></table></td><td><table cellspacing="0" cellpadding="0" class="room room_tp_0102"><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="152" height="151" alt="item-image"></a></td><td width="5"></td></tr><tr><td width="5"></td><td style="vertical-align:top;" height="36px"><a href="#" style="text-decoration:none;color:#333;"><span style="display:block;height:36px;overflow:hidden;font-size:12px;max-height:36px;line-height:18px;">蓝钻石蜜烤风味巴旦木仁美国大杏仁 扁桃仁</span></a></td><td width="5"></td></tr></table></td></tr></table>',
    }, {
        'id': '2',
        'name': '3Rooms',
        'html': '<table cellspacing="0" cellpadding="0" style="width:100%" class="floor"><tr><td><a href="#"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="217" height="217"></a></td><td><a href="#"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="216" height="217"></a></td><td><a href="#"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="217" height="217"></a></td></tr></table>'
    }];

    golbalTp.room_tps = [{ // room templates
        'id': '1',
        'name': 'onlyMainImg',
        'html': '<table cellspacing="0" cellpadding="0" class="room room_tp_0101"><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="152" height="151" alt="item-image"></a></td><td width="5"></td></tr></table>',
        'imgSrc': 'img/room_tp1.png'
    }, {
        'id': '2',
        'name': 'ImgAndName',
        'html': '<table cellspacing="0" cellpadding="0" class="room room_tp_0102"><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="display:block;line-height:100%;" border="0" width="152" height="151" alt="item-image"></a></td><td width="5"></td></tr><tr><td width="5"></td><td style="vertical-align:top;" height="36px"><a href="#" style="text-decoration:none;color:#333;"><span style="display:block;height:36px;overflow:hidden;font-size:12px;max-height:36px;line-height:18px;">蓝钻石蜜烤风味巴旦木仁美国大杏仁 扁桃仁</span></a></td><td width="5"></td></tr></table>',
        'imgSrc': 'img/room_tp2.png'
    }];

    // sidebar templates --------------------------------------------------------------------
    golbalTp.sidebar_floorEditor.cate_goods = [{ // 商品类楼层
        'id': '1',
        'name': 'edit_room-tp',
        'title': '房间模板',
        'content': '<div class="form-group edit_room-tp"><label for="inputEmail3" class="col-sm-3 control-label">房间模板</label><div class="col-sm-9"><a class="thumbnail room-tp_a" href="#modal-changeRoom" data-toggle="modal"><img src="" class="room-tp_img"></a></div></div>'
    }];
    golbalTp.sidebar_floorEditor.cate_banner = [ // banner类楼层

    ];
    golbalTp.sidebar_roomEditor.cate_goods = [{ // 商品类房间
        'id': '1',
        'name': 'edit_image-url',
        'title': 'banner image url',
        'content': '<div class="form-group edit_image-url"><label for="inputEmail3" class="col-sm-3 control-label">Image Url</label><div class="input-group col-sm-9"><input type="url" class="form-control input-sm" id="room-img-url" placeholder="粘贴你要替换的图片地址"><span class="input-group-btn"><button class="btn btn-default input-sm icn-btn edit_image-url-btn" type="button"><i class="fa fa-retweet"></i></button></span></div></div>'
    }];
    golbalTp.sidebar_roomEditor.cate_banner = [{ // banner类房间
        'id': '1',
        'name': 'edit_image-url',
        'title': 'banner image url',
        'content': '<div class="form-group edit_image-url"><label for="inputEmail3" class="col-sm-3 control-label">Image Url</label><div class="input-group col-sm-9"><input type="url" class="form-control input-sm" id="room-img-url" placeholder="粘贴你要替换的图片地址"><span class="input-group-btn"><button class="btn btn-default input-sm icn-btn edit_image-url-btn" type="button"><i class="fa fa-retweet"></i></button></span></div></div>'
    }];
});