/*Dynamic Programming - A method for solving a complex problem by breaking it down into a collection of simpler subproblems */


/*----------Overlapping Subproblem--------------------

*/

/*----------Optimal Substructure-----------
A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems


*/

//Fibonacci Recursive(Inefficient way)
// function fib(n) {
//     if(n <= 2) return 1
//     return fib(n-1) + fib(n-2)
// }

// console.log(fib(30));


//Time Complexity
// O(2^N)

/*Memoization - Storing the results of expensive function calls and returning the cached result when the same inputs occur again */

//Efficient Way for Fibonacci
function fib(n , memo=[]) {
    if(memo[n] !== undefined) return memo[n]
    if(n <= 2) return 1
    var res = fib(n-1, memo) + fib(n-2, memo)
    memo[n] = res
    return res
 }

 console.log(fib(50));

/*Time Complexity
    O(N)
 */

    //Tabulation - Storing the result of a previous result in a table.










