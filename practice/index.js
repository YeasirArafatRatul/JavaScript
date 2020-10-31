// alert("I am ready")


var rect = {
    width: 100,
    height: 50,


    draw: function() {
        console.log("I am a rectangle")
        this.print()

    },

    print: function() {
        console.log("My width is " + this.width)
        console.log("My height is " + this.height)

    }
}


rect.draw()


//this will return a window object
function myFunc() {
    console.log(this)
}


// now this will return an empty object because of the 'new' keyword
new myFunc()