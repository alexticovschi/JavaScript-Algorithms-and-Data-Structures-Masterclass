/*** Frequency Counter: Anagram Challenge ***/ 

// Given two strings, write a function to determine if the
// second string is an anagram of the first. An anagram is
// a word, phrase, or name formed by rearranging the letters
// of another, such as 'cinema', formed from 'iceman'.

/*************************/
/***    MY SOLUTION    ***/ 
/*************************/
function validAnagram(str1, str2) {
    if(str1.length !== str2.length) return false;

    let freqCount1 = {},
        freqCount2 = {};
    
    for(let val of str1) {
        freqCount1[val] = (freqCount1[val] || 0) + 1;
    }
    for(let val of str2) {
        freqCount2[val] = (freqCount2[val] || 0) + 1;
    }
    
    for(let key in freqCount1) {
        if(freqCount1[key] !== freqCount2[key]) {
            return false;
        }
    }
    console.log('freqCount1:', freqCount1);
    console.log('freqCount2:', freqCount2);

    return true;
}

validAnagram('texttwisttime', 'timetwisttext');