var array = [1, 2, 3, 4, 5, 8]


console.log(array.join('  ')) //join() takes a separator

array.fill(0)

console.log(array)

array2 = [4, 5, 6]

var array3 = array.concat(array2)
console.log(array3)


console.log(Array.isArray(array))

var array4 = Array.from(array) //creates a new array(duplicate one)


//this doesn't create a new array rather references the old one 
//if we change new one the old one also chages
var array5 = array