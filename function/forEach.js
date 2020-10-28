var arr = [3, 4, 5, 6, 4, 3]

var sum = 0
arr.forEach(function(value, index, arr) {
    sum += value
    console.log(value, index, arr)
    console.log('summation :' + sum)
})