class SLL {
    constructor() {
        this.head = null;
    }

    // console log the data of every node in the current list
    read() {
        var current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        // start at the head
        var runner = this.head;
        // while we have a runner
        while (runner) {
            // return true if data === value
            if (runner.data === value) {
                return true;
            }
            // otherwise advance the runner
            runner = runner.next;
        }
        return false;
    }

    // function calls itself, base case that ends the recrusive call
    // change the inputs every time you call the function

    recursiveContains(val, current) {
        // if you didn't pass current, current should be the head
        if (current === undefined) current = this.head;

        // if current is null, return false up the call stack
        if (current === null) {
            return false;
        }

        // if runner.data === value, return true up the call stack
        if (current.data === val) return true;

        // otherwise return the result of contains for current.next
        return this.recursiveContains(val, current.next);
    }

    // myFirstSLL.recursiveContains(13);

 
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var myNewSLL = new SLL();
myNewSLL.addToFront(5);
myNewSLL.addToFront(22);
myNewSLL.addToFront(17);


var current = myNewSLL.head;

while (current) {
    console.log(current.data);
    current = current.next;

    if (current.next === null) {
        console.log("this is the last node");
    }
}