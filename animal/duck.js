var util=require('util');
var Animal=require('./animal.js');
function Duck(){
	Animal.call(this);
	this.say=function(){
		console.log('gagaga');
	}
}	
util.inherits(Duck,Animal);
var duck=new Duck();
exports.say=duck.say;