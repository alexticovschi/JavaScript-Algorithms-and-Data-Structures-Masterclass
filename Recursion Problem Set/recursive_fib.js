// Write a recursive function called fib which accepts a number and returns the
// nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is
// the sequence of whole numbers 1,1,2,3,5,8, ... which starts with 1 and 1, and
// where every number thereafter is equal to the sum of the previous two numbers


// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// function fib(num){
//     var i;
//     var fib = [0,1]; // Initialize array!
    
    
//     for (i = 2; i <= num; i++) {
//         // Next fibonacci number = previous + one before previous
//         fib[i] = fib[i - 2] + fib[i - 1];
//     }
//     return fib[fib.length-1];
// }

function fib(num){
    return num <= 2 ? 1 : fib(num - 2) + fib(num - 1);
}
