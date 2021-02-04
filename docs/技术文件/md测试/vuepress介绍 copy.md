# 介绍 转化后没有修改

VuePress 由两部分组成：第一部分是一个极简静态网站生成器 (opens new
window)，它包含由 Vue 驱动的主题系统和[插件
API](https://vuepress.vuejs.org/zh/plugin/)，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持
Vue 及其子项目的文档需求。

每一个由 VuePress 生成的页面都带有预渲染好的
HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue
将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。

# 它是如何工作的

事实上，一个 VuePress 网站是一个由 [Vue (opens new
window)](http://vuejs.org/)、Vue Router (opens new window)和 [webpack (opens new
window)](http://webpack.js.org/)驱动的单页应用。如果你以前使用过 Vue
的话，当你在开发一个自定义主题的时候，你会感受到非常熟悉的开发体验，你甚至可以使用
Vue DevTools 去调试你的自定义主题。

在构建时，我们会为应用创建一个服务端渲染（SSR）的版本，然后通过虚拟访问每一条路径来渲染对应的HTML。这种做法的灵感来源于
Nuxt (opens new window)的 nuxt generate 命令，以及其他的一些项目，比如
[Gatsby](https://www.gatsbyjs.org/)。

# 目录结构

VuePress 遵循 “约定优于配置” 的原则，推荐的目录结构如下：

![](/media/ea938e88743823524dc296849831992f.png)

-   docs/.vuepress: 用于存放全局的配置、组件、静态资源等。

-   docs/.vuepress/components: 该目录中的 Vue 组件将会被自动注册为全局组件。

-   docs/.vuepress/theme: 用于存放本地主题。

-   docs/.vuepress/styles: 用于存放样式相关的文件。

-   docs/.vuepress/styles/index.styl:
    将会被自动应用的全局样式文件，会生成在最终的 CSS
    文件结尾，具有比默认样式更高的优先级。

-   docs/.vuepress/styles/palette.styl: 用于重写默认颜色常量，或者设置新的
    stylus 颜色常量。

-   docs/.vuepress/public: 静态资源目录。

-   docs/.vuepress/templates: 存储 HTML 模板文件。

-   docs/.vuepress/templates/dev.html: 用于开发环境的 HTML 模板文件。

-   docs/.vuepress/templates/ssr.html: 构建时基于 Vue SSR 的 HTML 模板文件。

-   docs/.vuepress/config.js: 配置文件的入口文件，也可以是 YML 或 toml。

-   docs/.vuepress/enhanceApp.js: 客户端应用的增强。

此处我们把 docs 目录作为 targetDir （参考
[命令行接口](https://vuepress.vuejs.org/zh/api/cli.html#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95)），下面所有的“文件的相对路径”都是相对于
docs 目录的。在项目根目录下的 package.json 中添加 scripts ：

{

"scripts": {

"dev": "vuepress dev docs",

"build": "vuepress build docs"

}}

对于上述的目录结构，默认页面路由地址如下：

| 文件的相对路径   | 页面路由     |
|------------------|--------------|
| /README.md       | /            |
| /guide/README.md | /guide/      |
| /config.md       | /config.html |

此处我们把 docs 目录作为 targetDir （参考
[命令行接口](https://vuepress.vuejs.org/zh/api/cli.html#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95)），下面所有的“文件的相对路径”都是相对于
docs 目录的。在项目根目录下的 package.json 中添加 scripts ：
