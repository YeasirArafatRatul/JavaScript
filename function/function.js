function addition(a, b) {
    console.log(arguments)
    return a + b

}

console.log(addition(4, 5))


//arbitary length arguments (*args in python)

function add() {
    sum = 0
    for (var i in arguments) {
        sum += arguments[i]
    }
    return sum
}

console.log(add(3, 4, 4, 5, 2))
console.log(add(3, 4, 4, 5, 2, 5, 3, 5))
console.log(add(3, 4, 4, 5, 2, 3, 1, 3, 5, 7, 2))


function add2() {
    sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

var result = add2(3, 4, 5)
console.log('Result: ' + result)


console.log(add(3, 4, 4, 5, 2))
console.log(add(3, 4, 4, 5, 2, 5, 3, 5))
console.log(add(3, 4, 4, 5, 2, 3, 1, 3, 5, 7, 2))