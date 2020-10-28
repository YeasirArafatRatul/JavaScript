var arr = [3, 4, 56, 63, 3, 5, 2, 4, 4]


var sum = arr.reduce(function(prev, curr) {
    return prev + curr
})

console.log(sum)


var max = arr.reduce(function(prev, curr) {
    return Math.max(prev, curr)
}, 0)

console.log(max)



function myReduce(arr, cb, accumulator) {
    for (var i = 0; i < arr.length; i++) {
        accumulator = cb(accumulator, arr[i])
    }
    return accumulator
}

var sum = myReduce(arr, function(prev, curr) {
    return prev + curr
}, 0)

console.log(sum)

var max = myReduce(arr, function(prev, curr) {
    return Math.max(prev, curr)
}, 0)

console.log(max)