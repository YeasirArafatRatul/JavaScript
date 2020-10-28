var arr = [3, 4, 56, 63, 3, 5, 2, 4, 4]


even_array = arr.filter(function(value) {

    if (value % 2 === 0) {
        return value
    }
})


console.log(even_array)


function my_filter(arr, cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

function even(a) {
    return a % 2 === 0
}

function odd(a) {
    return a % 2 === 1
}

result = my_filter(arr, even)
console.log(result)
result2 = my_filter(arr, odd)
console.log(result2)