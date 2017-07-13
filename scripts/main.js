/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
const K = 10
const Q = 10
const J = 10
const A = 11
let length = testArray.length
let testArray = [1,2,3,4,5,6,7,8,9,K,Q,J,A]


function handValue (hand) {
  for (i=0; i < length; i++){
    for (let ttlSum = (sum += testArray[i])){
      if ((ttlSum - A) >= 21){
        let A = 1
      }
    }
  }
}
return handValue(hand);




/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
