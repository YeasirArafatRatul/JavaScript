var a = 10
var b = 30
var c = 34


if (a > b && a > c) {
    console.log(a + " is the greatest")
} else if (b > a && b > c) {
    console.log(b + " is the greatest")
} else if (c > a && c > b) {
    console.log(c + " is the greatest")
} else {
    console.logL("I am in else")
}


if (a > b || a > c) {
    console.log(a + ' is greater than at least one number')
} else if (b > a || b > c) {
    console.log(b + ' is greater than at least one number')
}

var check = !(a > b) //true  (a is not greater than b)
console.log(check)


var check2 = !!(a > b) //false (a is not greater than b)-> is false
console.log(check2)