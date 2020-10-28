// if data come in a scope from another scope then it is called closure
var b = 30

function a() {
    var x = 5
    console.log(b)

    return function() {
        console.log(x)
    }
}

var abc = a()

console.dir(abc)

/* OUTPUT IN BROWSER'S CONSOLE */

/*
> ƒ anonymous()
    arguments: null
    caller: null
    length: 0
    name: ""
    > prototype: {constructor: ƒ}
    > __proto__: ƒ ()
    [[FunctionLocation]]: VM73:7
    > [[Scopes]]: Scopes[2]
        > 0: Closure (a) {x: 5}
        > 1: Global {0: global, 1: global, window: Window, self: Window, document: document, name: "", location: Location, …}
*/