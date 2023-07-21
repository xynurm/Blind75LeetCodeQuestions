function getSum(a, b) {
  while (b !== 0) {
    // Calculate sum without considering carry
    const sum = a ^ b;

    // Calculate carry that would result from adding a and b
    const carry = (a & b) << 1;

    // Update a to be the sum (without carry)
    a = sum;

    // Update b to be the carry (if there is a carry)
    b = carry;
  }

  return a;
}