'use strict';
//
// O(1):  Regardless of the complexity (number of items)
// the result is constant.  It only requires one step

function returnFirst(items) {

   console.log(items);

}
returnFirst([1,2,3]);

// O(n):  This is where 'n' is the number of times or things that
// it has to do.  So, for example a for loop does one thing for
//every

function findLoopState(data){

for(var i = 0; i < 5; i++) {
   console.log("outer loop at state: "+i+"\n");
   for(var j = 0; data < 2; data++){
       console.log("inner loop at state: "+j);

       if(j===1){
           console.log("\n");
       }
   }
}
} findLoopState([1,2,3]);


// o(n -squared):  is where the performance is directly
// proportional to the square of the size of the input data set
// For example the below function has 6 steps, the same amount
// of numbers that are in the data input


function selectionSort(arr){
 var minIdx, temp,
     len = arr.length;
 for(var i = 0; i < len; i++){
   minIdx = i;
   for(var  j = i+1; j<len; j++){
      if(arr[j]<arr[minIdx]){
         minIdx = j;
      }
   }
   temp = arr[i];
   arr[i] = arr[minIdx];
   arr[minIdx] = temp;
 }
 return arr;
}
 console.log(selectionSort([1,3,6,2,9,8]));
