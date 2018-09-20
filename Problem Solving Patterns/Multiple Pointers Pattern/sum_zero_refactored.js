// Write a function called sumZero which accepts a sorted
// array of integers. The function should find the first pair
// where the sum is 0. Return an array that includes both
// values that sum to zero or undefined if a pair does not exist
 
// Time Complexity - O(N)
// Space Complexity - O(1)

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        console.log('left:', arr[left], 'right:', arr[right]);
        
        if(sum === 0) {
            console.log('sum:', sum);
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
        console.log('sum:', sum);
    }
}

sumZero([-4,-3,-2,-1,0,5,10]) // returns undefined
