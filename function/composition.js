//one functions output is anothers input


function print(inp) {
    console.log(inp)
}


function multiply(n) {
    return n * 5
}

function add(a, b) {
    return a + b
}

//3+5 = 8 * 5 
print(multiply(add(3, 5)))