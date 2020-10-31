var obj = {
    x: 40,
    y: 23,
    z: 4,
}

console.log('x' in obj) //true 'in' is membership operator


// for in loop 

for (var key in obj) {
    //have to use array notation cz here key is variable 
    //if you use obj.key (dot notation) the values will be 'undefined'
    console.log(obj[key])
}


console.log(Object.keys(obj)) //to show the keys in obj
console.log(Object.values(obj)) //to show the values in obj
console.log(Object.entries(obj)) //to show the [pkeys,value] in obj



// clone an object

var obj2 = Object.assign({}, obj)