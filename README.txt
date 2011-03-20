TweetSlide - ReadMe

・はじめに
このスクリプトはgivemac2に応募する用に作ったものです。
内容的にはそれからいくらかの改変を加えてます。
Twitterの1ツイートをひとつのスライドにみたてて
連続して表示し、プレゼンのようにしました。
（DOM APIで一時的に追加しているだけです）

・内容物
bookmarklet.js（実行のトリガー）
tweetslide.js（メインファイル）
main.js（givemac2で提出した本体のコピー）
原稿.txt（givemac2の原稿）
ReadMe.txt（これ）

・使い方（ユーザ側）
Twitterにログインした状態でホームに移動します。
URLバーにbookmarklet.jsのスクリプトをペーストし、実行してください。

・使い方（クリエイター側）
tweetslide.jsを読み込んで
main.jsを参考に引数を渡してオブジェクトを生成してあげてください。
生成したら
startメソッドを呼び出してください。
bookmarklet.jsはそれのトリガーなので適当にURLを変えてください。

// 分かりにくくてすみません。
// なにかあったらmanager@masawada.infoへ。

・Tweetの指定方法
var tweets = [{
dt: number, // 表示する秒数
tweet: string // 実際に表示するツイート
}];

・ユーザ情報の指定
var pref = {
	tweetid: '48708799074279424', // ダミーのツイートID
	screenname: 'masawada', // スクリーンネーム（アカウント名）
	userid: '25666146', // ユーザID
	usericon: 'http://a2.twimg.com/profile_images/1112451253/twiticon_20100828_normal.jpg', // ユーザのアイコンURL。httpsのものは読み込めないです。
	username: 'わだまさし' // 表示するユーザの名前
};

・ライセンス
MIT License

---
Copyright (C) 2011 masawada.info All rights reserved.