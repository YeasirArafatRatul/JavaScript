function sample(a, b, callback) {
    var c = a + b
    var d = a - b
    var result = callback(c, d)
    return result
}


function sum(a, b) {
    return a + b
}

function mul(a, b) {
    return a * b
}


console.log(sample(5, 6, sum))
console.log(sample(6, 6, mul))


sample(7, 6, function(x, y) {
    console.log(x, y)
})