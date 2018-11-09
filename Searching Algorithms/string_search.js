/*** String Search ***/ 

// Pseudocode
// * Loop over the longer string
// * Loop over the shorter string
// * If the characters don't match, break out of the inner loop
// * If the characters do match, keep going
// * If you complete the inner loop and find a match, increment the count of matches
// * Return the count

function stringSearch(s1,s2) {
    count = 0;
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            // console.log(s2[j], s1[i+j])
            if (s1[i+j] !== s2[j]) {
                // console.log('BREAK!');
                break;
            }
            if (j === s2.length - 1) {
                // console.log('FOUND ONE!');
                count++;
                continue;
            }
        }
    }
    return count < 2 ? `Found ${count} match` : `Found ${count} matches`;
}

stringSearch('lorie loled', 'lol');