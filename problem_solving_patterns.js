//Pattern 1 - Frequency Counter Problem
//Used to compare two values
//Time Complexity - O(n)


function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false
    }
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false
        }
        console.log(arr2);
        arr2.splice(correctIndex, 1)
    }
    return true
}
same([1,2,3,2], [9,1,4,4])


/*----------Pattern 2 ------------------------ */
//Anagrams - Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another such as cinema formed from iceman

//anagram using an array
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false

    // sort s and t
    s = s.split('').sort()
    t = t.split('').sort()

    for(let i = 0; i < s.length; i++) {
        if(s[i] !== t[i]) return false
    }
    return true

}

/*------------------Pattern 3 --------- Multiple Pointers ---------- */
/* Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condiiton
Very efficient for solving problems with minimal space complexity as well
*/

/*Q. Write a function called sumZero which accepts a sorted array of integrers. 
The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
*/

function sumZero(arr) {
    let left = 0
    let right = arr.length - 1
    while(left < right) {
        let sum = arr[left] + arr[right]
        if(sum === 0) {
            return [arr[left], arr[right]]
        } else if(sum > 0) {
            right--
        } else {
            left++
        }
    }
}

sumZero([-4,-3,-2,1,0,1,2,3,4,5])
console.log(sumZero);




/*------Pattern 3 ---------- Count Unique Values----------- */
/*Implement a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted 
*/
//Time Complexity - O(n)

function countUniqueValues(arr) {
    var i = 0
    for(var j = 1; j < arr.length; j++) {   //j increments automatically unlike i
        if(arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }        
    }
    return i + 1
}

console.log(countUniqueValues([1,1,2,3,3,4,5,6,6,7]))


/*------Pattern 4-----------Sliding Window------------- */
/*
This involves creating a window which can either be an array or number from one position to another

Very useful for keeping track of a subset of data in an array/string
*/

/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array
Input -> [1,2,5,2,8,1,5]  Output -> 17  for 4 digit interval
*/
//Time Complexity - O(n)

function maxSubarraySum(arr, num) {
    let maxSum = 0
    let tempSum = 0
    if(arr.length < num) return null
    for(let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = math.max(maxSum, tempSum)
    }
    return maxSum
}


/*---------------Pattern-5-------------- Divide and Conquer--------- */
// Involves dividing a data set into smaller chunks and then repeating a process with a subset of data
//This tremendously decreases time complexity

/*
Q. Given a sorted array of integers, write a fucntion called search, that accepts a value and returns the index where the value passed to the function is located. 
If the value is not found, return -1
*/
//Time Complexity Log(n)  -->> Binary Search

function search(array, val) {
    let min = 0
    let max = array.length-1

    while(min <= max) {
        let middle = Math.floor((min + max) / 2)
        let currentElement = array[middle]

        if(array[middle] < val) {
            min = middle + 1
        }
        else if(array[middle] > val) {
            max = middle - 1
        } 
        else {
            return middle
        }
    }
    return -1
}



















