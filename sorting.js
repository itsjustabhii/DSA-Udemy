/*Sorting - is the process of rearranging the items in a collection so that the items are in some kind of order */

/*-------Bubble Sort---------- */
//A sorting algorithm where the largest values bubble up to the top!

function bubbleSort(arr) {
    var noSwaps
    for(var i = 0; i < arr.length; i++) {
        noSwaps = true
        for(var j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]) {
                //Swap
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            }
        }
        if(noSwaps) break
    }
    return arr
}

console.log(bubbleSort([37, 45, 29, 8]));

/*Time Complexity
Avg Case - O(n^2)  //because it uses two for loops
*/

/*---------Selection Sort----------- */
/*Similar to bubble sort, but instead of first placing large values into sorted position, 
it places small values into sorted position */

function selectionSort(arr) {
    const swap = (arr,idx1, idx2) => 
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])

    for(let i = 0; i < arr.length; i++) {
        let lowest = i
        for(let j = i+1; j < arr.length; j++) {    //i+1 because the smallest element points to index i
            if(arr[lowest] > arr[j] ) {
                lowest = j
            }
        }
        if(i !== lowest) swap(arr, i, lowest)
    }
    return arr
}

console.log(selectionSort([34,22,10,19,17]))

/*Time Complexity
O(n^2)
*/

/*-------------Insertion Sort------------------- */
/*Builds up the sort by gradually creating a larger left half which is always sorted */

function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        var currentVal = arr[i]
        for(var j = i - 1; j >= 0 && arr[j] > currentVal ; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }
    return arr
}

console.log(insertionSort([2,1,9,76,4]))

/*Time Complexity
Worst Case - O(n^2)  -->  Quadratic for unsorted arrays

*/
















