/*What is a Stack - LIFO Data Structure
- the last element added to the stack will be the first element removed from the stack
- used to handle function invocations for operations like uno/redo and for routing
*/

// var stack = []
// stack.push("Google")
// stack.push("Instagram")
// stack.push("YouTube")

// console.log(stack);

// stack.pop()
// console.log(stack);

//Other way of adding in a array using Built-in method
//To add to the beginning of the array, we use unshift

// stack.unshift("Create new file")
// stack.unshift("Resized file")
// stack.unshift("Cloned out file")
// console.log(stack);

// //shift to remove from the beginning
// stack.shift()
// console.log(stack);


class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    push(val) {
        var newNode = new Node(val)
        if(!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            var temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }
    pop() {
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

var stack = new Stack()
stack.push("First")
stack.push("Second")

console.log(stack);

//Time Complexity
/* Only Insertion and Removal are important
Insertion - O(1)
Removal - O(1)
Searching - O(n)
Access - O(n)
*/





















