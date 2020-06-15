

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

#### 命令

```json
  "scripts": {
    "dev": "node server",//服务器
    "start": "cross-env NODE_ENV=production node src/entry-server",
    "build": "npm run build:client && npm run build:server",
    "build:client": " webpack --config webpack.client.js",
    "build:server": " webpack --config webpack.server.js",
    "postinstall": "npm run build"
  },
```

