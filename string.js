// JavaScript uses  LEXICOGRAPHIC to compare strings

var a = 'a'
var b = 'A'

console.log(a > b) //true

console.log('002' == 2) //true


//concat method

var a = 'arafat'

var b = 'ratul'

var c = a.concat(' ', b)

console.log(c)

var d = c.substr(7, 5) //substr(from index, how many characters)
console.log(d)


console.log(c.charAt(0)) // to know the character in this index


console.log(c.startsWith('ara')) //true

console.log(c.endsWith('ul')) //true

console.log(c.toUpperCase()) //ARAFAT RATUL


var spaceremove = '       agdaga   '

console.log(spaceremove.trim()) // to remove leading and trailng spaces like python's strip()



console.log(c.split(' ')) // ['arafat','ratul']



/* LENGTH OF STRING */

var str = 'we are Bangladeshi'

var count = 0

while (str.charAt(count) != '') {
    count++

}

console.log(count) //18


//another approach
length = 0
while (true) {
    if (str.charAt(length) != '') {
        length += 1
    } else {
        break
    }
}
console.log(length) //18


console.log(str.length) //18