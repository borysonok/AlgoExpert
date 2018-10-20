class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        let current = this;
        while (true) {
            if (value < current.value) { // go left...
                if (current.left === null) {
                    current.left = new BST(value);
                    break;
                } else {
                    current = current.left;
                }
            } else { // go right...
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

    contains(value) {

    }

    remove(value) {

        return this;
    }
}