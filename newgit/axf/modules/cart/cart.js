define(
[
  'text!./cart.html',
  'css!./cart.css'
],
function(html){

  function render(){
    $('#container').html(html);
    add();
    addGoods();
  }

  function add(){
	 $("#goods").on("click",'span',function(){
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
	  			
	  			//动画效果
		          var img = $(this).parent().prev().prev().children();
	  			 console.log(img);
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
					}
					 
            //动画效果
	  			break;
	  		case "-":
	  			var n = parseInt($(this).next("span").text());
	  			var num =parseInt($("#car").children("span").text());
	  			if(n>1){
		  			$("#car").children("span").text(num-=1);
		  			$(this).next("span").text(n-=1);
	  			}else{
	  				$(this).closest(".goods").hide();
	  				$(this).hide();
	  			}
	  			break;
	  		}
		});
	 }

	 //添加商品
	 function addGoods(){
      //循环遍历对象
        var price=0;
        var numAll = 0;


      for(var item in localStorage){
        // 取到我们想要的数据
           if(item!='jfVersion'&&item!='undefined'){
           var json =JSON.parse(JSON.parse(localStorage.main)[item]);
           var xxx =JSON.parse(json.data);
           strItem=
              '<div class = "goods">'+
                    '<div><img src = "../images/xuan.png"></div>'+
                    '<div><img src ='+xxx.img+'></div>'+
                    '<div class="spanDiv">'+
                        '<p>'+xxx.name+'</p>'+
                        '<p>'+xxx.price+'</p>'+
                    '</div>'+
              '<div>'+
                  '<span>'+'-'+'</span>'+'<span>'+json.number+'</span>'+'<span>'+'+'+'</span>'+
              '</div>'+
              '</div>'

          $('#goods')[0].innerHTML+=strItem;
         }
        //获取总数量 总价格
         price+=xxx.price*json.number;
         numAll += json.number;
       $('.choose span:eq(0)').text('￥'+parseInt(price));  
       $("#car").children("span").text(numAll);
     } 
    }
  return {
    render:render
  }

})
