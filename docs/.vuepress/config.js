const moment = require('moment');
module.exports = {
    title: "测试配置",
    description: "测试配置标题名称meta中信息",
    //时间处理插件
    plugins: [
        [
          '@vuepress/last-updated',
          {
            transformer: (timestamp) => {
              // 不要忘了安装 moment
              const moment = require('moment')
              moment.locale("zh-cn")
              return moment(timestamp).format('LLLL')
            }
          }
        ]
      ],
    themeConfig: {
      lastUpdated: '更新时间', // string | boolean
      logo: '/assets/img/hero.png',
    //   navbar: false,
      nav: [
        { text: 'Home', link: '/' },
        { text: 'about', link: '/about/' },
        { text: 'External', link: 'https://google.com' },
        {
            text: 'Languages',
            items: [
              { text: 'Group1', items: [
                { text: 'Home', link: '/' },
                { text: 'about', link: '/about/' }
              ] },
              { text: 'Group2', items: [
                { text: 'Home', link: '/' },
                { text: 'about', link: '/about/' }
              ] }
            ]
          }
      ],
      sidebar: [
          '',
          'about',
          'about1'

      ]
    }}