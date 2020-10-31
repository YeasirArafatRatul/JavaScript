//The concept of curring is to break the multiple arguments of a function 
//and pass them individually


//it is useful during composition, event handling
function add(a, b, c) {
    return a + b + c
}

add(34, 23, 23)


function currying(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

//func()()() -> first func returns another func so add parenthesis() 
var result = currying(4)(20)(32)

console.log(result)