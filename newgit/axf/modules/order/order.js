define(
[
  'text!./order.html',
  'css!./order.css'
],
function(html){

  function render(){
    $('#container').html(html);


    
  }
  return {
    render:render
  }

})
