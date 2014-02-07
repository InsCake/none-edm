var golbalTp = {
    // sidebar templates ---------------
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
