require(["./createye"],function(leaf){
	var oContainer=document.getElementById('container');
	var winWidth=document.documentElement.clientWidth;
	for(var i=0;i<7;i++){
		var iWidth=50+parseInt(Math.random()*51);
		var Leaf=new leaf({
			width:iWidth,
			left:parseInt(Math.random()*(winWidth-iWidth)),
			container:oContainer
		});
		Leaf.fill();
	}

});