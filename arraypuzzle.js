/*Given an array nums[], construct a Product Array nums[] such that nums[i] is equal to the product of all the elements of nums except nums[i].

Examples:

Input: nums[] = [10, 3, 5, 6, 2]
Output: [180, 600, 360, 300, 900]
Explanation: For i=0, P[i] = 3*5*6*2 = 180.
For i=1, P[i] = 10*5*6*2 = 600.
For i=2, P[i] = 10*3*6*2 = 360.
For i=3, P[i] = 10*3*5*2 = 300.
For i=4, P[i] = 10*3*5*6 = 900.
Input: nums[] = [12,0]
Output: [0, 12]
Expected Time Complexity: O(n)
Expected Auxiliary Space: O(n)

Constraints:
1 <= nums.size() <= 1000
0 <= nums[i] <= 200
nums[i] may contain duplicates.           */ 


function productExceptSelf(nums) {
    const n = nums.length;
    
    // Initialize the output, left_products, and right_products arrays
    const output = new Array(n).fill(0);
    const left_products = new Array(n).fill(0);
    const right_products = new Array(n).fill(0);

    // Compute the left products
    left_products[0] = 1;
    for (let i = 1; i < n; i++) {
        left_products[i] = nums[i - 1] * left_products[i - 1];
    }

    // Compute the right products
    right_products[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        right_products[i] = nums[i + 1] * right_products[i + 1];
    }

    // Compute the output products by multiplying left and right products
    for (let i = 0; i < n; i++) {
        output[i] = left_products[i] * right_products[i];
    }

    return output;
}

// Example usage:
const nums = [10, 3, 5, 6, 2];
console.log(productExceptSelf(nums));  // Output: [180, 600, 360, 300, 900]
