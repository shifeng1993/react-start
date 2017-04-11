// mock假数据模块
const Mock = require('mockjs');
/*
// 代理转发模块
const pixie = require('koa2-pixie-proxy');
// 设置后端服务器url
 var dbUrl = 'http://test.com'; //这里写你的后端api地址
*/
class userModel {
    // 用户登录
    static async login(params, res) {
        const data = Mock.mock([
            {
                "skuId": 4,
                "skuSubject": "清湿茶",
                "skuPackageType": "鹰牌",
                "skuSize": "罐装310ml",
                "skuWeight": 500,
                "skuOriginalPrice": 1,
                "skuSellingPrice": 1,
                "skuPicUrl": "http://store.easygovm.com/GP1450938662403清湿茶.jpg",
                "organizationId": "'01'",
                "gmtCreated": 1446639724000,
                "gmtModified": 1484230795000
            }
        ])
        res(JSON.stringify(data))
        // await ……
    }

}
module.exports = userModel;