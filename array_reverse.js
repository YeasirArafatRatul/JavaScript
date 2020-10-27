var array = [1, 2, 3, 4, 5, 8]


//different approach
var reversed_array = []
for (var i = 0; i < array.length; i++) {
    reversed_array.unshift(array[i])
}
console.log(reversed_array)


//another_way (without using another array)

for (var i = 0; i < array.length / 2; i++) {
    var temp = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = temp
}

console.log(array)

var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array2.reverse())