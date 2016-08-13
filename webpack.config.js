var path = require ('path');
var webpack = require ('webpack');

module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'index.js'
    },
    devServer: {
        inline:true,
        port:3333
    },
    module: {
        loaders:[
        {
            test:/\.jsx?$/,
            exclude:/node_modules/,
            loader:'babel-loader',
            query: {
                preset: ['es2015', 'react']
            }
        }
         ]
    }

}