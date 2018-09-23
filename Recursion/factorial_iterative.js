function factorial(num) {
    let total = 1;

    for (let  i = num; i > 0; num--) {
        total *= num;
    }

    return total;
}