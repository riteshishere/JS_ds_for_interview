// Write a JavaScript program to find the kth greatest element of a given array of integers
function Kth_greatest_in_array(arr, k) {

    for (var i = 0; i < k; i++) {
      var max_index = i,
        tmp = arr[i];
  
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[max_index]) {
          max_index = j;
        }
      }
  
      arr[i] = arr[max_index];
      arr[max_index] = tmp;
    }
    return arr[k - 1];
  }
  module.exports = Kth_greatest_in_array;
/*
console.log(Kth_greatest_in_array([1,2,6,4,5], 3))
4
console.log(Kth_greatest_in_array([-10,-25,-47,-36,0], 1))
0
console.log(Kth_greatest_in_array([23,21,54,67,54],4))
23
console.log(Kth_greatest_in_array([45,12,45,7,96], 2))
45
console.log(Kth_greatest_in_array([1,23,54,25,45,4],3))
25
*/