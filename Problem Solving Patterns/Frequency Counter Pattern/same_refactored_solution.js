// Write a function called same, which accepts two arrays.
// The function should return true if every value in the
// array has it's corresponding value squared in the second array
// The frequency of values must be the same.

/*** REFACTORED ***/ 
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    
    // Each object is going to count the frequency of individual values in the arrays
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    // Loop over every value in the array and count the number of times the value appears in the array
    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    // Loop over the first array, look at each key and check if the key squared...
    // can be found in frequencyCounter2; then check if the values correspond
    for(let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) { 
            return false;
        }
        // console.log(frequencyCounter1[key]);
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    console.log('frequencyCounter1:', frequencyCounter1);
    console.log('frequencyCounter2:', frequencyCounter2);
    return true;
}

same([3,6,5,2,8,5], [25,9,36,64,4,25]);