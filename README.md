# 基于vue+element的后台框架
github地址：[基于vue的后台框架](https://github.com/xjc-opensource/vue-admin-example)  
预览地址：[预览地址](https://xjc-opensource.github.io/vue-admin-example/)

# 1、技术栈
 - vue cli3
 - vue
 - vue-router
 - vuex
 - vue-i18n
 - scss
 - axios
 - mockjs
 - element
 - babel
 - eslint
 
# 2、框架初始化
2.1 安装插件  
``` 
  npm remove -g @vue/cli
  npm install -g @vue/cli
  vue create vue-admin-example
  
  npm install --save vue-i18n
  npm install --save vue-router
  npm install --save vuex
  npm install --save axios
  npm install --save js-md5
  npm install --save font-awesome
  
  npm install --save mockjs 
  npm install --save axios-mock-adapter
  npm install --save echarts 
    
  npm install --save-dev sass-loader
  npm install --sava-dev node-sass 
  
  vue add element
  npm install --sava-dev babel-plugin-component
  npm install --sava-dev compression-webpack-plugin
  npm install --save-dev uglifyjs-webpack-plugin
  npm install --save-dev optimize-css-assets-webpack-plugin
  npm install --save-dev HtmlWebpackPlugin

``` 

     
2.3 调整配置
``` 
  加入配置文件
  .evn
  env.dev
  env.mock
  env.prod
  env.test
  vue.config.js
``` 

# 3、文件目录
```
* dist - 打包文件
* docs - github打包文件
* public - 公用文件(不参与打包处理,打包前后文件名不变化)
* src - 源码文件
    * api - 接口调用
    * asssets - 公用文件
    * components - 自定义vue组件
    * core - 
      * envconfig.js -不同环境下的变量配置
    * demo - 样例
    * i18n - 多语言
    * mock - 模拟数据接口
    * plugins - 第三方加载
    * router - 路由
    * utils - 通用工具类
    * views - 页面
    * vuex - vuex缓存
    * app.vue - 页面入口
    * main.js - 加载入口
    
* README.md - 项目说明
* README-modify.md - 更新记录
```

# 4、开发配置
3.1 安装nodejs  
3.2 配置nodejs
``` 
  * 自定义存储位置(如:D:\nodejs)  
     npm config set prefix "D:\nodejs\node_global"  
     npm config set cache "D:\nodejs\node_cache"   
     添加操作系统环境变量: 名: NODE_PATH 值: D:\nodejs\node_global\node_modules
  * 配成国内下载地址(解决下载慢):  
     阿里: npm config set registry http://registry.npm.taobao.org
``` 
3.3 相关命令(切换至程序根目录)
``` 
    # 安装组件包 
       npm install
    # 更新组件包 
       npm update
    # 开发运行(serve with hot reload at localhost:8080)
      npm run serve
    # 开发打包
       npm run build-dev
    # 测试打包
       npm run build-test
    # 发布打包
       npm run build-prod
     # 演示打包
       npm run build-mock
```
3.4. 安装开发IDE - WebStorm(推荐)

#开发说明
~~~
vue全局变量 GlobalEnvParams 取不同环境的配置变量
~~~

# 相关资料
* vue: https://cn.vuejs.org/
* vue document: https://cn.vuejs.org/v2/guide/
* vue-cli: https://github.com/vuejs/vue-cli
* element: http://element-cn.eleme.io/#/zh-CN
* element component: http://element-cn.eleme.io/#/zh-CN/component/installation
* element theme: https://elementui.github.io/theme-chalk-preview/#/zh-CN
* vue-admin: https://github.com/taylorchen709/vue-admin

link:  
   weixin: chinaxjc208
