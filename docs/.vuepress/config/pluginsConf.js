const moment = require('moment');
moment.locale("zh-cn");
module.exports = {
    '@vuepress/last-updated':
    {
      transformer: (timestamp) => {
        // 不要忘了安装 moment 显示更新时间
        const moment = require('moment')
        return moment(timestamp).format('LLLL')
      }
    },
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容",
          buttonText: "刷新"
        }
      },
      //启动自动生成侧边栏
      "vuepress-plugin-auto-sidebar": {
        nav: true
      },
      //搜索插件
      'flexsearch-pro':{
        
      }
}