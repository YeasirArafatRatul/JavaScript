function recursion(n) {
    if (n === 0) {
        return
    }
    console.log("Hello")
    recursion(n - 1)

}


//recursion(11)



result = 0

function sum(n) {
    if (n === 0) {
        return
    } else {
        result += n
        sum(n - 1)
    }
    return result
}


console.log(sum(11))



function sum2(n) {
    if (n === 1) {
        return 1
    }
    return n + sum2(n - 1)
}

console.log(sum2(11))


//factorial
function factorial(n) {
    if (n === 1) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(4))