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
            name: '小米MIX 3',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '10012',
            name: '小米8 青春版',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '10013',
            name: '小米8 屏幕指纹版',
            imgUrl: './image/mi8-80.gif',
            price: '2599',
        }, {
            id: '10014',
            name: '小米8',
            imgUrl: './image/mi8-80.gif',
            price: '2899',
        }, {
            id: '10015',
            name: '小米8 SE',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '10016',
            name: '小米8 SE',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }, {
        // 第二列
        list: [{
            id: '10021',
            name: '小米MIX 3',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '10022',
            name: '小米6X',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '10023',
            name: '黑鲨游戏手机Helo',
            imgUrl: './image/mix3-80.gif',
            price: '2599',
        }, {
            id: '10024',
            name: '黑鲨游戏手机',
            imgUrl: './image/qingchun-80.gif',
            price: '2899',
        }, {
            id: '10025',
            name: '红米Note 7',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }, {
        // 第三列
        list: [{
            id: '10031',
            name: '红米6 Pro',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '10032',
            name: '红米6',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '10033',
            name: '红米Note 5',
            imgUrl: './image/mi8-80.gif',
            price: '2599',
        }, {
            id: '10034',
            name: '移动4G+专区',
            imgUrl: './image/mix3-80.gif',
            price: '2899',
        }, {
            id: '10035',
            name: '对比手机',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }]
}, {
    title: '电视 盒子',
    lists: [{
        // 第一列
        list: [{
            id: '20011',
            name: '小米MIX 3',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '20012',
            name: '小米8 青春版',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '20013',
            name: '小米8 屏幕指纹版',
            imgUrl: './image/mi8-80.gif',
            price: '2599',
        }, {
            id: '20014',
            name: '小米8',
            imgUrl: './image/mi8-80.gif',
            price: '2899',
        }, {
            id: '20015',
            name: '小米8 SE',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '20016',
            name: '小米8 SE',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }, {
        // 第二列
        list: [{
            id: '20021',
            name: '小米MIX 3',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '20022',
            name: '小米6X',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '20023',
            name: '黑鲨游戏手机Helo',
            imgUrl: './image/mix3-80.gif',
            price: '2599',
        }, {
            id: '20024',
            name: '黑鲨游戏手机',
            imgUrl: './image/qingchun-80.gif',
            price: '2899',
        }, {
            id: '20025',
            name: '红米Note 7',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }, {
        // 第三列
        list: [{
            id: '20031',
            name: '红米6 Pro',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '20032',
            name: '红米6',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '20033',
            name: '红米Note 5',
            imgUrl: './image/mi8-80.gif',
            price: '2599',
        }, {
            id: '20034',
            name: '移动4G+专区',
            imgUrl: './image/mix3-80.gif',
            price: '2899',
        }, {
            id: '20035',
            name: '对比手机',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }]
}, {
    title: '笔记本 平板',
    lists: [{
        // 第一列
        list: [{
            id: '10011',
            name: '小米MIX 3',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '10012',
            name: '小米8 青春版',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '10013',
            name: '小米8 屏幕指纹版',
            imgUrl: './image/mi8-80.gif',
            price: '2599',
        }, {
            id: '10014',
            name: '小米8',
            imgUrl: './image/mi8-80.gif',
            price: '2899',
        }, {
            id: '30015',
            name: '小米8 SE',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '30016',
            name: '小米8 SE',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }, {
        // 第二列
        list: [{
            id: '30021',
            name: '小米MIX 3',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '30022',
            name: '小米6X',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '30023',
            name: '黑鲨游戏手机Helo',
            imgUrl: './image/mix3-80.gif',
            price: '2599',
        }, {
            id: '30024',
            name: '黑鲨游戏手机',
            imgUrl: './image/qingchun-80.gif',
            price: '2899',
        }, {
            id: '30025',
            name: '红米Note 7',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }, {
        // 第三列
        list: [{
            id: '30031',
            name: '红米6 Pro',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '30032',
            name: '红米6',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '30033',
            name: '红米Note 5',
            imgUrl: './image/mi8-80.gif',
            price: '2599',
        }, {
            id: '30034',
            name: '移动4G+专区',
            imgUrl: './image/mix3-80.gif',
            price: '2899',
        }, {
            id: '30035',
            name: '对比手机',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }]
}, {
    title: '家电 插线板',
    lists: [{
        // 第一列
        list: [{
            id: '40011',
            name: '小米MIX 3',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '40012',
            name: '小米8 青春版',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '40013',
            name: '小米8 屏幕指纹版',
            imgUrl: './image/mi8-80.gif',
            price: '2599',
        }, {
            id: '40014',
            name: '小米8',
            imgUrl: './image/mi8-80.gif',
            price: '2899',
        }, {
            id: '40015',
            name: '小米8 SE',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '40016',
            name: '小米8 SE',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }, {
        // 第二列
        list: [{
            id: '40021',
            name: '小米MIX 3',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '40022',
            name: '小米6X',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '40023',
            name: '黑鲨游戏手机Helo',
            imgUrl: './image/mix3-80.gif',
            price: '2599',
        }, {
            id: '40024',
            name: '黑鲨游戏手机',
            imgUrl: './image/qingchun-80.gif',
            price: '2899',
        }, {
            id: '40025',
            name: '红米Note 7',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }, {
        // 第三列
        list: [{
            id: '40031',
            name: '红米6 Pro',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '40032',
            name: '红米6',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '40033',
            name: '红米Note 5',
            imgUrl: './image/mi8-80.gif',
            price: '2599',
        }, {
            id: '40034',
            name: '移动4G+专区',
            imgUrl: './image/mix3-80.gif',
            price: '2899',
        }, {
            id: '40035',
            name: '对比手机',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }]
}, {
    title: '出行 穿戴',
    lists: [{
        // 第一列
        list: [{
            id: '50011',
            name: '小米MIX 3',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '50012',
            name: '小米8 青春版',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '50013',
            name: '小米8 屏幕指纹版',
            imgUrl: './image/mi8-80.gif',
            price: '2599',
        }, {
            id: '50014',
            name: '小米8',
            imgUrl: './image/mi8-80.gif',
            price: '2899',
        }, {
            id: '50015',
            name: '小米8 SE',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '50016',
            name: '小米8 SE',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }, {
        // 第二列
        list: [{
            id: '50021',
            name: '小米MIX 3',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '50022',
            name: '小米6X',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '50023',
            name: '黑鲨游戏手机Helo',
            imgUrl: './image/mix3-80.gif',
            price: '2599',
        }, {
            id: '50024',
            name: '黑鲨游戏手机',
            imgUrl: './image/qingchun-80.gif',
            price: '2899',
        }, {
            id: '50025',
            name: '红米Note 7',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }, {
        // 第三列
        list: [{
            id: '50031',
            name: '红米6 Pro',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '50032',
            name: '红米6',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '50033',
            name: '红米Note 5',
            imgUrl: './image/mi8-80.gif',
            price: '2599',
        }, {
            id: '50034',
            name: '移动4G+专区',
            imgUrl: './image/mix3-80.gif',
            price: '2899',
        }, {
            id: '50035',
            name: '对比手机',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }]
}, {
    title: '智能 路由器',
    lists: [{
        // 第一列
        list: [{
            id: '60011',
            name: '小米MIX 3',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '60012',
            name: '小米8 青春版',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '60013',
            name: '小米8 屏幕指纹版',
            imgUrl: './image/mi8-80.gif',
            price: '2599',
        }, {
            id: '60014',
            name: '小米8',
            imgUrl: './image/mi8-80.gif',
            price: '2899',
        }, {
            id: '60015',
            name: '小米8 SE',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '60016',
            name: '小米8 SE',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }, {
        // 第二列
        list: [{
            id: '60021',
            name: '小米MIX 3',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '60022',
            name: '小米6X',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '60023',
            name: '黑鲨游戏手机Helo',
            imgUrl: './image/mix3-80.gif',
            price: '2599',
        }, {
            id: '60024',
            name: '黑鲨游戏手机',
            imgUrl: './image/qingchun-80.gif',
            price: '2899',
        }, {
            id: '60025',
            name: '红米Note 7',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }, {
        // 第三列
        list: [{
            id: '60031',
            name: '红米6 Pro',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '60032',
            name: '红米6',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '60033',
            name: '红米Note 5',
            imgUrl: './image/mi8-80.gif',
            price: '2599',
        }, {
            id: '60034',
            name: '移动4G+专区',
            imgUrl: './image/mix3-80.gif',
            price: '2899',
        }, {
            id: '60035',
            name: '对比手机',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }]
}, {
    title: '电源 配件',
    lists: [{
        // 第一列
        list: [{
            id: '70011',
            name: '小米MIX 3',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '70012',
            name: '小米8 青春版',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '70013',
            name: '小米8 屏幕指纹版',
            imgUrl: './image/mi8-80.gif',
            price: '2599',
        }, {
            id: '70014',
            name: '小米8',
            imgUrl: './image/mi8-80.gif',
            price: '2899',
        }, {
            id: '70015',
            name: '小米8 SE',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '70016',
            name: '小米8 SE',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }, {
        // 第二列
        list: [{
            id: '70021',
            name: '小米MIX 3',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '70022',
            name: '小米6X',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '70023',
            name: '黑鲨游戏手机Helo',
            imgUrl: './image/mix3-80.gif',
            price: '2599',
        }, {
            id: '70024',
            name: '黑鲨游戏手机',
            imgUrl: './image/qingchun-80.gif',
            price: '2899',
        }, {
            id: '70025',
            name: '红米Note 7',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }, {
        // 第三列
        list: [{
            id: '70031',
            name: '红米6 Pro',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '70032',
            name: '红米6',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '70033',
            name: '红米Note 5',
            imgUrl: './image/mi8-80.gif',
            price: '2599',
        }, {
            id: '70034',
            name: '移动4G+专区',
            imgUrl: './image/mix3-80.gif',
            price: '2899',
        }, {
            id: '70035',
            name: '对比手机',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }]
}, {
    title: '健康 儿童',
    lists: [{
        // 第一列
        list: [{
            id: '80011',
            name: '小米MIX 3',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '80012',
            name: '小米8 青春版',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '80013',
            name: '小米8 屏幕指纹版',
            imgUrl: './image/mi8-80.gif',
            price: '2599',
        }, {
            id: '80014',
            name: '小米8',
            imgUrl: './image/mi8-80.gif',
            price: '2899',
        }, {
            id: '80015',
            name: '小米8 SE',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '80016',
            name: '小米8 SE',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }, {
        // 第二列
        list: [{
            id: '80021',
            name: '小米MIX 3',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '80022',
            name: '小米6X',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '80023',
            name: '黑鲨游戏手机Helo',
            imgUrl: './image/mix3-80.gif',
            price: '2599',
        }, {
            id: '80024',
            name: '黑鲨游戏手机',
            imgUrl: './image/qingchun-80.gif',
            price: '2899',
        }, {
            id: '80025',
            name: '红米Note 7',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }, {
        // 第三列
        list: [{
            id: '80031',
            name: '红米6 Pro',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '80032',
            name: '红米6',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '80033',
            name: '红米Note 5',
            imgUrl: './image/mi8-80.gif',
            price: '2599',
        }, {
            id: '80034',
            name: '移动4G+专区',
            imgUrl: './image/mix3-80.gif',
            price: '2899',
        }, {
            id: '80035',
            name: '对比手机',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }]
}, {
    title: '耳机 音响',
    lists: [{
        // 第一列
        list: [{
            id: '90011',
            name: '小米MIX 3',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '90012',
            name: '小米8 青春版',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '90013',
            name: '小米8 屏幕指纹版',
            imgUrl: './image/mi8-80.gif',
            price: '2599',
        }, {
            id: '90014',
            name: '小米8',
            imgUrl: './image/mi8-80.gif',
            price: '2899',
        }, {
            id: '90015',
            name: '小米8 SE',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '10016',
            name: '小米8 SE',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }, {
        // 第二列
        list: [{
            id: '90021',
            name: '小米MIX 3',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '90022',
            name: '小米6X',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '90023',
            name: '黑鲨游戏手机Helo',
            imgUrl: './image/mix3-80.gif',
            price: '2599',
        }, {
            id: '90024',
            name: '黑鲨游戏手机',
            imgUrl: './image/qingchun-80.gif',
            price: '2899',
        }, {
            id: '90025',
            name: '红米Note 7',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }, {
        // 第三列
        list: [{
            id: '90031',
            name: '红米6 Pro',
            imgUrl: './image/mix3-80.gif',
            price: '3299',
        }, {
            id: '90032',
            name: '红米6',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }, {
            id: '90033',
            name: '红米Note 5',
            imgUrl: './image/mi8-80.gif',
            price: '2599',
        }, {
            id: '90034',
            name: '移动4G+专区',
            imgUrl: './image/mix3-80.gif',
            price: '2899',
        }, {
            id: '90035',
            name: '对比手机',
            imgUrl: './image/qingchun-80.gif',
            price: '2299',
        }]
    }]
}]