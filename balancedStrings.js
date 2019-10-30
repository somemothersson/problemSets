/*
Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.

*/

var balancedString = (s) => {
   
    var count = 0
   // loop array
   let array = s.split('')

   let shift = array.shift(2)

   console.log(shift)

   
//    let storage = []
//    console.log(array)
//    for (let i=0; i <array.length; i++){
      
       
      
//    }
//    console.log(count)
//    console.log(`storage: ${storage}`)

}

balancedString("RLRRLLRLRL")
// balancedString("RLLLLRRRLR")
// balancedString("LLLLRRRR")