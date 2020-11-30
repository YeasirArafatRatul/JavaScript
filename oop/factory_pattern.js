

// Factory Pattern
var createRect = function(width,height){
	return {
	width: width,
	height: height,

	draw: function(){
		console.log('I am a rectangle')
		// if we call print() without this it will show reference error
		this.print()
	},

	print: function(){
		console.log("My width is "+this.width)
		console.log("My height is "+this.height)
	}
 }
}
// OBJECTS
 var rect1 = createRect(50,30)
 rect1.draw()

 var rect2 = createRect(200,440)
 rect2.draw()