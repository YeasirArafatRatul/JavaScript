// var i = 0

// while (i < 10) {
//     console.log(i)
//     i++
// }



var isRunning = true
while (isRunning) {
    var rand = Math.round(Math.random() * 10 + 1)

    if (rand === 9) {
        console.log('LOOP ENDS')
        isRunning = false
    } else {
        console.log(rand)
    }
}