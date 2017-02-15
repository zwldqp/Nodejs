define(function(require,exports,module){
	function leaf(option){
		this.width=option.width;
		this.left=option.left;
		this.container=option.container;
		this.img=new Image();
		this.img.width=this.width;
		this.img.style.left=this.left+'px';
		this.img.src="img/"+parseInt(Math.random()*4+1)+".png";
		option.container.appendChild(this.img);

	}
     leaf.prototype.fill=function(){
     	var that=this;
     	setInterval(function(){
     		that.img.style.top=that.img.offsetTop+5+'px';
     	},Math.random()*200);
     }
     module.exports=leaf;
})