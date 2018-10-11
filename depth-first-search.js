// Recursive solution only.
// Time complexity: O(v + e): v-number of nodes in a tree, e-number of children of each node.
// Space complexity: O(v)

class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      // Write your code here.
          array.push(this.name);
          for(let child of this.children){
              child.depthFirstSearch(array);
          }
          return array;
    }
  }
  