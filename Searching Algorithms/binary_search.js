/*** Binary Search ***/

// Write a function called binarySearch which accepts a sorted array and a value
// and returns the index at which the value exists. Otherwise return -1.

/* Pseudocode */
// * Create a left pointer at the start of the array, and a right pointer at the end of the array.
// * While the left pointer comes before the right pointer:
//     * Create a pointer in the middle 
//     * If you find the value you want, return the index 
//     * If the value is too small, move the left pointer up 
//     * If the value is too large, move the right pointer down 
// * If you never find the value, return -1

// Examples:
//  binarySearch([1,2,3,4,5], 2) // 1
//  binarySearch([1,2,3,4,5], 5) // 4
//  binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 10) // 2
//  binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 95) // 16
//  binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 100) // -1


function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middleIndex = Math.floor((start + end) / 2);
        let middleEl = arr[middleIndex];
        
        if (middleEl === val) return middleIndex;
        if(middleEl < val) start = ++middleIndex;
        if (middleEl > val) end = --middleIndex;
    }

    return -1;
}