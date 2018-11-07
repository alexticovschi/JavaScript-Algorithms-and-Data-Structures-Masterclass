/*** Linear Search ***/ 

// Write a function called linearSearch which accepts an array
// and a value, and returns the index at which the value exists
// If the value does not exist in the array, return -1

// Examples:
//  linearSearch([10, 15, 20, 25, 30], 15) // 1
//  linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
//  linearSearch([100], 100) // 0
//  linearSearch([1, 2, 3, 4, 5], 6) // -1
//  linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
//  linearSearch([100], 200) // -1

function linearSearch(arr, val) {
    for (let i = 0; i < arr.lenght; i++) {
        if (arr[i] === val) return i;
    }
    return - 1;
}

linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)