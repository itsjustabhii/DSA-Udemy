class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
    insert(value) {
        var newNode = new Node(value)
        if(this.root === null) {
            this.root = newNode
            return this
        } else {
            var current = this.root
            while(true) {
                if(value === current.value) return undefined
                if(value < current.value) {
                    if(current.left === null) {
                        current.left = newNode
                        return this
                    }
                        current = current.left
                    
                } else{
                    if(current.right === null) {
                        current.right = newNode
                        return this
                    } 
                        current = current.right 
                    
                }
            }
        }
    }
    find(value) {
        if(this.root === null) return false
        var current = this.root,
            found = false
        while(current && !found) {
            if(value < current.value) {
                current = current.left
            } else if(value > current.value) {
                current = current.right
            } else {
                return true
            }
        }
        return false
    }
}


/*--------Time Complexity------------
Insertion - O(log n)
Searching - O(log n)
*/
