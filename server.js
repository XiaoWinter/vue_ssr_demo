const express = require('express')
const server = express()
const path = require("path")

const { createBundleRenderer } = require('vue-server-renderer')

const template = require('fs').readFileSync('./src/template.html', 'utf-8')
const serverBundle = require('./server_bundle/vue-ssr-server-bundle.json')
const clientManifest = require('./client_bundle/vue-ssr-client-manifest.json')

const log4js = require("log4js");

const layout = {
  type: 'pattern',
  pattern: '%[[ %p %c ] [ %d{yyyy-MM-dd hh:mm:ss} ] [ file: %f ] [line %l:%o] %n%] -- %m',
};

log4js.configure({
  appenders: {
    out: { type: 'stdout',layout: layout},
    dayFile: { type: 'dateFile', filename: path.join(__dirname,'log/day.log' ),keepFileExt:true,layout: layout }
  },
  categories: {
    default: { appenders: [ 'out', 'dayFile' ], level: 'debug',enableCallStack: true }
  }
});

global.log = log4js.getLogger(["out","dayFile"]);

log.info("应用开始执行")

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false, // 推荐
    template, // （可选）页面模板
    clientManifest // （可选）客户端构建 manifest
})

const {fetchItem} = require("./src/inner.api")

server.use(express.static(path.join(__dirname, 'client_bundle')));
  // 在服务器处理函数中……
  server.get('*', (req, res) => {
    
    fetchItem().then(result=>{
      console.log("result",result)
      //带去的信息，1.请求的相关信息 url,cookie
      const context = 
        { 
          url: req.url ,
          title:"ssr模板",
          meta:`<meta charset="utf-8"/> `,
          data:result
        }
      // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
      // 现在我们的服务器与应用程序已经解耦！
      renderer.renderToString(context, (err, html) => {
        // 处理异常……
        res.end(html)
      })
    })

  })

server.listen(8080)