/**
 * Created by zhangbin on 2017/4/1.
 */
var webpack = require('webpack');
var path = require('path');
module.exports = {
    context: path.join(__dirname),
    entry: "./src/js/index.js",
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['react-html-attrs']

                }
            },
            //下面是使用 ant-design 的配置文件
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
    output: {
        path: __dirname,
        filename: "./src/bundle.js"
    }
}