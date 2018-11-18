// Bubble Sort Pseudocode

//  * Start looping from a variable called i the end of the array towards the beginning 
//  * Start an inner loop with a variable called j from the beginning until i - 1 
//  * If arr[j] is greater than arr[j+1], swap those two values
//  * Return the array

function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
			console.log(arr, arr[j], arr[j+1]);
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
		console.log("ONE PASS COMPLETE!");
    }

    return arr;
}

bubbleSort([37, 45, 29, 8, 12, 88, -3]);