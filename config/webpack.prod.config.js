var pathConfig = require('./path.config');
var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        "app": ['babel-polyfill', pathConfig.ts + '/App.tsx']
    },
    output: {
        path: path.resolve(__dirname, "../public/assets"),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.less'],
        modules: [
            path.resolve(__dirname, '../node_modules'),
            path.resolve(__dirname, '..', pathConfig.js_vendor),
            path.resolve(__dirname, '..', pathConfig.ts),
            path.resolve(__dirname, '..', pathConfig.less)
        ],
        alias: {
            'jquery': 'jquery/jquery-1.8.3.min',
            'json': 'json/json2.min',
            'underscore': 'underscore/underscore-min',
            'backbone': 'backbone/backbone-min',
            // unescape module name with \\
            'cookie': '\\jquery.cookie/\\jquery.cookie'
        }

    },
    // what comes as external dependencies
    externals: {
        "jquery": "$",
        "backbone": "Backbone",
        "react": "React",
        "react-dom": "ReactDOM",
        "underscore": "_"
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ],
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    'babel-loader',
                    'ts-loader'
                ]
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                url: false
                            }
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                })
            }
        ]
    }
};
