// main.js (tweetSlide)
(function(){
var TwSlidejs = function(pref, text){
	this.pref = pref;
	this.tweets = text;
	this.disp = document.getElementsByClassName('stream-items')[0];
};
TwSlidejs.prototype = (function(){
	var proto = {};
	
	// public
	proto.startSlide = function(){
		this.startSlide_();
	};
	
	// private
	proto.startSlide_ = function(){
		this.displayTweets_(0);
	};
	
	proto.displayTweets_ = function(n){
		var div = this.genTweet_(this.tweets[n].tweet);
		this.disp.insertBefore(div, this.disp.firstChild);
		if(n+1 < this.tweets.length){
			var self = this;
			setTimeout(function(){self.displayTweets_(n+1);},this.tweets[n].dt*1000);
		}
	};
	
	proto.genTweet_ = function(tweet){
		var node1 = {
			node: 'div',
			attribute: {
				'class': 'more'
			},
			child: '&raquo'
		};
		var node2 = this.getTweetArray_(tweet);
		
		var div = document.createElement('div');
		div.setAttribute('class','stream-item');
		div.setAttribute('data-item-id',this.pref.tweetid);
		div.setAttribute('data-item-type','tweet');
		div.setAttribute('media','true');
		this.createNode_(div, node1);
		this.createNode_(div, node2);
		
		return div;
	};
	
	proto.createNode_ = function(parent, obj){
		var node = document.createElement(obj.node);
		for(var key in obj.attribute){
			node.setAttribute(key,obj.attribute[key]);
		}
		if(typeof obj.child === 'string'){
			node.innerHTML = obj.child;
		}else if(typeof obj.child === 'object' && 0 < obj.child.length){
			for(var i = 0; i < obj.child.length; i++){
				arguments.callee(node, obj.child[i]);
			}
		}
		parent.appendChild(node);
	};
	
	proto.getTweetArray_ = function(tweet){
		var pref = this.pref;
		return {
			node: 'div',
			attribute: {
				'class': 'stream-item-content tweet stream-tweet',
				'data-tweet-id': pref.tweetid,
				'data-item-id': pref.tweetid,
				'data-screen-name': pref.screenname,
				'data-user-id': '25666146'
			},
			child: [{
				node: 'div',
				attribute: {
					'class': 'tweet-dogear'
				}
			},{
				node: 'div',
				attribute: {
					'class': 'tweet-image'
				},
				child: [{
					node: 'img',
					attribute: {
						'height': '48',
						'width': '48',
						'src': pref.usericon,
						'alt': pref.username,
						'class': 'user-profile-link',
						'data-user-id': pref.userid
					}
				}]
			},{
				node: 'div',
				attribute: {
					'class': 'tweet-content'
				},
				child: [{
					node: 'div',
					attribute: {
						'class': 'tweet-row'
					},
					child: [{
						node: 'span',
						attribute: {
							'class': 'tweet-user-name'
						},
						child: [{
							node: 'a',
							attribute: {
								'class': 'tweet-screen-name user-profile-link',
								'data-user-id': pref.userid,
								'href': '/#!/' + pref.screenname,
								'title': pref.username
							},
							child: pref.screenname
						},{
							node: 'span',
							attribute: {
								'class': 'tweet-full-name'
							},
							child: ' ' + pref.username
						}]
					},{
						node: 'div',
						attribute: {
							'class': 'tweet-corner'
						},
						child: [{
							node: 'div',
							attribute: {
								'class': 'tweet-meta'
							},
							child: [{
								node: 'span',
								attribute: {
									'class': 'icons'
								},
								child: [{
									node: 'div',
									attribute: {
										'class': 'extra-icons'
									},
									child: [{
										node: 'span',
										attribute: {
											'class': 'inlinemedia-icons'
										}
									}]
								}]
							}]
						}]
					}]
				},{
					node: 'div',
					attribute: {
						'class': 'tweet-row'
					},
					child: [{
						node: 'div',
						attribute: {
							'class': 'tweet-text'
						},
						child: tweet
					}]
				},{
					node: 'div',
					attribute: {
						'class': 'tweet-row'
					},
					child: [{
						node: 'a',
						attribute: {
							'href': 'javascript:void(0);',
							'class': 'tweet-timestamp'
						},
						child: [{
							node: 'span',
							attribute: {
								'class': '_timestamp',
								'data-time': new Date().getTime(),
								'data-long-form': 'true'
							},
							child: '1 second ago'
						}]
					}]
				}]
			}]
		};
	};
	
	return proto;
})();

// execute
var pref = {
	tweetid: '48708799074279424',
	screenname: 'masawada',
	userid: '25666146',
	usericon: 'http://a2.twimg.com/profile_images/1112451253/twiticon_20100828_normal.jpg',
	username: 'わだまさし'
};
var tweets = [{dt: 4,tweet: 'これから「ソーシャルネットワークの未来像」というテーマでツイートをします。'},
{dt: 8,tweet: 'ソーシャルネットワークサービス（以下SNS）はその名のとおり社会的関係をネット上で構築するサービスでした。'},
{dt: 4,tweet: 'しかしその位置づけは大きく変化していると思います。'},
{dt: 7,tweet: 'なぜなら、SNSの中でコミュニケーションと同等かそれ以上に活発に情報の共有が行なわれているからです。'},
{dt: 7,tweet: 'TwitterのTLを眺めると（人によりますが）明日の天気やニュースなどの情報で溢れていることからも明らかです。'},
{dt: 6,tweet: 'そして驚くことにそれらのサービスはほとんどがTwitter本体が提供しているものではありません。'},
{dt: 6,tweet: '画像や映像の共有サイトから天気やニュースなどを流すbotまで全てサードパーティ製です。'},
{dt: 5,tweet: '<a href="http://twitpic.com/" target="_blank" rel="nofollow" class="twitter-timeline-link" data-expanded-url="http://twitpic.com/" title="http://twitpic.com/">Twitpic</a>や@<a class="twitter-atreply" data-screen-name="zishin3255" href="http://twitter.com/zishin3255" rel="nofollow">zishin3255</a>などの素晴らしいサービスはそのほんの一部です。'},
{dt: 5,tweet: 'この拡張性が多彩で莫大な情報量を生んでいるわけです。'},
{dt: 4,tweet: 'そしてもう一つポイントなのは規模が非常に大きいことです。'},
{dt: 5,tweet: '掲示板やチャット等はローカルなコミュニティを形成するのに役立ってきました。'},
{dt: 7,tweet: 'しかし、SNSはそれに近いとはいえ比べ物にならない程の規模であり、これが情報の拡散に貢献しています。'},
{dt: 7,tweet: 'そしてその、ほかのユーザによってふるいをかけられた情報を大量にみることができるというのはこの上ないメリットではないでしょうか。'},
{dt: 7,tweet: 'もちろん間違った、または偏った情報が流れやすいという弊害もありますがユーザの心がけ次第で回避も可能なはずです。'},
{dt: 3,tweet: 'つまり何を主張したいのかといいますと'},
{dt: 8,tweet: '将来SNSはグーグルに取って代わり次世代の情報ポータル（入り口）になり得る'},
{dt: 3,tweet: 'という事に尽きるのです。'},
{dt: 8,tweet: '機械的な検索エンジンよりも「自分が選んだ気の合う人」によって迅速に広められた情報の方が価値があると思いませんか？'},
{dt: 4,tweet: '僕がいいたいのは、そういうことなのです。'},
{dt: 0,tweet: 'これでツイートは終了です。ありがとうございました。'}];

var slide = new TwSlidejs(pref, tweets);
slide.startSlide();
})();