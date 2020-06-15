const express = require('express')
const server = express()

const { createBundleRenderer } = require('vue-server-renderer')

const template = require('fs').readFileSync('./src/template.html', 'utf-8')
const serverBundle = require('./server_bundle/vue-ssr-server-bundle.json')
const clientManifest = require('./client_bundle/vue-ssr-client-manifest.json')

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false, // 推荐
    template, // （可选）页面模板
    clientManifest // （可选）客户端构建 manifest
})
express.static("/client_bundle")
  
  // 在服务器处理函数中……
  server.get('*', (req, res) => {
    const context = { url: req.url ,title:"ssr模板",meta:`
    <meta charset="utf-8"/>
  `}
    // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
    // 现在我们的服务器与应用程序已经解耦！
    renderer.renderToString(context, (err, html) => {
      // 处理异常……
      res.end(html)
    })
  })

server.listen(8080)