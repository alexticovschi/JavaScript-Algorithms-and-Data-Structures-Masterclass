// Given a sorted array of integers, write a function called search,
// that accepts a value and returns the index where the value passed
// to the function is located. If the values is not found, return -1.

// Time Complexity O(N)
// -- Linear Search

function search(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        } 
    }
    return -1;
}

search([1,2,3,4,5,6],44);