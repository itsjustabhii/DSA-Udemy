//Prog to add sum of 1 to n numbers
function addUpTo(n) {
    let total = 0
    for(let i = 1; i <= n; i++) {
        total += i
    }
    return total
}

console.log(addUpTo(5))

//What is an Algorithm - a process or set of steps to accomplish a certain task