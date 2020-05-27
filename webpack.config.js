const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

function generateHtmlPlugins(templateDir) {
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
    return templateFiles.map((item) => {
        const parts = item.split('.');
        const name = parts[0];
        const extension = parts[1];
        return new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: path.resolve(
                __dirname,
                `${templateDir}/${name}.${extension}`
            ),
            inject: false
        });
    });
}

const htmlPlugins = generateHtmlPlugins('./html/views');

const config = {
    context: __dirname,
    devtool: 'source-map',
    entry: './js/index.js',
    module: {
        rules: [
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'html/includes'),
                use: ['raw-loader']
            }
        ]
    },
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserPlugin({
                sourceMap: true,
                extractComments: true
            })
        ]
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [].concat(htmlPlugins)
};

module.exports = (env, argv) => {
    // if (argv.mode === 'production') {
    //     config.plugins.push(new CleanWebpackPlugin());
    // }
    return config;
};
