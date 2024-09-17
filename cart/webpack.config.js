const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFerderationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer:{
        port: 8082,
    },
    plugins:[
        new ModuleFerderationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/bootstrap.js'
            },
            shared:['faker']
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ]
}