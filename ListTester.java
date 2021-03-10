package SLLfolder; 

import java.io.*; //not sure need it or not

public class ListTester {
    public static void main(String[] args) {
        System.out.println("Hello SLL");
        SinglyLinkedList sll = new SinglyLinkedList();
        boolean empty = sll.isEmpty();
        System.out.println("Is empty? " + empty);
        sll.addToFront(new SLLNode(10));
        sll.addDataToFront(10);
        sll.addToBack(3);
        sll.addToBack(4);
        sll.addToBack(10);
        sll.addToBack(5);
        sll.addToBack(15);
        sll.addToBack(2);
        sll.printList(); 
    }
}
