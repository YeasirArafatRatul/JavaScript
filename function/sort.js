var persons = [{
        name: 'A',
        age: 25
    },
    {
        name: 'B',
        age: 21
    },
    {
        name: 'C',
        age: 22
    },
    {
        name: 'D',
        age: 23
    }

]

persons.sort(function(a, b) {
    if (a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    } else {
        return 0
    }
})
console.log(persons)


var arr = [-6, -3, -8, 4, 3, 5, 2, 6, 4, 6, 3, 6, 7]

//ascending
arr.sort(function(a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
})

console.log(arr)



var arr2 = [-6, -3, -8, 4, 3, 5, 2, 6, 4, 6, 3, 6, 7]

//descending
arr2.sort(function(a, b) {
    if (a > b) {
        return -1
    } else if (a < b) {
        return 1
    } else {
        return 0
    }
})

console.log(arr2)


//every function
var is_even = arr.every(function(value) {
    value % 2 === 0
})

console.log(is_even) //false


//some function

var some = arr.some(function(value) {
    return value > 0
})
console.log(some)