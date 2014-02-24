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
    },
    // editor_options --------------------------------------------------------------------
    'editor_options': [],

    // templates functions --------------------------------
    getFloorTpName: function(floor_tpCount) {
        var floorCateCount = floor_tpCount.slice(0, 2);
        switch (floorCateCount) {
            case '01':
                return 'cate_goods';
                break;
            case '31':
                return 'cate_banner';
                break;
        }
    },
    getRoomTpName: function(room_tpCount) {
        var roomCateCount = room_tpCount.slice(0, 2);
        switch (roomCateCount) {
            case '01':
                return 'cate_goods';
                break;
            case '31':
                return 'cate_banner';
                break;
        }
    }
};


$(function() {
    // templates --------------------------------------------------------------------
    golbalTp.floor_tps = [{ // floors templates
        'id': '1',
        'tpId': 'floor_tp_0101',
        'name': 'goods_4Rooms',
        'html': '<table cellspacing="0" cellpadding="0" style="width:100%" class="floor floor_tp_0101"><tr><td width="10"></td><td width="150"><table cellspacing="0" cellpadding="0" class="room room_tp_0102" style="width:100%;text-align:center;"><tr><td height="10"></td></tr><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="line-height:100%;" border="0" width="140" height="140" alt="item-image"></a></td><td width="5"></td></tr><tr><td height="10"></td></tr></table></td><td width="10"></td><td width="150"><table cellspacing="0" cellpadding="0" class="room room_tp_0102" style="width:100%;text-align:center;"><tr><td height="10"></td></tr><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="line-height:100%;" border="0" width="140" height="140" alt="item-image"></a></td><td width="5"></td></tr><tr><td height="10"></td></tr></table></td><td width="10"></td><td width="150"><table cellspacing="0" cellpadding="0" class="room room_tp_0102" style="width:100%;text-align:center;"><tr><td height="10"></td></tr><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="line-height:100%;" border="0" width="140" height="140" alt="item-image"></a></td><td width="5"></td></tr><tr><td height="10"></td></tr></table></td><td width="10"></td><td width="150"><table cellspacing="0" cellpadding="0" class="room room_tp_0102" style="width:100%;text-align:center;"><tr><td height="10"></td></tr><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="line-height:100%;" border="0" width="140" height="140" alt="item-image"></a></td><td width="5"></td></tr><tr><td height="10"></td></tr></table></td><td width="10"></td></tr></table>',
    }, {
        'id': '2',
        'tpId': 'floor_tp_0102',
        'name': 'goods_3Rooms',
        'html': '<table cellspacing="0" cellpadding="0" style="width:100%" class="floor floor_tp_0102"><tr><td width="10"></td><td width="200"><table cellspacing="0" cellpadding="0" style="width:100%;text-align:center;" class="room room_tp_0101"><tr><td height="10"></td></tr><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="line-height:100%;" border="0" width="140" height="140" alt="item-image"></a></td><td width="5"></td></tr><tr><td height="10"></td></tr></table></td><td width="15"></td><td width="200"><table cellspacing="0" cellpadding="0" style="width:100%;text-align:center;" class="room room_tp_0101"><tr><td height="10"></td></tr><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="line-height:100%;" border="0" width="140" height="140" alt="item-image"></a></td><td width="5"></td></tr><tr><td height="10"></td></tr></table></td><td width="15"></td><td width="200"><table cellspacing="0" cellpadding="0" style="width:100%;text-align:center;" class="room room_tp_0101"><tr><td height="10"></td></tr><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="line-height:100%;" border="0" width="140" height="140" alt="item-image"></a></td><td width="5"></td></tr><tr><td height="10"></td></tr></table></td><td width="10"></td></tr></table>'
    }, {
        'id': '3',
        'tpId': 'floor_tp_0103',
        'name': 'goods_2Rooms',
        'html': '<table cellspacing="0" cellpadding="0" style="width:100%" class="floor floor_tp_0103"><tr><td width="10"></td><td width="300"><table cellspacing="0" cellpadding="0" style="width:100%;text-align:center;" class="room room_tp_0101"><tr><td height="10"></td></tr><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="line-height:100%;" border="0" width="140" height="140" alt="item-image"></a></td><td width="5"></td></tr><tr><td height="10"></td></tr></table></td><td width="30"></td><td width="300"><table cellspacing="0" cellpadding="0" style="width:100%;text-align:center;" class="room room_tp_0101"><tr><td height="10"></td></tr><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="line-height:100%;" border="0" width="140" height="140" alt="item-image"></a></td><td width="5"></td></tr><tr><td height="10"></td></tr></table></td><td width="10"></td></tr></table>'
    }];

    golbalTp.room_tps = [{ // room templates
        'id': '1',
        'name': 'onlyMainImg',
        'html': '<table cellspacing="0" cellpadding="0" class="room room_tp_0101" style="width:100%;text-align:center;"><tr><td height="10"></td></tr><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="line-height:100%;" border="0" width="140" height="140" alt="item-image"></a></td><td width="5"></td></tr><tr><td height="10"></td></tr></table>',
        'imgSrc': 'img/room_tp1.png'
    }, {
        'id': '2',
        'name': 'ImgAndName',
        'html': '<table cellspacing="0" cellpadding="0" class="room room_tp_0102" style="width:100%;text-align:center;"><tr><td height="10"></td></tr><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="line-height:100%;" border="0" width="140" height="140" alt="item-image"></a></td><td width="5"></td></tr><tr><td width="5"></td><td style="vertical-align:top;" height="36px"><a href="#" style="text-decoration:none;color:#333;"><span style="display:block;height:36px;overflow:hidden;font-size:12px;max-height:36px;line-height:18px;" contenteditable="true">单击此处编辑商品名称 - 最多两行</span></a></td><td width="5"></td></tr><tr><td height="10"></td></tr></table>',
        'imgSrc': 'img/room_tp2.png'
    }, {
        'id': '3',
        'name': 'ImgAndNameAndPrice',
        'html': '<table cellspacing="0" cellpadding="0" class="room room_tp_0103" style="width:100%;text-align:center;"><tr><td height="10"></td></tr><tr><td width="5"></td><td><a href="javascript:void();"><img src="http://d6.yihaodianimg.com/N00/M08/F5/0D/CgQCtlJ686qAPNJmAAC2Pjy-aVU77301_200x200.jpg" style="line-height:100%;" border="0" width="140" height="140" alt="item-image"></a></td><td width="5"></td></tr><tr><td width="5"></td><td style="vertical-align:top;" height="36px"><a href="#" style="text-decoration:none;color:#333;"><span style="display:block;height:36px;overflow:hidden;font-size:12px;max-height:36px;line-height:18px;" contenteditable="true">单击此处编辑商品名称 - 最多两行</span></a></td><td width="5"></td></tr><tr><td width="5"></td><td><span style="color:#cc0000;">¥<span style="font-size:24px;" contenteditable="true">42</span>&nbsp;</span><span style="text-decoration:line-through;font-size:12px;">&nbsp;¥<span contenteditable="true">49.9</span>&nbsp;</span></td><td width="5"></td></tr><tr><td height="10"></td></tr></table>',
        'imgSrc': 'img/room_tp3.png'
    }];


    // editor_options --------------------------------------------------------------------
    golbalTp.editor_options = [{
        'index': '0',
        'name': 'edit_room-tp',
        'content': '<div class="form-group edit_room-tp"><label for="inputEmail3" class="col-sm-3 control-label">房间模板</label><div class="col-sm-9"><a class="thumbnail room-tp_a" href="#modal-changeRoom" data-toggle="modal"><img src="" class="room-tp_img"></a></div></div>'
    }, {
        'index': '1',
        'name': 'edit_image-url',
        'content': '<div class="form-group edit_image-url"><label for="room-img-url" class="col-sm-3 control-label">商品图片</label><div class="input-group col-sm-9"><input type="url" class="form-control input-sm" id="room-img-url" placeholder="粘贴你要替换的图片地址"><span class="input-group-btn"><button class="btn btn-default input-sm icn-btn edit_image-url-btn" type="button"><i class="fa fa-retweet"></i></button></span></div></div>'
    }, {
        'index': '2',
        'name': 'edit_good-link-href',
        'content': '<div class="form-group edit_link-href"><label for="good-link-href" class="col-sm-3 control-label">商品链接</label><div class="input-group col-sm-9"><input type="url" class="form-control input-sm" id="good-link-href" placeholder="粘贴你要替换的商品链接"><span class="input-group-btn"><button class="btn btn-default input-sm icn-btn edit_good-link-href-btn" type="button"><i class="fa fa-retweet"></i></button></span></div></div>'
    }];

    // sidebar templates 
    golbalTp.sidebar_floorEditor.cate_goods = [golbalTp.editor_options[0]];
    golbalTp.sidebar_floorEditor.cate_banner = [];
    golbalTp.sidebar_roomEditor.cate_goods = [
        golbalTp.editor_options[1],
        golbalTp.editor_options[2]
    ];
    golbalTp.sidebar_roomEditor.cate_banner = [golbalTp.editor_options[1]];

});
