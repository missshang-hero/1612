function createXhr(){
		if(typeof XMLHttpRequest!="undefined"){
			return new XMLHttpRequest();
		}else if(typeof ActiveXObject !="undefined"){
			//低版本IE使用ActiveXObject传参方式创建xhr对象，主要支持以下参数

			var strList = ["MSXML.XMLHttp.6.0","MSXML.XMLHttp.3.0","MSXML.XMLHttp"];
				tmp = "";
			for(var n in strList){
				//异常处理，try中的代码出现异常会执行catch中的代码，而不会影响外部后续代码执行
				try{
					new ActiveXObject(strList[n]);
					var tmp = strList[n];
					break;
				}catch(e){
					console.log(e);
				}
			}
			if(tmp = ""){
				console.log("您目前的浏览器不支持ajax请求！");
			}else{
			return new ActiveXObject(tmp);
			}
		}else{
			console.log("您的浏览器目前不支持ajax请求");
		}
	}
	//封装公共的请求函数
	function sendRequest(type,url,isSyn,date,callback){
		//创建请求对象
		var xhr = createXhr();
		//绑定readyState  304：使用缓存
		xhr.onreadystatechange = function(){
			if(xhr.status == "200" || xhr.status == "304"){
				if(xhr.readyState == "4"){
					//console.log(xhr.responseText);
					//JSON.parse();
					callback && callback(JSON.parse(xhr.responseText));

				}
			}
		};
		if(type == "get"){
			//?key1=value1&key2=value2
		    url += "?";
			for(var n in date){
				url+= (n+"="+date[n]+"&");
			}
			url = url.substr(0,url.length-1);
		}else{
			date = JSON.stringify(date);
		}
		//请求对象初始化
		xhr.open(type, url, isSyn);//get请求方式 url 同步异步 
		//发送请求JSON.stringify(date)
		xhr.send(type == "get"?null: date);
	};

	