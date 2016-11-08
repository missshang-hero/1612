define(
[
  'text!./fkms.html',
  'css!./fkms.css'
],
function(html){

  function render(){
    $('#container').html(html);
    getDate();
  }
  function getDate(){
  	sendRequest("post", "../data/test1.json", true, {name: "shang"}, hotData);
	function hotData(data) {
		var html = baidu.template("fkmsH", data);
		document.getElementById("fkms").innerHTML += html;
	}
  }
  return {
    render:render
  }

})
