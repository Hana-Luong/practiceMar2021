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
      console.log("Print a list")
      var current = this.head;
      while (current) {
          //console.log(current.data + " ");
          process.stdout.write(current.data + " ");
          current = current.next;
      }
      console.log();
    }
    getHead() {
      return this.head;
    }
}

var mySLL = new SLL();
mySLL.addDataToFront(6);
mySLL.addDataToFront(4);
mySLL.addDataToFront(2);
mySLL.addDataToFront(1);
mySLL.addDataToFront(7);
mySLL.addDataToFront(5);
mySLL.addDataToFront(3);
mySLL.addDataToFront(9);
mySLL.addDataToFront(8);
mySLL.print();

function removeNthfromLast(mySLL,n){
  var runnerFast = mySLL.getHead();
  var runnerSlow = mySLL.getHead();
  var count = 0;
  var prev = mySLL.getHead(); 
  while (runnerFast) {    
    runnerFast = runnerFast.next;
    if (count > n) {
      prev = runnerSlow;
      runnerSlow = runnerSlow.next;
    }
    count++;
  }
  prev.next = runnerSlow.next;
  runnerSlow = null;
}
removeNthfromLast(mySLL,3);
mySLL.print();

