const fibonacci = function (n) {
    // Convert string input to integer
    if (typeof n === 'string') {
        n = parseInt(n, 10); 
    }

    // Check for negative input
    if (n < 0) {
        return "OOPS";
    }

    // Initialize the first two Fibonacci numbers
    let a = 1;
    let b = 1;

    // Handle special cases
    if (n === 0) {
        return 0;
    }
    if (n === 1 || n === 2) {
        return 1;
    }

    // Compute the nth Fibonacci number
    for (let i = 3; i <= n; i++) {
        let temp = a;
        a = b;
        b = temp + b;
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
