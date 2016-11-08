define(
[
  'text!./store.html',
  'css!./store.css'
],
function(html){

  function render(){
    $('#container').html(html);
    getDate();
    add();
    numAll();
  }
  function getDate(){
  	setDate("http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=热销榜");
  	function setDate(url){
  		sendRequest("post",url, true, {category: "热销榜"}, hotData);
	    function hotData(data) {
		var html = baidu.template("storeH", data);
		$("#storeLi").html(html);
	}
  	}
  	
	$(".list1").on("click",function(){
		 setDate("http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=天天特价");
	});
	$(".list2").on("click",function(){
		setDate("http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=优选水果");
	});
	$(".list3").on("click",function(){
		setDate("http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=牛奶面包");
	})


  }
	function add(){
	 $("#storeLi").on("click",'span',function(){
	  	switch($(this).text()){
	  		case "+":
	  			//点击 “+”时 让“-” 和数字显示
	  			$(this).siblings("span")[0].style.display = "inline-block";
	  			$(this).siblings("span")[1].style.display = "inline-block";
	  			$("#car").children("span")[0].style.display= "inline-block";
	  			//下面购物车数字加一
	  			var n = parseInt($(this).prev("span").text());
	  			var num =parseInt($("#car").children("span").text());
	  			$("#car").children("span").text(num+=1);
	  			$(this).prev("span").text(n+=1);

	  			 //创建对象进行数据存储
	  			 if(localStorage.main==undefined){
						 main1={}; 

					}else{
						main1=JSON.parse(localStorage.main);

					}
					var parent = $(this).closest('li');
					var json = parent.find('textarea').val();
					var id = parent.attr('id');
					var value = localStorage.getItem(id);
					if(value){
						localStorage.setItem(id,JSON.stringify({
							data:json,
							number:JSON.parse(value).number+1
						}));
						main1[id]=localStorage.getItem(id);
						localStorage.main=JSON.stringify(main1);
					}else{
						localStorage.setItem(id,JSON.stringify({
							data:json,
							number:1
						}));
						main1[id]=localStorage.getItem(id);
						localStorage.main=JSON.stringify(main1);
						//console.log(localStorage.main)
					};
					 
					 
					


	  			//动画效果
	  			 
		          var img = $(this).closest("div").siblings('img');
		            var newBox = img.clone().appendTo(document.body);
		            newBox.css({
                'z-index': 10,
                'border-radius':'50%',
                'display': 'block',
                'position': 'absolute',
                'top': img.offset().top +'px',
                'left': img.offset().left +'px',
                'width': img.width() +'px',
                'height': img.height() +'px'
            });
            newBox.animate({
                top:  $('#car').offset().top,
                left:  $('#car').offset().left+ $('#car').width()/2,
                width: 20,
                height: 32
            }, 'slow', function() {
                newBox.remove();
            });
            //数量减少
	  			break;
	  		case "-":
	  			var n = parseInt($(this).next("span").text());
	  			var num =parseInt($("#car").children("span").text());
	  			if(n>1){
		  			$("#car").children("span").text(num-=1);
		  			$(this).next("span").text(n-=1);
	  			}else{
	  				$(this).next("span").hide();
	  				$(this).hide();
	  			}
	  			break;
	  		}
		});
	 }
	 //使用缓存
	 function numAll(){
	 	if(localStorage!=undefined){

	 	 var jsonNum = JSON.parse(localStorage.main);
			var jsonN=JSON.parse(jsonNum.ccb5a0b30da7fb6fd084f9eb964854de).number;
			console.log(jsonNum)
	 	}

	 }

  return {
    render:render
  }

})
