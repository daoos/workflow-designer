const ExtractTextPlugin = require("extract-text-webpack-plugin");

let path = require('path');

module.exports = {
    context: path.resolve('src'),
    devtool: 'inline-source-map',
    devServer: {
        contentBase: ['./', './demo']
    },
    entry: [
        './scss/styles.scss',
        './ts/workflowDesigner.ts'
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
        filename: 'workflow-designer.js',
        library: 'workflow-designer',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }]
                  })
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("workflow-designer.css")
    ]
  }