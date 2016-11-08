define(
[
  'text!./home.html',
  'css!./home.css',
  'css!./swiper.css',
  './swiper.min.js'
  
  
],
function(html){

  function render(){

    $('#container').html(html);
   	getDate();
    add();
	     var mySwiper = $('.swiper-container').swiper({
	    loop: true,
	    autoplay : 1000,
	    speed:300,
	    autoplayDisableOnInteraction : false,
	    pagination: '.swiper-pagination',

	    //其他设置
	  });

  }
  function getDate(){
  	sendRequest("post", "../data/test1.json", true, {name: "shang"}, hotData);
	function hotData(data) {
		var html = baidu.template("homeH", data);
		$("#xfrm").html(html);
	 }
  }

  function add(){
   $("#home").on("click",'span',function(){
      switch($(this).text()){
        case "+":
          $("#car").children("span")[0].style.display= "inline-block";
          //下面购物车数字加一
          var num =parseInt($("#car").children("span").text());
          $("#car").children("span").text(num+=1);
          //动画
          var img = $(this).siblings('img');
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
          break;
        case "-":
        var num =parseInt($("#car").children("span").text());
          $("#car").children("span").text(num-=1);
          break;
        }
    });
   }

  
  return {
    render:render
  }

})
