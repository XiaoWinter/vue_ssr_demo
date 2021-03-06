

#### 介绍

一个简单的vue SSR 项目

#### 主要技术

##### [vue SSR指南](https://ssr.vuejs.org/zh/)

##### [Mock 数据](https://www.fastmock.site/)

##### [webpack Doc](https://www.webpackjs.com/)

##### [express Doc](https://www.expressjs.com.cn/)

##### [vue-router](https://router.vuejs.org/zh/)

##### [vueX](https://vuex.vuejs.org/zh/)

##### [vuex-router-async](https://github.com/vuejs/vuex-router-sync)

##### [axios](http://axios-js.com/)

##### [babel](https://babel.docschina.org/)

##### [log4js](https://log4js-node.github.io/) [log4js-git](https://github.com/log4js-node/log4js-node)

#### 命令

```json
  "scripts": {
    "dev": "nodemon server",
    "dev_hot:client": " webpack --config webpack.client.js --watch",
    "dev_hot:server": " webpack --config webpack.server.js --watch",
    "prod":"node server",
    "build": "npm run build:client && npm run build:server",
    "build:client": " webpack --config webpack.client.js ",
    "build:server": " webpack --config webpack.server.js "
  },
```
#### 开发启动

`npm run dev_hot:client`

`npm run dev_hot:server`

运行

`npm run dev`

#### 打包

`npm run build`

运行

`npm run prod`

