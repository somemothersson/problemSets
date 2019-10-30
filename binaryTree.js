class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  // Create the root node, teh top of the tree
  constructor() {
    this.root = null;
  }
  // Add data to the tree
  add(data) {
    const node = this.root;
    if (node === null) {
      // if it is the first node, make that the root node
      this.root = new Node(data);
      return;
    } else {
      //if not create recursive function
      const searchTree = function(node) {
        // if the data we pass in is less than node.data
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  findMin() {
      let current = this.root
  }
}
