//Three main terms
/*
1.Pure Functions
It returns the same result if given the same arguments

2.First Class Functions
A func is stored in a Variable/Array/Object

3.Higher Order Functions
It can take and return function as argument
*/


//First Class Functions
function add(a, b) {
    return a + b
}


var sum = add
console.log(sum(4, 5))


var arr = []
arr.push(add)
console.log(arr)


var obj = {
    sum: add
}

console.log(obj)
console.log(obj.sum(4, 5))

// setTimeout(function() {
//     console.log("I will be called after 5 second")
// }, 5000)


//Higher Order Functions

function manipulate(a, b, func) {
    var c = a + b
    var d = a - b

    function multiply() {
        var m = func(a, b)
        return c * d * m
    }
    return multiply
}

var result = (manipulate(6, 5, add))
console.log(result())