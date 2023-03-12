var c=0
window.setInterval(slider,1500,i);

function slider(){
	for(let j=0;j<5;j++)
	{
		document.getElementsByClassName('row')[j].style.display="none";
	}
	c++;
	document.getElementsByClassName('row')[c].style.display="block";
	console.log(i);
	
	if(c == 4){
		c=-1;
	}
}