/*** Selection Sort ***/ 

// PSEUDOCODE
// * Store the first element as the smallest value you've seen so far.
// * Compare this item to the next item in the array until you find a smaller number.
// * If a smaller number is found, designate that smaller number to be
//   the new "minimum" and continue until the end of the array.
// * If the "minimum" is not the value(index) you initially began with, 
//   swap the two values
// * Repeat this with the next element until the array is sorted.

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
		if (i !== min) {
			// console.log(arr[i], arr[min]);
			// console.log(arr); 
        	[arr[i], arr[min]] = [arr[min], arr[i]];
		}
    }

    return arr;
}


selectionSort([0,2,34,22,10,19,17])