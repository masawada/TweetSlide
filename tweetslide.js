//
// tweetslide.js
//

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