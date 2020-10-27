//PRIMITIVE
/*
Primitive datatypes are Javascripts default data type

number
string
boolean
undefined
null
*/


//OBJECT
/*
Object datatypes are customized datatypes made by Primitive datatypes

Array
Object
Function

*/


// ****NUMBERS****

var n = 1235
var f = 3.2323
var n2 = Number('34.3')

console.log(n2)
console.log(Number.parseFloat(n2))
console.log(Number.parseInt(n2))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)


console.log(1 / 0) //Infinity

console.log('abc' * 3) //NaN - Not A Number



// ****STRINGS**** 

//string literal
var str = 'Hello'
var str2 = 'World'
var str3 = `backtick`

//string constructor
var str4 = String(234)

console.log(str, str2, str3, str4)


// ****BOOLEAN****

//boolean literal
var b1 = true
var b2 = false

//boolean constructor
var b3 = Boolean(true)


// ****NULL vs UNDEFINED ****

var abc
var xyz = null
console.log(abc, xyz)


// **** OCTAL & HEXADECIMAL ****

var hex = 0xFF //hexa
console.log(hex)

var oct = 047 //octal