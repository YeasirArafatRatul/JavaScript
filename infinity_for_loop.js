//INFINITY FOR LOOP


for (;;) {
    var rand = Math.round(Math.random() * 10 + 1)

    if (rand === 9) {
        console.log('LOOP ENDS')
        break
    } else {
        console.log(rand)
    }
}