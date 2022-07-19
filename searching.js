// Linear Search


function linerSearch(arr, val) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i
        }
    }
    return -1

}

console.log(linerSearch([34,56,1,2], 1))
/*
Time Complexity 
Best Case --> O(1)
Worst Case --> O(n)
Avg Case --> O(n)
\*/


/*----------Binary Search----------- */
/*
- Binary Search is a much faster form of search
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
- Binary search only works on SORTED ARRAYS
*/

/*Steps for binary Search 
- function which accepts a sorted array and a value
- create a left pointer at the start of the array, and a right pointer at the end of the array
- while the left pointer comes before the right pointer
    - create a pointer in the middle
    - if you find the value you want, return the index
    - if the value is too small, move the left pointer up
    - if the value is too large, move the right pointer down
- If you never find the value, return -1
*/

function binarySearch(arr, element) {
    let start = 0
    let end = arr.length-1
    let middle = Math.floor((start + end) / 2)      //Math.floor to remove decimal point
    while(arr[middle] !== element && start <= end) {
        if(element < arr[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2)
    }
    return arr[middle] === element ? middle : -1    //Ternary Operator
}

console.log(binarySearch([2,5,6,9,13,15,28], 15))
/*Time Complexity
Worst and Avg Case -->> O(log n)
Best Case -->> O(1)
*/

/*----------Naive String Search--------- */
function naiveSearch(long, short) {
    var count = 0
        for(var i = 0; i < long.length; i++) {
            for(var j = 0; j < short.length; j++) {
                if(short[j] !== long[i+j]) {
                    break
                }
                if(j === short.length - 1) {
                    count++
                }
            }
        }
        return count
}

console.log(naiveSearch("Lorie Loled", "lol"))











