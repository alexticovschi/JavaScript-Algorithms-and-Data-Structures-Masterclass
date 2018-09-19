// Write a function called same, which accepts two arrays.
// The function should return true if every value in the
// array has it's corresponding value squared in the second array
// The frequency of values must be the same.


function same(arr1, arr2) {
    // My solution
    if(arr1.length !== arr2.length) return false;

    arr1 = arr1.sort((a,b) => a - b);
    arr2 = arr2.sort((a,b) => a - b);
    
    console.log('arr1:', arr1, 'arr2:', arr2);

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] ** 2 !== arr2[i]) {
            return false;
        }
    }
    return true;
}

same([3,6,5,2,8], [25,9,36,64,4]);