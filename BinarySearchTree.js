class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * 插入的递归方法
     * @param {*} node 
     * @param {*} newNode 
     */
    _insertNode(node, newNode) {
        if (node.key > newNode.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    /**
     * 向树中插入新键
     * @param {*} key 
     */
    insert(key) {
        let newNode = new Node(key);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _searchNode(node, key) {
        if (node === null) return false;
        if (node.key > key) {
            return this._searchNode(node.left, key);
        } else if (node.key < key) {
            return this._searchNode(node.right, key);
        } else {
            return true;
        }
    }

    /**
     * 在树中查找键，节点存在则返回true，不存在则返回false
     * @param {*} key 
     */
    search(key) {
        if (this.root) {
            return this._searchNode(this.root, key);
        } else {
            return false;
        }
    }

    /**
     * 中序的递归方法
     * @param {*} node
     * @param {*} callback
     */
    _inOrderTraverse(node, callback) {
        if (node) {
            this._inOrderTraverse(node.left, callback);
            callback(node.key);
            this._inOrderTraverse(node.right, callback);
        }
    }

    /**
     * 中序遍历
     * 按节点key从小到大遍历
     */
    inOrderTraverse(callback) {
        this._inOrderTraverse(this.root, function (key) { console.log(key) });
    }

    _preOrderTraverse(node, callback) {
        if (node) {
            callback(node.key);
            node.left && this._preOrderTraverse(node.left, callback);
            node.right && this._preOrderTraverse(node.right, callback);
        }
    }

    /**
     * 先序遍历
     * 先输出节点，再按节点从左到右遍历
     */
    preOrderTraverse() {
        this._preOrderTraverse(this.root, function (key) { console.log(key) })
    }

    _postOrderTraverse(node, callback) {
        if (node) {
            node.left && this._postOrderTraverse(node.left, callback);
            node.right && this._postOrderTraverse(node.right, callback);
            callback(node.key)
        }
    }

    /**
     * 后序遍历
     * 从左往右遍历子节点，最后再输出父节点
     */
    postOrderTraverse() {
        this._postOrderTraverse(this.root, function (key) { console.log(key) })
    }

    /**
     * 返回树中最小的值
     */
    min() {
        if (this.root) {
            let node = this.root;
            while (node && node.left) {
                node = node.left;
            }
            return node.key;
        } else {
            return null;
        }
    }

    /**
     * 返回树中最大的值
     */
    max() {
        if (this.root) {
            let node = this.root;
            while (node && node.right) {
                node = node.right;
            }
            return node.key;
        } else {
            return null;
        }
    }

    _findMinNode(node) {
        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    }

    _removeNode(node, key) {
        if (node === null) return null;

        if (key < node.key) {
            node.left = this._removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = this._removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            let aux = this._findMinNode(node.right);
            node.key = aux.key;
            node.right = this._removeNode(node.right, aux.key);
            return node;
        }
    }

    /**
     * 从树中移除某个键
     */
    remove(key) {
        this.root = this._removeNode(this.root, key);
    }
}

let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
// tree.inOrderTraverse();
// tree.preOrderTraverse();
// tree.postOrderTraverse();
// console.log(tree.min());
// console.log(tree.max())
// console.log(tree.search(21))
tree.remove(15);