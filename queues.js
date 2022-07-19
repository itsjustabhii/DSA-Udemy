/*Queue - FIFO Data Structure */

// var q = []
// q.push("First")
// q.push("Second")

// console.log(q);

// q.pop()
// console.log(q);


class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(val) {          //add to the end
        var newNode = new Node(val)
        if(!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }

    dequeue(){          //remove from the beginning
        if(!this.first) return null
        var temp = this.first
        if(this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}

var q = new Queue()

q.enqueue("First")
q.enqueue("Second")
console.log(q);


/*Time Complexity
Insertion - O(1)
Removal - O(1)
Searching - O(n)
Access - O(n)
*/


























