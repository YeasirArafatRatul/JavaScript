//WHAT IS OBJECT

/*

object is basically a python dictionary
*/

var person = {
    // key/property : value
    name: 'karim',
    age: 34,
    prof: 'Teacher',

}
console.log(person.name)
console.log(person.age)
console.log(person.prof)


person.nationality = 'Bangladeshi'

console.log(person)


var car = Object()
car.name = 'AUDI R8'
car.color = 'Matt Black'

console.log(car)
console.log(car['name'] + " " + car['color'])

var book = new Object()
book.name = "7 habits of highly effective people"
book.author = 'Stepen R Covey'

console.log(book)
console.log(book.name + ' by ' + book.author)


// remove properties
delete person.prof
console.log(person)



//COMPARE OBJECTS


var object1 = {
    a: 30,
    b: 32,
}

var object2 = {
    a: 30,
    b: 32,
}

console.log(object1 === object2) //false -> cz it compares the memory location


if (object1.a === object2.a && object1.b === object2.b) {
    console.log(true)
} else {
    console.log(false)
}


console.log(JSON.stringify(object1))
console.log(JSON.stringify(object1) === JSON.stringify(object2)) //true