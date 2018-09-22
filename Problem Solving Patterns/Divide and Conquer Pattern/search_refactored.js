// Given a sorted array of integers, write a function called search,
// that accepts a value and returns the index where the value passed
// to the function is located. If the values is not found, return -1.

// Time Complexity Log(N)
// -- Binary Search

function search(array, val) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currEl = array[middle];

        if(currEl < val) {
            min = middle + 1;
        }
        else if (currEl > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }

    return -1;
}

search([1,2,3,6,7,9,11,15,22,24,27,29,31,33,36,40,41,43,44,52],31);