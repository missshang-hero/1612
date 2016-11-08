define(
[
  'text!./score.html',
  'css!./score.css'
],
function(html){
	
  function render(){
    $('#body').html(html);
  }
  return {
    render:render
  }

})
