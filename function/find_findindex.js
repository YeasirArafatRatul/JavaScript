var arr = [3, 4, 2, 5, 7, 3, 7, 3]


var result = arr.find(function(value, index) {
    return value === 5
})

console.log(result)



var result = arr.findIndex(function(value, index) {
    return value === 5
})

console.log(result)

function myFind(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            // return arr[i] // for value
            return i //for index 
        }
    }
}


var result = myFind(arr, function(value) {
    return value === 5
})

console.log(result)