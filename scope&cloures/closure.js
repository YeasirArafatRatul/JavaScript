 //able to remember and access it's lexical scope
 // when that function executing outside it's lexical scope



 function test() {
     var msg = 'I am ...'

     return function() {
         console.log(msg)
     }
 }


 var saymsg = test()
 saymsg()