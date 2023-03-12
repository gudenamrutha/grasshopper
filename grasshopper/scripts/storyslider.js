window.setInterval(slid,3000);
var i=0;
function slid(){
	for(let j=0; j<4; j++){
		document.getElementsByClassName('story')[j].style.display="none";
		document.getElementsByClassName('dot')[j].src="images/unshaded.png";
	}
	document.getElementsByClassName('story')[i].style.display="block";
	document.getElementsByClassName('dot')[i].src="images/shaded.png";
	if(i==3){
		i=-1;
	}
}