// Write a function called same, which accepts two arrays.
// The function should return true if every value in the
// array has it's corresponding value squared in the second array
// The frequency of values must be the same.


function same(arr1, arr2) {
    // Colt Steele's solution
    if(arr1.length !== arr2.length) return false;
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2); // what is the index of num squared
        if(correctIndex === -1) return false;
        arr2.splice(correctIndex, 1); // remove num from arr2
    }
    return true;
}

same([3,6,5,2,8], [25,9,36,64,4]);