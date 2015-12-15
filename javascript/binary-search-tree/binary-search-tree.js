// Code shamelessly taken somewhere on internet and adapted for the purpose.
// REVIEW: There is only one test not passing ('inserting same'), and only because this 
// implementation assumes that duplicate elements don't get added to the tree.
function Node(data) {
	this.data = data;
	this.left = null;
	this.right = null;
}

function BinarySearchTree(root) {
	this._root = new Node(root);
	this.data = this._root.data;
}

BinarySearchTree.prototype.insert = function(data) {
    //create a new item object, place data in
    var node = new Node(data);

    //used to traverse the structure
    var current;

    //special case: no items in the tree yet
    if (this._root === null) {
        this._root = node;
    } else {
        current = this._root;

        while(true) {
            //if the new value is less than this node's value, go left
            if (data < current.data) {
                //if there's no left, then the new node belongs there
                if (current.left === null) {
                    current.left = node;
                    break;
                } else {
                    current = current.left;
                }

            //if the new value is greater than this node's value, go right
            } else if (data > current.data) {
                //if there's no right, then the new node belongs there
                if (current.right === null) {
                    current.right = node;
                    break;
                } else {
                    current = current.right;
                }

            //if the new value is equal to the current one, just ignore
            } else {
                break;
            }
        }
    }

    this.left = this._root.left;
    this.right = this._root.right;
};

BinarySearchTree.prototype._inOrder = function(self, node, process) {
    if (node){
        //traverse the left subtree
        if (node.left !== null) {
            this._inOrder(self, node.left, process);
        }            

        //call the process method on this node
        process.call(self, node.data);

        //traverse the right subtree
        if (node.right !== null) {
            this._inOrder(self, node.right, process);
        }
    }
};

BinarySearchTree.prototype.each = function(callback) {
	this._inOrder(this, this._root, callback);
};

module.exports = BinarySearchTree;