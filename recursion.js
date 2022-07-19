/*Recursion - a process that calls itself */
//Two Parts of Recursive Function - Base case and Different Input

//Factorial Iteratively

// function factorial(num) {
//     let total = 1
//     for(let i = num; i > 0; i--) {
//         total *= i
//     }
//     return total
// }

// console.log(factorial(3))


//Factorial Recursive

function factorial(num) {
    if(num === 1) return 1          //base case
    return num * factorial(num - 1)
}
console.log(factorial(5))


//Helper Method Recursion
function collectOddsValues(arr) {
    let result = []

    function helper(helperInput) {
        if(helperInput.length === 0) {
            return
        }

        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)

    return result

}

console.log(collectOddsValues([1,2,3,4,5,6,7,8,9]))

//Pure Recursion Tips
/*
- For arrays, use methods like slice, the spread operator and concat that copies of arrays so you dont mutate them
- strings are immutable so you will need to use methods like slice, substr
- To make copies of objects use Object.assign or the spread operator
*/

























