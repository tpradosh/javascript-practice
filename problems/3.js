/**
 * Problem 3: Filtering
 * 
 * Given an array of numbers, only return the ones that are divisible by 3.
 * Use the .filter function.
 * 
 * @example [1, 2, 3, 4, 5, 6, 7, 8, 9] -> [3, 6, 9]
 */
function problem(numbers) {
    let rv = []
    for(i in numbers){
        if (numbers[i] % 3 ==0)
            rv.push(numbers[i])
    }
    return rv;
}

const tests = [
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], [3, 6, 9]],
    [[3], [3]],
    [[], []],
]

module.exports = {problem, tests};