/*-------Intermediate Sorting Algorithms--------- */
/*READ IT FROM FREECODECAMP YOUTUBE */

/*Pivot Pseudocode
- will help to accept three arguments: an array, a start index and an end index
- Grab the pivot from the start of the array
- Store the current pivot index in a variable
- Loop through the array from the start until the end
*/

function quickSort(array) {
    if(array.length <= 1) {
        return array
    }

const pivot = array[array.length-1]
const leftArr = []
const rightArr = []
for(let i = 0; i < array.length - 1; i++) {
    if(array[i] < pivot) {
        leftArr.push(array[i])
    } else {
        rightArr.push(array[i])
    }
}


return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

const arr = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]

console.log(quickSort(arr))