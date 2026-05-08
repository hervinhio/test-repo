function fibonacci(n) {
  if (n < 0) throw new Error('Input must be a non-negative integer');
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

function factorial(n) {
  if (n < 0) throw new Error('Input must be a non-negative integer');
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

module.exports = { fibonacci, factorial };
