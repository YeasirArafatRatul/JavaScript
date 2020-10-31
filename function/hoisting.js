var a = 120

//newPrint is not a function

// newPrint(a)

print(10)
    //function expression
var newPrint = print

newPrint(45)

//function declaration
function print(a) {
    console.log(a)
}

print(a)


//CREATIONAL PHASE
//a = undefined
// newPrint = undefined -> error
//print = ref



//EXECUTIONAL PHASE
//a = 120
// print()
// newPrint = print ref
//print()