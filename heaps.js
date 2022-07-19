/*---------Binary Heaps -------------------------
MaxBinaryHeap - parent nodes are always learger than child nodes
MinBinaryHeap - Parent nodes are always smaller than child nodes

- Just like Binary Trees, each nodes can have atmost two children
- the children has to be smaller than it's parent, doesnt matter right or left side

Heaps are used to implement Priority Queues and Grapgh Traversal
*/

class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    insert(element) {
        this.values.push(element)
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.values.length - 1
        const element = this.values[idx]
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2)
            let parent = this.values[parentIdx]
            if(element <= parent) break
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }

    extractMax() {
        const max = this.values[0]
        const end = this.values.pop()
        if(this.values.length > 0) {
        this.values[0] = end
        this.sinkDown()
    }
        return max
    }
    sinkDown() {
        let idx = 0
        const length = this.values.length
        const element = this.values[0]
        while(true) {
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            let leftChild, rightChild 
            let swap = null

            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]
                if(leftChild > element) {
                    swap = leftChildIdx
                }
            }
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if(
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx

                }
            }

            if(swap === null) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }
}

let heap = new MaxBinaryHeap()
heap.insert(55)
heap.insert(37)
heap.insert(18)


console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());

console.log(heap.values);


//Time Complexity
/*
Insertion - O(log n)
Removal - O(log n)
Search - O(n)
*/







