class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    breadthFirstSearch(array) {
        let quiue = [this];
        while (quiue.length > 0) {
            let currentItem = quiue.shift();
            array.push(currentItem.name);
            for (let item of currentItem.children) {
                quiue.push(item);
            }
        }
        return array;
    }
}