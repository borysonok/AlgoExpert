class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Avarage O(log(n))-time | O(1)-space
  // Worst O(n)-time | O(1)-space
  insert(value) {
    let current = this;
    while (true) {
      if (value < current.value) {
        // go left...
        if (current.left === null) {
          current.left = new BST(value);
          break;
        } else {
          current = current.left;
        }
      } else {
        // go right...
        if (current.right === null) {
          current.right = new BST(value);
          break;
        } else {
          current = current.right;
        }
      }
    }
    return this;
  }

  // Avarage O(log(n))-time | O(1)-space
  // Worst O(n)-time | O(1)-space
  contains(value) {
    let current = this;
    while (current) {
      if (value === current.value) {
        return true;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(value) {
    return this;
  }
}
