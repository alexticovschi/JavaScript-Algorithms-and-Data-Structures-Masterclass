/*** Bubble Sort Optimized ***/ 

// Bubble Sort Pseudocode 
//  * Start looping from a variable called i the end of the array towards the beginning 
//  * Start an inner loop with a variable called j from the beginning until i - 1 
//  * If arr[j] is greater than arr[j+1], swap those two values
//  * Return the array

function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
			console.log(arr, arr[j], arr[j+1]);
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
		console.log("ONE PASS COMPLETE!");
    }

    return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);