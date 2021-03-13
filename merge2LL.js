class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    addDataToFront(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
    }
    print() {
        var current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    getHead() {
        return this.head;
    }
}
 
var l1 = new SLL();
var l2 = new SLL();

l1.addDataToFront(6);
l1.addDataToFront(4);
l1.addDataToFront(2);
l1.print();

l2.addDataToFront(7);
l2.addDataToFront(5);
l2.addDataToFront(3);
l2.addDataToFront(1);
l2.print();

function mergedTwoSortedLists (l1, l2) {

    //let mergedLinkedListHead = { val : -1, next : null }; // create dummy node to get started
    let mergedSLL = new SLL(); // create dummy node to get started
    mergedSLL.addDataToFront(-1);
    mergedSLL.print();
    let runner = mergedSLL.getHead();

    while(l1 && l2) {
        if(l1.data > l2.data) {
            runner.next = l2;
            l2 = l2.next;
        } else {
            runner.next = l1;
            l1 = l1.next;
        }
        //console.log(runner.data);
        runner = runner.next;
    }
    runner.next = l1 || l2;
    return mergedSLL; 
}
console.log("The merged linked list is: ")
mergedTwoSortedLists(l1.getHead(),l2.getHead()).print();
