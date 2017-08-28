# react-start
使用create-react-app搭建的一个实用的项目脚手架,以前端开发为主，koa2为辅。目前react版本为15.6.1，会基于项目进行不定时更新。
#### 技术栈：
- react
- redux
- sass
- webpack
- react-router
- react-router-redux
- axios
- nodejs
- koa2
- pm2
- es6/7
- mockjs
- koa2-pixie-proxy

## 项目使用
#### 克隆到本地
`git clone https://github.com/shifeng1993/react-start.git yourappname`

#### 进入项目并安装依赖

`cd yourappname`

`npm install`

如果node-sass安装报错，需再次安装 `npm install node-sass`

#### 运行开发环境

使用`npm start` 开启react项目

使用`cd server` `supervisor app`/`node app` 开启node服务

#### 编译静态文件

`npm run build`

## 更新日志
1.0.1
1. 使用koa2重新构建node服务，加入了异步代码，node版本必须大于7.6.0。
2. 删除react原本不能用的例子，加入了一个新例子，新例子的内容为react路由和组件的调用。

1.0.2
1. 抽出koa2服务作为一个单独的项目存在。完善了一些代码，并加入了生产环境所需的pm2进程守护，并用shell脚本进行监控。项目连接：https://github.com/shifeng1993/koa2server
2. 完善原本存在的例子，并加入了redux的初级用法，还有组件之间传递消息等基础知识。


