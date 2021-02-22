
const path = require('path');
const config = require("./config/config.json")
const chalk = require('chalk')
const MockServer=require("@v2-lib/mock.server.plugin")
const serve = config.serve;
const dataSource = config.dataSource;
let proxy = {};
if (dataSource) {
  dataSource.proxy.map(config => {
    proxy[dataSource.base + config.source] = config;
  });
}
module.exports = {
  lintOnSave: false,
  publicPath: './',
  devServer: {
    port: serve.port,
    disableHostCheck: true,
    hot: true,
    proxy: {
      //假数据
      // '/mock': {
      //   target: `http://localhost:${serve.mockPort}`,
      //   changeOrigin: true,     // target是域名的话，需要这个参数，
      //   secure: false,          // 设置支持https协议的代理
      //   ws: false,
      //   pathRewrite: {
      //   }
      // },
      '/GDP': {
        target: `http://localhost:8088`,

        changeOrigin: true,     // target是域名的话，需要这个参数，
        secure: false,          // 设置支持https协议的代理
        ws: false,
        bypass: function (req, res, proxyOptions) {
          console.log(chalk.magentaBright(`\n > ${req.url}`))
        },
        pathRewrite: {
          "^/GDP": ""
        },

        //重写cookie路径
        onProxyRes: function (proxyRes, req, res) {
          const cookies = proxyRes.headers['set-cookie']
          if (cookies) {
            const newCookies = cookies.map(cookie => {
              return cookie.replace(/Path=\/ccfs_mm/, 'Path=/');    // "/ccfs_mm"是本地后台项目路径
            })
            delete proxyRes.headers['set-cookie']
            proxyRes.headers['set-cookie'] = newCookies
          }
        }
      },
      ...proxy
    },
    after(app,server,compiler) {
      MockServer.init(app,server,compiler)
      // require('./server.js');
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        packageJSON: path.resolve(__dirname, './package.json')

      }
    }
  },

  transpileDependencies: ['webpack-dev-server/client/clients/SockJSClient.js'],
  chainWebpack(config) {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.module.rule('compile')
      .test(/\.js$/)
      .include
      .add(path.resolve(__dirname, 'node_modules/@v2-lib'))
      .add(path.resolve(__dirname, 'node_modules/element-ui/src/utils/dom.js'))
      .add(path.resolve(__dirname, 'node_modules/@v2-pipe'))
      .add(path.resolve(__dirname, 'node_modules/@v2-components'))
      .add(path.resolve(__dirname, 'node_modules/element-ui/src/utils/resize-event.js'))

      .end()
      .use('babel')
      .loader('babel-loader')
      .options({
        presets: [
          ['@babel/preset-env', {
            modules: false
          }]
        ]
      });

    if (!(process.argv.includes('--target') && process.argv.includes('lib'))) {
      config.module
        .rule('import-rule')
        .test(/_spa_import\.js/g)
        .use(path.resolve(__dirname, './node_modules/@v2-lib/vue.spa.plugin/loaders/import_loader.js'))
        .loader(path.resolve(__dirname, './node_modules/@v2-lib/vue.spa.plugin/loaders/import_loader.js'))
        .end()
    }

  },
  productionSourceMap: false,
  filenameHashing: false,
  css: {
    modules: false,
    extract:process.argv.includes('--component'),
    sourceMap: false,
    loaderOptions: {
      sass: {
        // 向全局sass样式传入共享的全局变量
        data: '@import "./src/scss/element-variables.scss";@import "./src/scss/project-variables.scss";'
      }
    }
  }
}
