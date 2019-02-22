function fib(n) {
    let a = 0, b = 1, aPrevious;
    while (n >= 0) {
        aPrevious = a;
        a = a += b;
        b = aPrevious;
        n--
    }
    return b;
}
// fib(20)

function fibonacci(num, memo) {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}
// fibonacci(20)

console.log(fib(20), fibonacci(30));