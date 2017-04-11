const router = require('koa-router')();

/* ================引入逻辑模块=============== */
// 用户模块
const user = require('../controllers/user/index.js');

// cors 处理跨域
router.all('/api/*', async(ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHead' +
            'erFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, PATCH');
    if (ctx.method == 'OPTIONS') {
        ctx.status = 200;
    } else {
        await next();
    }
});

/* ================以下是api模块=============== */

/* =======用户模块====== */
// 用户登录
router.get('/api/login', user.login)
// // 用户退出
//     .post('/api/logout', user.logout)
// // 更改用户资料
//     .post('/api/put', user.put)
// // 重置用户密码
//     .post('/api/resetpwd', user.resetpwd)
// // 删除用户
//     .post('/api/deluser', user.deluser)
/* =======用户模块end====== */

module.exports = router;
