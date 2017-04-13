# 1.项目描述
使用create-react-app搭建的一个实用的项目脚手架，使用的技术栈如下：
1.react
2.redux
3.sass
4.webpack
5.react-router
6.react-router-redux
7.axios
8.shell
9.nodejs
10.koa2
11.pm2
12.es6/7
13.mockjs

目前react版本为15.4.2，会基于项目进行不定时更新。
## 更新日志
4.11 
1. 使用koa2重新构建node服务，加入了异步代码，node版本必须大于7.6.0。
2. 删除react原本不能用的例子，加入了一个新例子，新例子的内容为react路由和组件的调用。

4.13
1. 抽出koa2服务作为一个单独的项目存在。完善了一些代码，并加入了生产环境所需的pm2进程守护，并用shell脚本进行监控。项目连接：https://github.com/shifeng1993/koa2server
2. 完善原本存在的例子，并加入了redux的初级用法，还有组件之间传递消息等基础知识。

# 2.项目使用
### 第一步
克隆到本地

`git clone https://github.com/shifeng1993/react-start.git yourappname`

### 第二步
进入你的项目文件并安装依赖
`cd yourappname`

`npm install`
如果node-sass安装报错，需再次安装 `npm install node-sass`

### 第三步

使用`npm start` 开启react项目

使用`cd server` `supervisor app` 开启node服务



