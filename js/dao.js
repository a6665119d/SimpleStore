// 数据库语句
// 用户表
var UserDao = {
    // data 对象{id:'111',name: '名字',password:'123'}
    // 新增或修改用户信息
    replaceUser: function(data, callback){
        var keys = Object.keys(data);
        var values = Object.values(data);
        var sql = "REPLACE INTO user (" + keys.join(",") + ") VALUES (" + values.join(",") + ")";
        getBySql(sql,callback);
    },
    // 根据名字查询用户信息
    loadUserInfoByName: function(name, callback){
        var sql = "select * from user where name= '" + name + "'";
        getBySql(sql,callback);
    },
    // 新增或修改登录用户信息
    replaceLoginUser: function(data, callback){
        var keys = Object.keys(data);
        var values = Object.values(data);
        var sql = "REPLACE INTO loginUser (" + keys.join(",") + ") VALUES (" + values.join(",") + ")";
        getBySql(sql,callback);
    },
    // 根据名字查询用户信息
    loadLoginUserInfo: function(callback){
        var sql = "select * from loginUser where status = 1";
        getBySql(sql,callback);
    },
};
/* 详情表 */
var DetailDao = {
    // 新增或修改登录商品详情信息
    replaceDetails: function(data, callback){
        var keys = Object.keys(data);
        var values = Object.values(data);
        var sql = "REPLACE INTO details (" + keys.join(",") + ") VALUES ('" + values.join("','") + "')";
        getBySql(sql,callback);
    },
    // 查询商品详情信息
    loadDetailsInfo: function(callback){
        var sql = "select * from details";
        getBySql(sql,callback);
    },
}
