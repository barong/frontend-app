var pathConfig = require('./path.config');
var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        "app": ['babel-polyfill', pathConfig.ts + '/App.tsx']
    },
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, "../public/assets"),
        filename: '[name].js',
        publicPath: '/assets/'
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        proxy: {
            '*': {
                target: pathConfig.baseUrl,
                changeOrigin: true, // needed for virtual hosted sites
                // ws: true, // proxy websockets
                bypass: function (req, res, proxyOptions) {
                    // remove "/assets/.css" files for webpack-dev-server page to exclude wrong css overriding
                    if (req.url && req.url.match(/\/assets\/.+?\.css/)) {
                        console.warn("WARN: file=" + req.url + " will not be proxied for dev purpose.");
                        return '/404.html';
                    }
                }
            }
        }
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
                    'react-hot-loader',
                    'babel-loader',
                    'ts-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            url: false,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    }
};
