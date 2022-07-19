/*-------Intermediate Sorting Algorithms--------- */
/*
- it's a combination of merging and sorting
- works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
*/

/*Steps
- In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
- Given two arrays which are sorted, this helper function should create a new array which is also sorted 
  and consists of all the elements in the two input arrays
- the function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.
*/

/*Pseudocode
- create an empty array, take a look at the smallest values in each input array
- while there are still values we havent looked at
    - if the value of first array is smaller than second array, push the value of first array into our result and move on to the next value in first array
    - if the value of first array is larger than second array, push the value of second array into our result and move on to the next value in second array
    - Once we exhaust one array, push in all remaining values from the other array
*/


function merge(arr1, arr2) {
    let results = []
    
    let i = 0       //i and j are pointers pointing to two ararys
    let j = 0

    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }
    while(i < arr1.length) {            //If one array gets exhausted, the remainder of other array gets pushed
        results.push(arr1[i])
        i++
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++
    }


    return results
}

// console.log(merge([1,10,50], [2,14,99,100]))

//For Unsorted Array
function mergeSort(arr) {
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)      //to find the middle point of the array
    let left = mergeSort(arr.slice(0, mid))        //to split the array into two pieces and calling mergeSort function again on the divided array
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(mergeSort([10,24,76,73]));

/*Time Complexity
Best Case - O(n log n)
Avg Case - O(n log n)
Worst Case - O(n log n)

Space Complexity - O(n)
*/



































