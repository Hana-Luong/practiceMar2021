class SLL {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        if (this.head === null) {
            return true;
        }
        return false;
    }
    // the node can have data inside.
    addToFront(node) {
        node.next = this.head;
        this.head = node;
    }
    //just data, no node, create the node first
    addDataToFront(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
    }

/*     doStuff() {
        // this.head
        if (this.head !== null) {
            this.head.next;//???
        }
    } */
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var node = new Node(10);
var mySLL = new SLL();

mySLL.isEmpty();
mySLL.addToFront(new Node(10));
mySLL.addDataToFront(10);