var add = function(a, b) {
    return a + b
}


add(4, 5)

//anonymous func
setTimeout(function() {
    console.log("I will be called after 5 second")
}, 5000)

var another = add
console.log(another(5, 8))

// this another func will be executed before the annonymous func (asynchronously)