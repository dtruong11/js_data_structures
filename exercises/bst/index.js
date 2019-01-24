// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(val) {
    this.val = val
    this.left = this.right = null 
  }

  insert(val) {
    if(!this) return new Node(val)
    if (this.val > val) {
      this.left = this.insert(this.left, val)
    } else if (this.val < val) {
      this.right = this.insert(this.right, val)
    }
    return this 
  }

  contains(data) {
    if (this.val === data) return this
    if (this.val > data) return this.contains(node.left, data)
    else if (this.val < data) return this.contains(node.right, data)
    else return null 
  }
}

module.exports = Node;
