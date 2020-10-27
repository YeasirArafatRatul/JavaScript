//****Arithmetic Operator***

/*  
+ PLUS
- MINUS
* MUL
/ DIV
% MODULAS

++ INCREMENT
-- DECREMENTER

PRE-INCREMENTAL ++i
POST-INCREMENTAL i++

PRE-DECREMENTAL --i
POST-DECREMENTAL i--
*/
var a = 3
console.log(a++) //3 cz first if prints and then it increments the value
console.log(a)

var b = 22

console.log(--b) //21 cz first if decrements the value and then it prints 
console.log(b)


// **** Assignment Operator ****

var a = 30
var b = 4

a += b
console.log(a) //34

a -= b
console.log(a) //30

a *= b
console.log(a) //120

a %= b
console.log(a) //0



// **** Comparison Operator ****


/* always return BOOLEAN value */


var a = 3
var b = 2
console.log(a == b) //false
console.log(a != b) //true

console.log(a > b) //true
console.log(a < b) //false

console.log(a >= b) //true
console.log(a <= b) //false

var c = 4
var d = '4'

console.log(c == d) //true cz 'd' is implicitly converted

//so check VALUE and TYPE both
console.log(c === d) //false


//**** Logical operators *****
/**
 &&
 
 || 
 
 !
 */



//**** Bitwise Operator ****

/*
&
|
~
^
<< - left shift
>> - right shift

*/

//* typeof operatory */