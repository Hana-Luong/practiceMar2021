package SLLfolder;

public class SinglyLinkedList {
    private SLLNode head;
    public SinglyLinkedList() {
        this.head = null;
    }

// Check if SLL is empty or not
    public boolean isEmpty() {
        if (this.head == null) {
            return true;
        }
        return false;
    }
// the node has data inside
    public void addToFront(SLLNode node) {
        node.next = this.head;
        this.head = node;
    }
//add data to front
    public void addDataToFront(int value){
        SLLNode newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
    }
//add data to the list back
    public void addToBack(int value) {
        SLLNode newNode = new SLLNode(value);
        if(head == null) {
            head = newNode;
        } else {
            SLLNode runner = head;
            while(runner.next != null) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
    } 
// Method to print the LinkedList. 
    public void printList() 
    { 
        SLLNode currNode = this.head; 
    
        System.out.print("LinkedList: "); 
    
        // Traverse through the LinkedList 
        while (currNode != null) { 
            // Print the data at current node 
            System.out.print(currNode.value + " "); 
          // Go to next node 
            currNode = currNode.next; 
        } 
    }    
}

