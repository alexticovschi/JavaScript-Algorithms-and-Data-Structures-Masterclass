/***    Frequency Counter    ***/ 

// Write a function called sameFrequency
// Given two positive integers, find out if the two
// numbers have the same frequency of digits.

// Your solution MUST have the following complexities:
// Time: O(N)

//  sameFrequency(182, 281) // true
//  sameFrequency(34, 14) // false
//  sameFrequency(3589578, 5879385) // true
//  sameFrequency(22, 222) // false

function sameFrequency(num1, num2){
    num1 = num1.toString();
    num2 = num2.toString();
    
    if(num1.length !== num2.length) return false;

    let freqCount1 = {},
        freqCount2 = {};
    
    for(let val of num1) {
        freqCount1[val] = (freqCount1[val] || 0) + 1;
    }
    for(let val of num2) {
        freqCount2[val] = (freqCount2[val] || 0) + 1;
    }
    
    for(let key in freqCount1) {
        if(freqCount1[key] !== freqCount2[key]) {
            return false;
        }
    }

    return true;
}