var head=['opens new doors','creates new hobbies','launches new careers','develops new skills','expands your network'];
i=0;
setInterval(sliding,3000)
function sliding(){
	i++;
	document.getElementById('slider').innerHTML =  head[i];
	
	if(i== head.length-1){
		i=-1;
	}
}
