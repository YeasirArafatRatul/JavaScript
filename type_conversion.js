var str = '20'

console.log(Number(str) + 10)
console.log(Number.parseInt(str) + 10)
var n = 3
console.log(n.toString())


console.log(Number(Infinity))
console.log(String(Infinity)) //Infinity - string
console.log(Boolean(Infinity)) // true
console.log(Boolean(-Infinity)) // true



//Falsy Values
/*

'' - empty
0
null
undefined
NaN

*/

//Truthy Values-Rest of all are truthy values

console.log(Boolean('')) //false
console.log(Boolean('fasdfgasd')) //true
console.log(Boolean(0)) //false
console.log(Boolean(243)) //true