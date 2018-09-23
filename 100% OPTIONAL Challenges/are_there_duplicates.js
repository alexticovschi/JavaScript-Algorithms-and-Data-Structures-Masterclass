/*** Coding Exercise 4: Frequency Counter / Multiple Pointers - areThereDuplicates ***/

// Implement a function called, areThereDuplicates which accepts a 
// variable number of arguments, and checks whether there are any
// duplicates among the arguments passed in. You can solve this using 
// the frequency counter pattern OR the multiple pointers pattern.

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // false

// Restrictions: 
//     Time - O(N)
//     Space - O(N)
// Bonus:
//     Time - O(N LOG N)  
//     Space - O(1)


// Using Frequency Counter Pattern
function areThereDuplicates(...args) {
    let obj = {};

    for (let val of args) {
        obj[val] = (obj[val] || 0) + 1;
    }
    
    for(let key in obj) {
        if(obj[key] !== 1) return true;
    }
    
    return false;
}


// Using Multiple Pointers Pattern
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a - b);
    let start = 0;
    let next = 1;

    while(next < args.length) {
        if(args[start] === args[next]) {
            return true;
        }
        start++;
        next++
    }

    return false;
}

// Using Set
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}