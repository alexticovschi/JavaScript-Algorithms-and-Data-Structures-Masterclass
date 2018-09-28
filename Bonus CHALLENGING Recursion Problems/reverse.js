// Write a recursive function called reverse which accepts a string
// and returns a new string in reverse

function reverse(str){
    return str.length === 0 ? '' : reverse(str.slice(1)) + str[0];
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'