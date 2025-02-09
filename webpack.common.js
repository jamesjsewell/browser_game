const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: {
        app: './src/index.js'
    },
    module: {
        rules: [
            {   
                test: /\.txt$/, 
                use: 'raw-loader' 
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                'file-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/, /backend/],
                use: {
                  loader: "babel-loader",
                  options: {
                    cacheDirectory: true,
                    ignore: /backend/
                  }
                }
            },
            {
                test: [ /\.vert$/, /\.frag$/ ],
                use: 'raw-loader'
            }
        ]
    },
    plugins: [

        new HtmlWebpackPlugin({
            title: 'webpack_setup',
            template: "./src/index.html",
            filename: "index.html"
        }),
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ]
};