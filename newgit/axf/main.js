require.config({
	paths:{
		'jquery':'lib/jquery',
		'backbone':'lib/backbone',
		'css':'lib/css',
		'text':'lib/text',
		'underscore':'lib/underscore',
		'baidu':'./modules/home/baiduTemplate',
		'ajax':'./modules/home/ajax',
		'touch':'./modules/home/touch',
		'zepto':'./modules/home/zepto',
		'md5':'md5'
		

	},
	shim:{
		"baidu":{
			export:"baiduTemplate"
		},
		'ajax':{
			export:"ajax"
		},
		'zepto':{
			export:"zepto"
		}
	}
});

require([
	'jquery','backbone','baidu','./router.js','ajax','md5'
	],
	function($,backbone){
		Backbone.history.start();

	})