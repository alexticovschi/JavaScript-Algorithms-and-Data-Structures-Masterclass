// Write a function called productOfArray which takes in an array of numbers 
// and returns the product of them all

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    return arr.length === 0 ? 1 : arr[0] * productOfArray(arr.slice(1));
}