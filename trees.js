/*--------------------Trees------------------- 
Binary Tree- Each node can have two children

Binary Search Tree 
- Every Parent node has at most two children
- Every node to the left of a parent node is always less than the parent
- Every node to the right of the parent is greater than the parent
*/

class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor() {
        this.root = null
    }
}

var tree = new BST()
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)

console.log(tree);









