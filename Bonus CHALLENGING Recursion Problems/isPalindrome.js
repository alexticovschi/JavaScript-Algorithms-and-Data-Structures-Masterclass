// Write a recursive function called isPalindrome which returns true if the
// string passed to it is a palindrome. Otherwise it returns false

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    const reverse = (s) => s.length === 0 ? '' : reverse(s.slice(1)) + s[0];
    let reversed = reverse(str);
    return reversed === str;
}

isPalindrome('tacocat');