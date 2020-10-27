var two_dimensional_array = [
    [24, 52, 45, 62],
    [34, 25, 32, 12],
    [58, 65, 45, 95],
    [52, 45, 15, 84],

]


console.log(two_dimensional_array[0][3])
console.log(two_dimensional_array[1][2])
console.log(two_dimensional_array[2][0])
console.log(two_dimensional_array[3][1])
console.log("***************")


for (var i = 0; i < two_dimensional_array.length; i++) {
    var elements = []
    for (var j = 0; j < two_dimensional_array[i].length; j++) {
        elements.push(two_dimensional_array[i][j])
        console.log(two_dimensional_array[i][j])
    }
    console.log(elements)
}