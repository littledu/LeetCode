function LinkList() {

    this.nodeList = null;
    this.head = null;
    this.length = 0;

    function newNode(element) {
        return {
            element: element,
            next: null
        }
    }

    this.append = function (element) {
        var node = newNode(element);
        if (!this.head) {
            this.head = node;
        } else {
            var current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.length++;
    }

    this.insert = function (position, element) {
        var node = newNode(element);

        if (position < 0 || position > this.length) return false;

        var currentPosition = 0;
        var current = this.head;
        var previous = null;

        if (position === 0) {
            node.next = current;
            this.head = node;
        } else {
            while (currentPosition < position) {
                previous = current;
                current = current.next;
                currentPosition++;
            }

            previous.next = node;
            node.next = current;
        }

        this.length++;

        return true;
    }

    this.removeAt = function (position) {
        if (position < 0 || position > this.length) return null;

        var current = this.head;
        var currentPosition = 0;
        var previous = null;

        if (position === 0) {
            this.head = current.next;
        } else {
            while (currentPosition < position) {
                previous = current;
                current = current.next;
                currentPosition++;
            }

            previous.next = current.next;
        }

        this.length--;

        return current.element;
    }

    this.remove = function (element) {
        var index = this.indexOf(element);

        return this.removeAt(index);
    }

    this.isEmpty = function () {
        return !this.length;
    }

    this.size = function () {
        return this.length;
    }

    this.indexOf = function (element) {
        var current = this.head;
        var position = 0;

        while (current && current.element !== element) {
            current = current.next;
            position++;
        }

        if (current) {
            return position;
        } else {
            return -1;
        }
    }

    this.getHead = function () {
        return this.head;
    }

    this.toString = function () {
        var current = this.head;
        var output = this.head ? this.head.element.toString() : '';

        while ((current = current.next)) {
            output += current.element.toString()
        }

        console.log(output);
    }
}

let link = new LinkList();

console.log(link.isEmpty())
link.append(3);
link.append(5);
link.insert(2, 4);
//link.removeAt(2);
//console.log(link.indexOf(8))
link.remove(5);

link.toString();

console.log(link.isEmpty())
console.log(link.size())
console.log(link.getHead())
