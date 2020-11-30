function myFunc(){
	console.log(this)
}

//will return an empty object
new myFunc()

// THIS refer to object
// THIS refer to window object if it is not assign to anything
// THIS refer to empty object


var rect = {
	width:100,
	height:50,

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

rect.draw()


var sqr = {
	width: 20,
	height:20,

	// reference the print() function of rectangle
	print: rect.print
}


sqr.print()