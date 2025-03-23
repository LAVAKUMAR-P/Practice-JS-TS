// Given a list of numbers and a target average, determine the next number needed so that the average of the list (including the new number) reaches the target.

// Function Requirements
// Input
//  • numbers (list of integers/floats): Existing numbers
//  • new_avg (integer/float): Target average

// Output:
//  • Return the required next number, rounded up to the nearest integer.
//  • If the required number is ≤ 0, raise an error or return it explicitly.

// Examples

// next_number([14, 30, 5, 7, 9, 11, 15], 92)  # Output: 645
// next_number([14, 30, 5, 7, 9, 11, 15], 2)   # Output: Error or specific value


// sum array + X/(total num count + 1) = avg;
// avg * (total num count + 1 ) - sum array = X

const nextNumber = (arr = [], targetAvg = 1) =>{
    let sum = 0;
    arr.forEach(num => sum += num );
    let val = targetAvg * (arr.length + 1) - sum;
    return Math.ceil(val) > 0 ? Math.ceil(val) : 'Error or specific value'
}
console.log(nextNumber([14, 30, 5, 7, 9, 11, 15], 92))
console.log(nextNumber([14, 30, 5, 7, 9, 11, 15], 2))

