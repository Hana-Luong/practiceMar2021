class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SLL {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Return the total amount of nodes in the list
    size() {
        // if (this.head === null) { // Nothing to point to at start
        //     return 0;
        // }
        // var numNodes = 1;
        // var curNode = this.head; // Start with first node
        // while (curNode.next !== null) { // Loop while there are nodes to point to
        //     curNode = curNode.next; // Go to next node (if possible)
        //     numNodes++;
        // }
        // return numNodes;
        return this.size;
    }
    // Remove from front: remove and return the first node in the SLL

    /* removeFromFront() {
        if (this.isEmpty()) return null;
        
        var removed = this.head;
        this.head = this.head.next;
        removed.next = null;
        this.size--;
        return removed;
    } */
    
        // Remove from front: remove and return the first node in the SLL
        removeFromFront() {
            if(this.head == null){
                return "The list is empty"
            }
            let temp = this.head;
            this.head=this.head.next;
            temp.next = null;
            this.size--;
            return temp;
        }

    // bonus: add a node to the end of the list.
    addToBack(node) {
        // create a runner at the head
        let runner = this.head;

        // check if the runner is null, meaning our list is headless
        if (runner === null) {
            this.size++;
            this.head = node;
            return
        }

        // start while looping
        while (runner) {
            // check if the next node is null
            if (runner.next === null) {
                // if so, add here and return
                this.size++;
                runner.next = node;
                return
            }
            // if not, advance runner
            runner = runner.next;
        }
    }
/*     addToBack(node){
        if(this.head == null) {
            this.head = node
            this.size++;
            return;
        }
        let runner = this.head;
        while(runner) {
            if(runner.next == null) {
                runner.next = node;
                this.size++;
                return;
            }runner = runner.next;
        }
    } */
}
