var arr = [2, 3, 4]

var sqrArr = arr.map(function(value, index, arr) {
    return value ** 2
})

console.log(sqrArr)