//const path = require('path')

function getOutputDir() {
    return process.env.VUE_APP_FLAG === 'mock' ? 'docs': 'dist';
}

module.exports = {
    publicPath: './',           // 根域上下文目录,默认'/'
    outputDir: getOutputDir(),  // 构建输出目录
    assetsDir: 'assets',        //该目录相对于outputDir,放置打包后生成的静态资源（js、css、img、fonts）的目录.
    indexPath : 'index.html',   //该目录相对于outputDir,指定生成的index.html的输出路径，也可以是一个绝对路径。
    lintOnSave: false,          // 是否开启eslint保存检测，有效值：ture | false | 'error'
    runtimeCompiler: false,     // 运行时版本是否需要编译
    transpileDependencies: [],  // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
    productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    filenameHashing : true, //
    pages : undefined, //多页应用模式下构建应用
    //
    //configureWebpack: config => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
    // },
    //css
    css: {
        // 配置高于chainWebpack中关于css loader的配置
        modules: false, // 是否开启支持‘foo.module.css’样式
        extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
        sourceMap: false, // 是否在构建样式地图，false将提高构建速度
        loaderOptions: {
            //支持的loader:css-loader,postcss-loader,sass-loader,less-loader,stylus-loader
            css : {
                //这里的选项会传递给 css-loader
            },
            postcss : {
                //这里的选项会传递给 postcss-loader
            },
            sass: {
                data: `
                    @import "@/assets/styles/_variable.scss";
                    @import "@/plugins/element-variables.scss";
                `
            }
        }
    },
    //devServer
    devServer: {
        port: 8080,
        host: "0.0.0.0",
        https: false,
        hotOnly: false,
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: { // 配置多个代理
            "/api": {
                target: "<url>",
                ws: true,
                changeOrigin: true
            },
            "/foo": {
                target: "<other_url>"
            }
        },
    },
    // 构建时开启多进程处理 babel 编译
    parallel: require('os').cpus().length > 1,
    // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    pluginOptions: {}, // 第三方插件配置
};