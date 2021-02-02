const pluginsConf = require("./config/pluginsConf");
const nav = require("./nav");
module.exports = {
    base: "/docs/",
    title: "文档服务器",
    description: "测试配置标题名称meta中信息",
    plugins:pluginsConf,
    //时间处理插件
    // plugins: [
    //     [
    //       '@vuepress/last-updated',
    //       {
    //         transformer: (timestamp) => {
    //           // 不要忘了安装 moment
    //           const moment = require('moment')
    //           return moment(timestamp).format('LLLL')
    //         }
    //       }
    //     ],
    //     [
    //       '@vuepress/pwa',{
    //               serviceWorker: true,
    //               updatePopup: {
    //                 message: "发现新内容",
    //                 buttonText: "刷新"
    //               }
    //             }
    //     ]
    //   ],
    themeConfig: {
      lastUpdated: '更新时间', // string | boolean
      logo: '/assets/img/hero.png',
      nav: nav,
//禁用导航
    //   navbar: false,
    //插件引入自动生成侧栏不用分别设置
      // nav: [
      //   { text: 'Home', link: '/' },
      //   { text: 'about', link: '/about/' },
      //   { text: 'External', link: 'https://google.com' },
      //   {
      //       text: 'Languages',
      //       items: [
      //         { text: 'Group1', items: [
      //           { text: 'Home', link: '/' },
      //           { text: 'about', link: '/about/' }
      //         ] },
      //         { text: 'Group2', items: [
      //           { text: 'Home', link: '/' },
      //           { text: 'about', link: '/about/' }
      //         ] }
      //       ]
      //     }
      // ],
      //插件引入自动生成侧栏不用分别设置
      // sidebar: [
      //     '',
      //     'about',
      //     'about1'

      // ]
    }}