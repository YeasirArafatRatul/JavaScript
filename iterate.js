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