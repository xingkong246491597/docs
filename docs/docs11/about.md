---
navbar: false
sidebar: auto
---
## 文章内快速检索内容

学习vuepress

## 导航栏

### 导航栏 Logo
你可以通过 themeConfig.logo 增加导航栏 Logo ，Logo 可以被放置在公共文件目录：

// .vuepress/config.js
module.exports = {
  themeConfig: {
    logo: '/assets/img/logo.png',
  }
}



### 导航栏链接

你可以通过 themeConfig.nav 增加一些导航栏链接:

// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}

### 禁用导航栏
你可以使用 themeConfig.navbar 来禁用所有页面的导航栏：

// .vuepress/config.js
module.exports = {
  themeConfig: {
    navbar: false
  }
}
你也可以通过 YAML front matter 来禁用某个指定页面的导航栏：


navbar: false



## 侧边栏
想要使 侧边栏（Sidebar）生效，需要配置 themeConfig.sidebar，基本的配置，需要一个包含了多个链接的数组：

// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}
你可以省略 .md 拓展名，同时以 / 结尾的路径将会被视为 */README.md，这个链接的文字将会被自动获取到（无论你是声明为页面的第一个 header，还是明确地在 YAML front matter 中指定页面的标题）。如果你想要显示地指定链接的文字，使用一个格式为 [link, text] 的数组


### 嵌套的标题链接
嵌套的标题链接
默认情况下，侧边栏会自动地显示由当前页面的标题（headers）组成的链接，并按照页面本身的结构进行嵌套，你可以通过 themeConfig.sidebarDepth 来修改它的行为。默认的深度是 1，它将提取到 h2 的标题，设置成 0 将会禁用标题（headers）链接，同时，最大的深度为 2，它将同时提取 h2 和 h3 标题。

也可以使用 YAML front matter 来为某个页面重写此值：


sidebarDepth: 2

### 显示所有页面的标题链接
默认情况下，侧边栏只会显示由当前活动页面的标题（headers）组成的链接，你可以将 themeConfig.displayAllHeaders 设置为 true 来显示所有页面的标题链接：

// .vuepress/config.js
module.exports = {
  themeConfig: {
    displayAllHeaders: true // 默认值：false
  }
}

### 活动的标题链接
默认情况下，当用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新，这个行为可以通过以下的配置来禁用：

// .vuepress/config.js
module.exports = {
  themeConfig: {
    activeHeaderLinks: false, // 默认值：true
  }
}
TIP

值得一提的是，当你禁用此选项时，此功能的相应脚本将不会被加载，这是我们性能优化的一个小点。

### 侧边栏分组
你可以通过使用对象来将侧边栏划分成多个组：

// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: 'Group 1',   // 必要的
        path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */ ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ]
  }
}
侧边栏的每个子组默认是可折叠的，你可以设置 collapsable: false 来让一个组永远都是展开状态。

一个侧边栏的子组配置同时支持 sidebarDepth 字段用于重写默认显示的侧边栏深度(1)。

TIP

嵌套的侧边栏分组也是支持的。

### 多个侧边栏
如果你想为不同的页面组来显示不同的侧边栏，首先，将你的页面文件组织成下述的目录结构：

.
├─ README.md
├─ contact.md
├─ about.md
├─ foo/
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar/
   ├─ README.md
   ├─ three.md
   └─ four.md
接着，遵循以下的侧边栏配置：

// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: {
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  }
}
WARNING

确保 fallback 侧边栏被最后定义。VuePress 会按顺序遍历侧边栏配置来寻找匹配的配置。


### 自动生成侧栏
如果你希望自动生成一个仅仅包含了当前页面标题（headers）链接的侧边栏，你可以通过 YAML front matter 来实现：


sidebar: auto

你也可以通过配置来在所有页面中启用它：

// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: 'auto'
  }
}
在 多语言 模式下, 你也可以将其应用到某一特定的语言下：

// .vuepress/config.js
module.exports = {
  themeConfig: {
     '/zh/': {
       sidebar: 'auto'
     }
  }
}

### 禁用侧边栏
你可以通过 YAML front matter 来禁用指定页面的侧边栏：


sidebar: false
