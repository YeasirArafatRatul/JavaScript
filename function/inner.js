//nested function

function outer(name, roll) {
    function result() {
        console.log(name, roll)
    }
    result()
}

outer('ratul', '34')