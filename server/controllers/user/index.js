const userModel = require("../../models/user/index.js");

class userController {
    // 用户登录
    static async login(ctx, next) {
        await next();
        function transferMsg(msg) {
            ctx.response.body = msg;
        }
        userModel.login('input', msg => transferMsg(msg));
        // await ……
    }

}
module.exports = userController;