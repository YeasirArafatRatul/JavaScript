

// Constructor Pattern
// Naming Convention -> FirstLetterUppercase
var Createrect = function(width,height){

	this.width = width
	this.height = height

	this.draw = function(){
		console.log('I am a rectangle')
		// if we call print() without this it will show reference error
		this.print()
	}

	this.print = function(){
		console.log("My width is "+this.width)
		console.log("My height is "+this.height)
	}
 }


 var rect1 = new Createrect(50,30)
 rect1.draw()

 var rect2 = new Createrect(200,440)
 rect2.draw()