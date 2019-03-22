const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'BattleWithoutEnd.js',
        library: 'BattleWithoutEnd',
        libraryTarget: 'umd',
        libraryExport: "default"
    },
    externals: {
        React: 'React'
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ["@babel/plugin-transform-react-jsx"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};