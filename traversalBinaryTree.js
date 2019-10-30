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

  isBalanced() {
    // if the max heigh
    return (this.findMinHeight() >= this.findMaxHeight() - 1);
  }
  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    // recursive section
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    // add 1 to he left
    if (left < right) {
      return left + 1;
    } else {
      // add 1 to the right
      return right + 1;
    }
  }
  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  inOrder() {
    // check if there is a search tree with values in it
    if (this.root == null) {
      return null
    } else {
      // if there is create a new array
      var result = new Array ()
      function traverseInOrder(node) {
        // short circuit evaluation - if the first thing is true, run the second command
        // if node.left is true, exisits, run the function on node.left
        node.left && traverseInOrder(node.left)
        // push the value(node.left) in that node to the array
        result.push(node.data)
        // if node.right exists, call the function on node.right
        node.right && traverseInOrder(node.right)
      }
      traverseInOrder(this.root)
      return result
    }
  }
  preOrder() {
    if (this.root == null) {
      return null
    } else {
      var result = new Array ()
      function traversePreOrder(node) {
        //Add the node to the array
        result.push(node.data)
        // if node.left exists call function on node.left
        node.left && traversePreOrder(node.left)
        // call function on node.right
        node.right && traversePreOrder(node.right)
      }
      traversePreOrder(this.root)
      return result
    }
  }
  postOrder() {
    if (this.root == null) {
      return null
    } else {
      var result = new Array ()
      function traversePostOrder(node) {
        // if node.left exists call the function on node.left and run in right
        // otherwise if node.left doesn't exist do no run on right
        node.left && traversePostOrder(node.left)
        // call the function on node.right
        node.right && traversePostOrder(node.right)
        // add the node to the arry
        result.push(node.data)
      }
      traversePostOrder(this.root)
      return result
    }
  }
  levelOrder() {
    // create array that we will eventually return
    let result = []
    // temporary queue array we're using that we will eventually put into result
    let Q = []
    // if this.root is not null - there is a search tree
    if (this.root != null) {
      // push the root node to q
      Q.push(this.root)
      // run this while the queue array has items in it
      while(Q.length > 0) {
        // takes off the first element in the array and returns that element
        let node = Q.shift()
        // add that element removed from q and add it to result
        result.push(node.data)
        // if there is an element on node.left
        if (node.left !=null) {
          // add it to q
          Q.push(node.left)
        }
        // if there is an element on node.right
        if (node.right !=null) {
          // push it to q
          Q.push(node.right)
        }
      }
      return result
    } else {
      return null
    }
  }
}

const bst = new BST();
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(22);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log('inOrder: ' + bst.inOrder());
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());
console.log('levelOrder: ' + bst.levelOrder());