//array is a data structure where we store multiple data


var arr = [3, 2, 5, 2, 5]


arr.push(4, 3)
console.log(arr.length)
console.log(arr)


arr.pop()
console.log(arr.length)
console.log(arr)


console.log(arr[4])
arr[4] = 12
console.log(arr)

var arr2 = Array(1, 2, 4, 4, 5)

console.log(arr2)


//TRAVERSING ARRAY
/*

var len = arr2.length
var sum = 0
for (var i = 0; i < len; i++) {
    sum += arr2[i]
    console.log(arr2[i])

}
console.log('SUM of elements:' + sum)

*/

// INSERT
arr2.unshift(0) //inserts in the first position


arr2.splice(5, 0, 34, 54) //splice(index, how_many_data_you_want_to_remove, data)
console.log(arr2)

//REMOVE
arr2.shift() //removes first element
arr2.pop() //removes last element
arr2.splice(3, 1)


//SEARCH IN ARRAY

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var find = 46
var isFound = false

for (var i = 0; i < array.length; i++) {
    if (array[i] === find) {
        console.log('Data found at index ' + i)
        isFound = true
        break
    }
}

if (!isFound) {
    console.log("Data Not Found")
}