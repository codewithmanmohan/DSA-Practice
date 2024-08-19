/*Given an array arr[] and an integer k where k is smaller than the size of the array, the task is to find the kth smallest element in the given array. It is given that all array elements are distinct.

Follow up: Don't solve it using the inbuilt sort function.

Examples :

Input: arr[] = [7, 10, 4, 3, 20, 15], k = 3
Output:  7
Explanation: 3rd smallest element in the given array is 7.
Input: arr[] = [7, 10, 4, 20, 15], k = 4 
Output:  15
Explanation: 4th smallest element in the given array is 15.
Expected Time Complexity: O(n+(max_element) )
Expected Auxiliary Space: O(max_element)
Constraints:
1 <= arr.size <= 106
1<= arr[i] <= 106
1 <= k <= n*/

class Solution {
    kthSmallest(arr, k) {
           // Helper function to partition the array
           const partition = (arr, left, right) => {
               let pivot = arr[right]; // Choose the rightmost element as pivot
               let i = left; // Place for the next swap
   
               for (let j = left; j < right; j++) {
                   if (arr[j] <= pivot) {
                       [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
                       i++; // Move the boundary of smaller elements
                   }
               }
   
               // Place the pivot in its correct position
               [arr[i], arr[right]] = [arr[right], arr[i]];
               return i; // Return the index of the pivot
           }
   
           // Quickselect function to find the k-th smallest element
           const quickSelect = (arr, left, right, k) => {
               if (left === right) {
                   return arr[left]; // Only one element left
               }
   
               let pivotIndex = partition(arr, left, right);
   
               if (k === pivotIndex) {
                   return arr[k]; // The pivot is in the correct position
               } else if (k < pivotIndex) {
                   return quickSelect(arr, left, pivotIndex - 1, k); // Search in the left part
               } else {
                   return quickSelect(arr, pivotIndex + 1, right, k); // Search in the right part
               }
           }
   
           // Call the quickSelect function and adjust k to be zero-based
           return quickSelect(arr, 0, arr.length - 1, k - 1);
       }
   }


