/**
 * @param {number[]} digits
 * @return {number[]}
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // Traverse from the last digit
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;      // Increase the digit
            return digits;    // No carry, return result
        }

        // If digit is 9, it becomes 0 and carry continues
        digits[i] = 0;
    }

    // If all digits were 9 (e.g., [9], [9,9])
    digits.unshift(1);

    return digits;
};