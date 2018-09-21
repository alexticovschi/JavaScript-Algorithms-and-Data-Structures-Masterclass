/*** SLIDING WINDOW PATTERN ***/

// This pattern involves creating a window which can either be an array
// or number from one position to another. Depending on a certain condition, 
// the window either increases or closes (and a new window is created).
// Very useful for keeping track of a subset of data in an array/string etc.


function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;
    
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3);