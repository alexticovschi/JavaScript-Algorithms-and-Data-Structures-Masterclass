function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    // if the first num of the array is odd, add it to newArr
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    // assign newArray to equal the concatenation of all the rest of 
    // the results provided by collectOddValues(arr.slice(1))
    newArr = newArr.concat(collectOddValues(arr.slice(1)));

    console.log('arr:',arr);

    return newArr;
}

collectOddValues([1,2,4,65,8,9,4,25,17,76]);