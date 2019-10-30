/* 
All Data Points are called nodes
Nodes with branches leading to other nodes are called parents
Leaf nodes at the end of the tree that have no children

Binary tree can have only two branches for every node
Each left side is less than the parent
Each right side is higher than the parent 


*/

// Represents each node in the tree
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
    // get refernce
    const node = this.root;
    if (node === null) {
      // if it is the first node, make that the root node
      this.root = new Node(data);
      return;
    } else {
      //if not the first node, create recursive function to see where to place
      const searchTree = function(node) {
        // if the data we pass in is less than node.data
        if (data < node.data) {
          // put the node on the left side of the tee
          if (node.left === null) {
            // if it null, assing node.left to the new node
            node.left = new Node(data);
            return;
            // if node.left is not null, rt searchtree.left
            // this is where recursive nature comes in
          } else if (node.left !== null) {
            // run the searchtree function again to see where to put the node
            return searchTree(node.left);
          }
          // if the data we pass in is higher than node.data
        } else if (data > node.data) {
          // if there is no node in node.right
          if (node.right === null) {
            // assign node.right to the new node
            node.right = new Node(data);
            return;
            // else if node.right is not null, keep searching, return searchtree.right
            // this is where recursive nature comes in
          } else if (node.right !== null) {
            // run the searchtree function again to see where to put the node
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
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
    
    if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
    return false;
  }
} 
  remove(data) {
    const removeNode = function(node, data) {
      // Check if we have an empty tree
      if (node == null) {
        return null;
      }
      // can we find the data in the tree
      // if we find
      if (data == node.data) {
        // There are 3 options

        // Option 1 node has no children
        if (node.left == null && node.right == null) {
          return null;
        }
        // Option 2 node has no left child
        if (node.left == null) {
          return node.right;
        }
        // Option 3 node has no right child
        if (node.right == null) {
          return node.left;
        }

        // node has two children
        // we have to find the appropriate lower tree node to replace
        // First we're going to go to the node to the right
        var tempNode = node.right;
        while (tempNode.left !== null) {
          // then we're going to go to the left...
          tempNode = tempNode.left;
        }
        // ...till we find a node that is less than the originating node's right child
        // now node.data is set to be that found node that matches the requirement
        node.data = tempNode.data;
        // now we remove and and replace the orignal node with the new one we found
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
}

const bst = new BST();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.remove(4);
console.log(bst.findMin());
console.log(bst.findMax());
bst.remove(7);
console.log(bst.findMax());
console.log(bst.isPresent(4));
