// 这里放全局变量
var dbName = 'store'; // 数据库名称
var fgDb;
var storeName = '小米商城'; // 商城名字，可修改
// 商品
var navCommoditys = [{
    title: '手机 电话卡',
    lists: [{
        // 第一列
        list: [{
            id: '10011',
            name: '小米9',
            imgUrl: './image/nav-80-111.png',
            price: '3299',
        }, {
            id: '10012',
            name: '小米MIX 3',
            imgUrl: './image/nav-80-112.png',
            price: '2299',
        }, {
            id: '10013',
            name: '小米8 屏幕指纹版',
            imgUrl: './image/nav-80-113.png',
            price: '2599',
        }, {
            id: '10014',
            name: '小米8',
            imgUrl: './image/nav-80-114.png',
            price: '2899',
        }, {
            id: '10015',
            name: '小米8 SE',
            imgUrl: './image/nav-80-115.png',
            price: '2299',
        }, {
            id: '10016',
            name: '小米8 青春版',
            imgUrl: './image/nav-80-116.png',
            price: '2299',
        }]
    }, {
        // 第二列
        list: [{
            id: '10021',
            name: '小米MIX 3',
            imgUrl: './image/nav-80-121.png',
            price: '3299',
        }, {
            id: '10022',
            name: '小米6X',
            imgUrl: './image/nav-80-122.png',
            price: '2299',
        }, {
            id: '10023',
            name: '黑鲨游戏手机Helo',
            imgUrl: './image/nav-80-123.png',
            price: '2599',
        }, {
            id: '10024',
            name: '黑鲨游戏手机',
            imgUrl: './image/nav-80-124.png',
            price: '2899',
        }, {
            id: '10025',
            name: '红米Note 7',
            imgUrl: './image/nav-80-125.png',
            price: '2299',
        }]
    }, {
        // 第三列
        list: [{
            id: '10031',
            name: '红米6 Pro',
            imgUrl: './image/nav-80-131.png',
            price: '3299',
        }, {
            id: '10032',
            name: '红米6',
            imgUrl: './image/nav-80-132.png',
            price: '2299',
        }]
    }]
}, {
    title: '电视 盒子',
    lists: [{
        // 第一列
        list: [{
            id: '20011',
            name: '电视',
            imgUrl: './image/nav-80-211.jpg',
            price: '3299',
        }, {
            id: '20012',
            name: '小米8 青春版',
            imgUrl: './image/nav-80-212.jpg',
            price: '2299',
        }, {
            id: '20013',
            name: '小米8 屏幕指纹版',
            imgUrl: './image/nav-80-213.jpg',
            price: '2599',
        }, {
            id: '20014',
            name: '小米8',
            imgUrl: './image/nav-80-214.jpg',
            price: '2899',
        }]
    }, {
        // 第二列
        list: [{
            id: '20021',
            name: '小米MIX 3',
            imgUrl: './image/nav-80-221.jpg',
            price: '3299',
        }, {
            id: '20022',
            name: '小米6X',
            imgUrl: './image/nav-80-222.jpg',
            price: '2299',
        }, {
            id: '20023',
            name: '黑鲨游戏手机Helo',
            imgUrl: './image/nav-80-223.jpg',
            price: '2599',
        }]
    }, {
        // 第三列
        list: [{
            id: '20031',
            name: '红米6 Pro',
            imgUrl: './image/nav-80-231.jpg',
            price: '3299',
        }, {
            id: '20032',
            name: '红米6',
            imgUrl: './image/nav-80-232.jpg',
            price: '2299',
        }]
    }]
}, {
    title: '笔记本 平板',
    lists: [{
        // 第一列
        list: [{
            id: '10011',
            name: '小米9',
            imgUrl: './image/nav-80-111.png',
            price: '3299',
        }, {
            id: '10012',
            name: '小米MIX 3',
            imgUrl: './image/nav-80-112.png',
            price: '2299',
        }, {
            id: '10013',
            name: '小米8 屏幕指纹版',
            imgUrl: './image/nav-80-113.png',
            price: '2599',
        }, {
            id: '10014',
            name: '小米8',
            imgUrl: './image/nav-80-114.png',
            price: '2899',
        }, {
            id: '10015',
            name: '小米8 SE',
            imgUrl: './image/nav-80-115.png',
            price: '2299',
        }, {
            id: '10016',
            name: '小米8 青春版',
            imgUrl: './image/nav-80-116.png',
            price: '2299',
        }]
    }, {
        // 第二列
        list: [{
            id: '10021',
            name: '小米MIX 3',
            imgUrl: './image/nav-80-121.png',
            price: '3299',
        }, {
            id: '10022',
            name: '小米6X',
            imgUrl: './image/nav-80-122.png',
            price: '2299',
        }, {
            id: '10023',
            name: '黑鲨游戏手机Helo',
            imgUrl: './image/nav-80-123.png',
            price: '2599',
        }, {
            id: '10024',
            name: '黑鲨游戏手机',
            imgUrl: './image/nav-80-124.png',
            price: '2899',
        }, {
            id: '10025',
            name: '红米Note 7',
            imgUrl: './image/nav-80-125.png',
            price: '2299',
        }]
    }, {
        // 第三列
        list: [{
            id: '10031',
            name: '红米6 Pro',
            imgUrl: './image/nav-80-131.png',
            price: '3299',
        }, {
            id: '10032',
            name: '红米6',
            imgUrl: './image/nav-80-132.png',
            price: '2299',
        }]
    }]
}, {
    title: '家电 插线板',
    lists: [{
        // 第一列
        list: [{
            id: '10011',
            name: '小米9',
            imgUrl: './image/nav-80-111.png',
            price: '3299',
        }, {
            id: '10012',
            name: '小米MIX 3',
            imgUrl: './image/nav-80-112.png',
            price: '2299',
        }, {
            id: '10013',
            name: '小米8 屏幕指纹版',
            imgUrl: './image/nav-80-113.png',
            price: '2599',
        }, {
            id: '10014',
            name: '小米8',
            imgUrl: './image/nav-80-114.png',
            price: '2899',
        }, {
            id: '10015',
            name: '小米8 SE',
            imgUrl: './image/nav-80-115.png',
            price: '2299',
        }, {
            id: '10016',
            name: '小米8 青春版',
            imgUrl: './image/nav-80-116.png',
            price: '2299',
        }]
    }, {
        // 第二列
        list: [{
            id: '10021',
            name: '小米MIX 3',
            imgUrl: './image/nav-80-121.png',
            price: '3299',
        }, {
            id: '10022',
            name: '小米6X',
            imgUrl: './image/nav-80-122.png',
            price: '2299',
        }, {
            id: '10023',
            name: '黑鲨游戏手机Helo',
            imgUrl: './image/nav-80-123.png',
            price: '2599',
        }, {
            id: '10024',
            name: '黑鲨游戏手机',
            imgUrl: './image/nav-80-124.png',
            price: '2899',
        }, {
            id: '10025',
            name: '红米Note 7',
            imgUrl: './image/nav-80-125.png',
            price: '2299',
        }]
    }, {
        // 第三列
        list: [{
            id: '10031',
            name: '红米6 Pro',
            imgUrl: './image/nav-80-131.png',
            price: '3299',
        }, {
            id: '10032',
            name: '红米6',
            imgUrl: './image/nav-80-132.png',
            price: '2299',
        }]
    }]
}, {
    title: '出行 穿戴',
    lists: [{
        // 第一列
        list: [{
            id: '10011',
            name: '小米9',
            imgUrl: './image/nav-80-111.png',
            price: '3299',
        }, {
            id: '10012',
            name: '小米MIX 3',
            imgUrl: './image/nav-80-112.png',
            price: '2299',
        }, {
            id: '10013',
            name: '小米8 屏幕指纹版',
            imgUrl: './image/nav-80-113.png',
            price: '2599',
        }, {
            id: '10014',
            name: '小米8',
            imgUrl: './image/nav-80-114.png',
            price: '2899',
        }, {
            id: '10015',
            name: '小米8 SE',
            imgUrl: './image/nav-80-115.png',
            price: '2299',
        }, {
            id: '10016',
            name: '小米8 青春版',
            imgUrl: './image/nav-80-116.png',
            price: '2299',
        }]
    }, {
        // 第二列
        list: [{
            id: '10021',
            name: '小米MIX 3',
            imgUrl: './image/nav-80-121.png',
            price: '3299',
        }, {
            id: '10022',
            name: '小米6X',
            imgUrl: './image/nav-80-122.png',
            price: '2299',
        }, {
            id: '10023',
            name: '黑鲨游戏手机Helo',
            imgUrl: './image/nav-80-123.png',
            price: '2599',
        }, {
            id: '10024',
            name: '黑鲨游戏手机',
            imgUrl: './image/nav-80-124.png',
            price: '2899',
        }, {
            id: '10025',
            name: '红米Note 7',
            imgUrl: './image/nav-80-125.png',
            price: '2299',
        }]
    }, {
        // 第三列
        list: [{
            id: '10031',
            name: '红米6 Pro',
            imgUrl: './image/nav-80-131.png',
            price: '3299',
        }, {
            id: '10032',
            name: '红米6',
            imgUrl: './image/nav-80-132.png',
            price: '2299',
        }]
    }]
}, {
    title: '智能 路由器',
    lists: [{
        // 第一列
        list: [{
            id: '10011',
            name: '小米9',
            imgUrl: './image/nav-80-111.png',
            price: '3299',
        }, {
            id: '10012',
            name: '小米MIX 3',
            imgUrl: './image/nav-80-112.png',
            price: '2299',
        }, {
            id: '10013',
            name: '小米8 屏幕指纹版',
            imgUrl: './image/nav-80-113.png',
            price: '2599',
        }, {
            id: '10014',
            name: '小米8',
            imgUrl: './image/nav-80-114.png',
            price: '2899',
        }, {
            id: '10015',
            name: '小米8 SE',
            imgUrl: './image/nav-80-115.png',
            price: '2299',
        }, {
            id: '10016',
            name: '小米8 青春版',
            imgUrl: './image/nav-80-116.png',
            price: '2299',
        }]
    }, {
        // 第二列
        list: [{
            id: '10021',
            name: '小米MIX 3',
            imgUrl: './image/nav-80-121.png',
            price: '3299',
        }, {
            id: '10022',
            name: '小米6X',
            imgUrl: './image/nav-80-122.png',
            price: '2299',
        }, {
            id: '10023',
            name: '黑鲨游戏手机Helo',
            imgUrl: './image/nav-80-123.png',
            price: '2599',
        }, {
            id: '10024',
            name: '黑鲨游戏手机',
            imgUrl: './image/nav-80-124.png',
            price: '2899',
        }, {
            id: '10025',
            name: '红米Note 7',
            imgUrl: './image/nav-80-125.png',
            price: '2299',
        }]
    }, {
        // 第三列
        list: [{
            id: '10031',
            name: '红米6 Pro',
            imgUrl: './image/nav-80-131.png',
            price: '3299',
        }, {
            id: '10032',
            name: '红米6',
            imgUrl: './image/nav-80-132.png',
            price: '2299',
        }]
    }]
}, {
    title: '电源 配件',
    lists: [{
        // 第一列
        list: [{
            id: '10011',
            name: '小米9',
            imgUrl: './image/nav-80-111.png',
            price: '3299',
        }, {
            id: '10012',
            name: '小米MIX 3',
            imgUrl: './image/nav-80-112.png',
            price: '2299',
        }, {
            id: '10013',
            name: '小米8 屏幕指纹版',
            imgUrl: './image/nav-80-113.png',
            price: '2599',
        }, {
            id: '10014',
            name: '小米8',
            imgUrl: './image/nav-80-114.png',
            price: '2899',
        }, {
            id: '10015',
            name: '小米8 SE',
            imgUrl: './image/nav-80-115.png',
            price: '2299',
        }, {
            id: '10016',
            name: '小米8 青春版',
            imgUrl: './image/nav-80-116.png',
            price: '2299',
        }]
    }, {
        // 第二列
        list: [{
            id: '10021',
            name: '小米MIX 3',
            imgUrl: './image/nav-80-121.png',
            price: '3299',
        }, {
            id: '10022',
            name: '小米6X',
            imgUrl: './image/nav-80-122.png',
            price: '2299',
        }, {
            id: '10023',
            name: '黑鲨游戏手机Helo',
            imgUrl: './image/nav-80-123.png',
            price: '2599',
        }, {
            id: '10024',
            name: '黑鲨游戏手机',
            imgUrl: './image/nav-80-124.png',
            price: '2899',
        }, {
            id: '10025',
            name: '红米Note 7',
            imgUrl: './image/nav-80-125.png',
            price: '2299',
        }]
    }, {
        // 第三列
        list: [{
            id: '10031',
            name: '红米6 Pro',
            imgUrl: './image/nav-80-131.png',
            price: '3299',
        }, {
            id: '10032',
            name: '红米6',
            imgUrl: './image/nav-80-132.png',
            price: '2299',
        }]
    }]
}, {
    title: '健康 儿童',
    lists: [{
        // 第一列
        list: [{
            id: '10011',
            name: '小米9',
            imgUrl: './image/nav-80-111.png',
            price: '3299',
        }, {
            id: '10012',
            name: '小米MIX 3',
            imgUrl: './image/nav-80-112.png',
            price: '2299',
        }, {
            id: '10013',
            name: '小米8 屏幕指纹版',
            imgUrl: './image/nav-80-113.png',
            price: '2599',
        }, {
            id: '10014',
            name: '小米8',
            imgUrl: './image/nav-80-114.png',
            price: '2899',
        }, {
            id: '10015',
            name: '小米8 SE',
            imgUrl: './image/nav-80-115.png',
            price: '2299',
        }, {
            id: '10016',
            name: '小米8 青春版',
            imgUrl: './image/nav-80-116.png',
            price: '2299',
        }]
    }, {
        // 第二列
        list: [{
            id: '10021',
            name: '小米MIX 3',
            imgUrl: './image/nav-80-121.png',
            price: '3299',
        }, {
            id: '10022',
            name: '小米6X',
            imgUrl: './image/nav-80-122.png',
            price: '2299',
        }, {
            id: '10023',
            name: '黑鲨游戏手机Helo',
            imgUrl: './image/nav-80-123.png',
            price: '2599',
        }, {
            id: '10024',
            name: '黑鲨游戏手机',
            imgUrl: './image/nav-80-124.png',
            price: '2899',
        }, {
            id: '10025',
            name: '红米Note 7',
            imgUrl: './image/nav-80-125.png',
            price: '2299',
        }]
    }, {
        // 第三列
        list: [{
            id: '10031',
            name: '红米6 Pro',
            imgUrl: './image/nav-80-131.png',
            price: '3299',
        }, {
            id: '10032',
            name: '红米6',
            imgUrl: './image/nav-80-132.png',
            price: '2299',
        }]
    }]
}, {
    title: '耳机 音响',
    lists: [{
        // 第一列
        list: [{
            id: '10011',
            name: '小米9',
            imgUrl: './image/nav-80-111.png',
            price: '3299',
        }, {
            id: '10012',
            name: '小米MIX 3',
            imgUrl: './image/nav-80-112.png',
            price: '2299',
        }, {
            id: '10013',
            name: '小米8 屏幕指纹版',
            imgUrl: './image/nav-80-113.png',
            price: '2599',
        }, {
            id: '10014',
            name: '小米8',
            imgUrl: './image/nav-80-114.png',
            price: '2899',
        }, {
            id: '10015',
            name: '小米8 SE',
            imgUrl: './image/nav-80-115.png',
            price: '2299',
        }, {
            id: '10016',
            name: '小米8 青春版',
            imgUrl: './image/nav-80-116.png',
            price: '2299',
        }]
    }, {
        // 第二列
        list: [{
            id: '10021',
            name: '小米MIX 3',
            imgUrl: './image/nav-80-121.png',
            price: '3299',
        }, {
            id: '10022',
            name: '小米6X',
            imgUrl: './image/nav-80-122.png',
            price: '2299',
        }, {
            id: '10023',
            name: '黑鲨游戏手机Helo',
            imgUrl: './image/nav-80-123.png',
            price: '2599',
        }, {
            id: '10024',
            name: '黑鲨游戏手机',
            imgUrl: './image/nav-80-124.png',
            price: '2899',
        }, {
            id: '10025',
            name: '红米Note 7',
            imgUrl: './image/nav-80-125.png',
            price: '2299',
        }]
    }, {
        // 第三列
        list: [{
            id: '10031',
            name: '红米6 Pro',
            imgUrl: './image/nav-80-131.png',
            price: '3299',
        }, {
            id: '10032',
            name: '红米6',
            imgUrl: './image/nav-80-132.png',
            price: '2299',
        }]
    }]
}];
// 首页主要内容
var mainCommoditys = [{
    title: '手机',
    bottomImg: './image/banner-bottom1.jpg',
    list1: [{
        type: '1',
        imgUrl: './image/page-mian-111.jpg',
    }, {
        type: '2',
        imgUrl: './image/page-mian-112.jpg',
        name: '小米9',
        dec: '855处理器',
        price: '3999',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }, {
        type: '2',
        imgUrl: './image/page-mian-113.jpg',
        name: '小米9 SE',
        dec: '摄影神器',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }, {
        type: '2',
        imgUrl: './image/page-mian-114.jpg',
        name: '小米手机',
        dec: '游戏性能怪兽',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }, {
        type: '2',
        imgUrl: './image/page-mian-115.jpg',
        name: '小米手机',
        dec: '游戏性能怪兽',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }],
    list2: [{
        type: '1',
        imgUrl: './image/page-mian-121.jpg',
    }, {
        type: '2',
        imgUrl: './image/page-mian-122.jpg',
        name: '小米手机',
        dec: '嗯嗯嗯嗯',
        price: '1999',
        comment: '很不错的性价比',
        commentator: '张三',
    }, {
        type: '2',
        imgUrl: './image/page-mian-123.jpg',
        name: '小米手机',
        dec: '夜拍3.90',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }, {
        type: '2',
        imgUrl: './image/page-mian-124.jpg',
        name: '小米手机',
        dec: '游戏性能怪兽',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '张三',
    }, {
        type: '2',
        imgUrl: './image/page-mian-125.jpg',
        name: '小米手机',
        dec: '游戏性能怪兽',
        price: '1999',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }],
}, {
    title: '家电',
    bottomImg: './image/banner-bottom2.jpg',
    list1: [{
        type: '1',
        imgUrl: './image/page-mian-211.jpg',
    }, {
        type: '2',
        imgUrl: './image/page-mian-212.jpg',
        name: '米家互联网空调',
        dec: '1.5匹变频 / 高效制冷热',
        price: '1999',
        comment: '漂亮，和老婆一样漂亮',
        commentator: '张三',
    }, {
        type: '2',
        imgUrl: './image/page-mian-213.jpg',
        name: '米家互联网空调',
        dec: '嗯嗯嗯嗯',
        price: '1999',
        comment: '漂亮，和老婆一样漂亮',
        commentator: '李四',
    }, {
        type: '2',
        imgUrl: './image/page-mian-214.jpg',
        name: '米家互联网空调',
        dec: '1.5匹变频 / 高效制冷热',
        price: '1999',
        comment: '很不错的性价比',
        commentator: '李四',
    }, {
        type: '2',
        imgUrl: './image/page-mian-215.jpg',
        name: '米家互联网空调',
        dec: '传说中的东西',
        price: '1999',
        comment: '很好用，每天都要用几次的',
        commentator: '刘一祯',
    }],
    list2: [{
        type: '1',
        imgUrl: './image/page-mian-221.jpg',
    }, {
        type: '2',
        imgUrl: './image/page-mian-222.jpg',
        name: '米家互联网空调',
        dec: '1.5匹变频 / 高效制冷热',
        price: '1999',
        comment: '漂亮，和老婆一样漂亮',
        commentator: '刘一祯',
    }, {
        type: '2',
        imgUrl: './image/page-mian-223.jpg',
        name: '米家互联网空调',
        dec: '传说中的东西',
        price: '1999',
        comment: '很好用，每天都要用几次的',
        commentator: '李四',
    }, {
        type: '2',
        imgUrl: './image/page-mian-224.jpg',
        name: '米家互联网空调',
        dec: '1.5匹变频 / 高效制冷热',
        price: '1999',
        comment: '漂亮，和老婆一样漂亮',
        commentator: '阿大',
    }, {
        type: '2',
        imgUrl: './image/page-mian-224.jpg',
        name: '米家互联网空调',
        dec: '传说中的东西',
        price: '288',
        comment: '很好用，每天都要用几次的',
        commentator: '阿大',
    }],
}, {
    title: '智能',
    bottomImg: './image/banner-bottom3.jpg',
    list1: [{
        type: '1',
        imgUrl: './image/page-mian-311.jpg',
    }, {
        type: '2',
        imgUrl: './image/page-mian-312.jpg',
        name: '小米9',
        dec: '855处理器',
        price: '3999',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }, {
        type: '2',
        imgUrl: './image/page-mian-313.jpg',
        name: '小米9 SE',
        dec: '摄影神器',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }, {
        type: '2',
        imgUrl: './image/page-mian-314.jpg',
        name: '小米手机',
        dec: '4800万像素',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }, {
        type: '2',
        imgUrl: './image/page-mian-315.jpg',
        name: '小米手机',
        dec: '1.5匹变频 / 高效制冷热',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }],
    list2: [{
        type: '1',
        imgUrl: './image/page-mian-321.jpg',
    }, {
        type: '2',
        imgUrl: './image/page-mian-322.jpg',
        name: '小米手机',
        dec: '4800万像素',
        price: '1999',
        comment: '很不错的性价比',
        commentator: '张三',
    }, {
        type: '2',
        imgUrl: './image/page-mian-323.jpg',
        name: '小米手机',
        dec: '4800万像素',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }, {
        type: '2',
        imgUrl: './image/page-mian-324.jpg',
        name: '小米手机',
        dec: '游戏性能怪兽',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '张三',
    }, {
        type: '2',
        imgUrl: './image/page-mian-325.jpg',
        name: '小米手机',
        dec: '游戏性能怪兽',
        price: '1999',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }],
}, {
    title: '搭配',
    bottomImg: './image/banner-bottom4.jpg',
    list1: [{
        type: '1',
        imgUrl: './image/page-mian-411.jpg',
    }, {
        type: '2',
        imgUrl: './image/page-mian-412.jpg',
        name: '小米9',
        dec: '855处理器',
        price: '3999',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }, {
        type: '2',
        imgUrl: './image/page-mian-413.jpg',
        name: '小米9 SE',
        dec: '摄影神器',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }, {
        type: '2',
        imgUrl: './image/page-mian-414.jpg',
        name: '小米手机',
        dec: '4800万像素',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }, {
        type: '2',
        imgUrl: './image/page-mian-415.jpg',
        name: '小米手机',
        dec: '1.5匹变频 / 高效制冷热',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }],
    list2: [{
        type: '1',
        imgUrl: './image/page-mian-421.jpg',
    }, {
        type: '2',
        imgUrl: './image/page-mian-422.jpg',
        name: '小米手机',
        dec: '4800万像素',
        price: '1999',
        comment: '很不错的性价比',
        commentator: '张三',
    }, {
        type: '2',
        imgUrl: './image/page-mian-423.jpg',
        name: '小米手机',
        dec: '4800万像素',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }, {
        type: '2',
        imgUrl: './image/page-mian-424.jpg',
        name: '小米手机',
        dec: '游戏性能怪兽',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '张三',
    }, {
        type: '2',
        imgUrl: './image/page-mian-425.jpg',
        name: '小米手机',
        dec: '游戏性能怪兽',
        price: '1999',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }],
}, {
    title: '配件',
    bottomImg: './image/banner-bottom5.jpg',
    list1: [{
        type: '1',
        imgUrl: './image/page-mian-511.jpg',
    }, {
        type: '2',
        imgUrl: './image/page-mian-512.jpg',
        name: '小米9',
        dec: '855处理器',
        price: '3999',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }, {
        type: '2',
        imgUrl: './image/page-mian-513.jpg',
        name: '小米9 SE',
        dec: '摄影神器',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }, {
        type: '2',
        imgUrl: './image/page-mian-514.jpg',
        name: '小米手机',
        dec: '4800万像素',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }, {
        type: '2',
        imgUrl: './image/page-mian-515.jpg',
        name: '小米手机',
        dec: '1.5匹变频 / 高效制冷热',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }],
    list2: [{
        type: '1',
        imgUrl: './image/page-mian-521.jpg',
    }, {
        type: '2',
        imgUrl: './image/page-mian-522.jpg',
        name: '小米手机',
        dec: '4800万像素',
        price: '1999',
        comment: '很不错的性价比',
        commentator: '张三',
    }, {
        type: '2',
        imgUrl: './image/page-mian-523.jpg',
        name: '小米手机',
        dec: '4800万像素',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }, {
        type: '2',
        imgUrl: './image/page-mian-524.jpg',
        name: '小米手机',
        dec: '游戏性能怪兽',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '张三',
    }, {
        type: '2',
        imgUrl: './image/page-mian-525.jpg',
        name: '小米手机',
        dec: '游戏性能怪兽',
        price: '1999',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }],
}, {
    title: '周边',
    bottomImg: './image/banner-bottom3.jpg',
    list1: [{
        type: '1',
        imgUrl: './image/page-mian-611.jpg',
    }, {
        type: '2',
        imgUrl: './image/page-mian-612.jpg',
        name: '小米9',
        dec: '855处理器',
        price: '3999',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }, {
        type: '2',
        imgUrl: './image/page-mian-613.jpg',
        name: '小米9 SE',
        dec: '摄影神器',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }, {
        type: '2',
        imgUrl: './image/page-mian-614.jpg',
        name: '小米手机',
        dec: '4800万像素',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }, {
        type: '2',
        imgUrl: './image/page-mian-615.jpg',
        name: '小米手机',
        dec: '1.5匹变频 / 高效制冷热',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }],
    list2: [{
        type: '1',
        imgUrl: './image/page-mian-621.jpg',
    }, {
        type: '2',
        imgUrl: './image/page-mian-622.jpg',
        name: '小米手机',
        dec: '4800万像素',
        price: '1999',
        comment: '很不错的性价比',
        commentator: '张三',
    }, {
        type: '2',
        imgUrl: './image/page-mian-623.jpg',
        name: '小米手机',
        dec: '4800万像素',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }, {
        type: '2',
        imgUrl: './image/page-mian-624.jpg',
        name: '小米手机',
        dec: '游戏性能怪兽',
        price: '2669',
        comment: '很不错的性价比',
        commentator: '张三',
    }, {
        type: '2',
        imgUrl: './image/page-mian-625.jpg',
        name: '小米手机',
        dec: '游戏性能怪兽',
        price: '1999',
        comment: '很不错的性价比',
        commentator: '刘一祯',
    }],
}]