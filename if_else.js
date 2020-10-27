var a = 11

if (a % 2 === 0) {
    console.log(a + ' is even')
} else if (a % 2 === 1) {
    console.log(a + ' is odd')
}

var b = 11

if (a > b) {
    console.log(a + " is greater than " + b)
} else if (a < b) {
    console.log(`${b} s greater than ${a}`)
} else {
    console.log("Both are equal")
}