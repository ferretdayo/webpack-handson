const path = require('path');

module.exports = [{
    // エントリーポイントの設定
    entry: [
        './src/js/index.js',
    ],
    // 出力の設定
    output: {
        // 出力するファイル名
        filename: 'js/bundle.js',
        path: path.join(__dirname, 'public')
    }
}];
