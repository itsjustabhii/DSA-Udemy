/*
What is a linked list - a Data structure tha contains a head, tail and length property
- consists of nodes and each node has a value and a pointer to another node or null
- There is no index
- Connected via nodes with a next pointer
- Random access is not allowed
- Piece of data - Val
- Reference to next node - Next
 */

class Node{
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    //pushing
    push(val) {
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if(!this.head) return undefined
        var current = this.head
        var newTail = current
        while(current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }
    shift(){
        if(!this.head) return undefined
        var currentHead = this.head
        this.head = currentHead.next
        this.length--
        if(this.length === 0) {
            this.tail = null
        }
        return currentHead
    }
    unshift(val) {
        var newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        
        this.length++
        return this
    }
}


var list = new SinglyLinkedList()
console.log(list.push("Hello"))
list.push("Goodbye")
list.push("!")
