
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    newNode(element) {
        return {
            element,
            next: null,
            prev: null
        };
    }

    insert(position, element) {
        let current = this.head;
        let node = this.newNode(element);

        if (position < 0 || position > this.length) return false;

        if (position === 0) {
            if (this.head) {
                current.prev = node;
                node.next = current;
                this.head = node;
            } else {
                this.head = node;
                this.tail = node;
            }
        } else if (position === this.length) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            current = this.head.next;
            let previous = this.head;
            let currentPosition = 1;

            while (currentPosition < position) {
                previous = current;
                current = current.next;
                currentPosition++;
            }

            previous.next = node;
            node.prev = previous;
            node.next = current;
            current.prev = node;
        }

        this.length++;
        return true;
    }

    removeAt(position) {
        if (position < 0 || position > this.length) return null;
        let current = this.head.next;
        let previous = this.head;
        let currentPosition = 1;

        if (position === 0) {
            if (!this.head) return null;

            this.head = this.head.next;
            this.head.prev = null;
        } else if (position === this.length) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            while (currentPosition < position) {
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
            current.next.prev = previous;
        }

        this.length--;

        return current.element;
    }

    toString() {
        let current = this.head;
        let output = '';

        while (current) {
            output += current.element.toString();
            current = current.next;
        }

        console.log(output);
    }
}

let link = new DoublyLinkedList();

link.insert(0, 1);
link.insert(0, 2);
link.insert(2, 3);
link.insert(1, 4);
// link.removeAt(0);
// link.removeAt(4);
link.removeAt(1);

link.toString();
