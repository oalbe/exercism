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
    	console.log('root === null');
        this._root = node;
    } else {
        current = this._root;

        while(true) {

            //if the new value is less than this node's value, go left
            if (data < current.data) {
            	console.log('data < current.data');
                //if there's no left, then the new node belongs there
                if (current.left === null) {
                	console.log('current.left === null');
                    current.left = node;
                    console.log('current.left.data = ' + current.left.data);
                    break;
                } else {
                	console.log('else');
                    current = current.left;
                }

            //if the new value is greater than this node's value, go right
            } else if (data > current.data) {
            	console.log('data > current.data');

                //if there's no right, then the new node belongs there
                if (current.right === null) {
                    current.right = node;
                    break;
                } else {
                    current = current.right;
                }       

            //if the new value is equal to the current one, just ignore
            } else {
            	console.log('last else');
                break;
            }
        }
    }
    
    // console.log(this.toArray());
    // console.log(this._root.left);
    this.left = this._root.left;
    this.right = this._root.right;
};

BinarySearchTree.prototype.inOrder = function(self, node, process) {
    if (node){

        //traverse the left subtree
        if (node.left !== null) {
            this.inOrder(node.left);
        }            

        //call the process method on this node
        process.call(self, node);

        //traverse the right subtree
        if (node.right !== null) {
            this.inOrder(node.right);
        }
    }
};

BinarySearchTree.prototype.traverse = function(process) {
    //start with the root
    this.inOrder(this, this._root, process);
};

BinarySearchTree.prototype.toArray = function() {
    var result = [];

    this.traverse(function(node) {
        result.push(node.data);
    });

    return result;
};

BinarySearchTree.prototype._inOrder = function(self, node, process) {
    if (node){

        //traverse the left subtree
        if (node.left !== null) {
            this.inOrder(node.left);
        }            

        //call the process method on this node
        process.call(self, node.data);

        //traverse the right subtree
        if (node.right !== null) {
            this.inOrder(node.right);
        }
    }
};

BinarySearchTree.prototype.each = function(callback) {
	this._inOrder(this, this._root, callback);
};

module.exports = BinarySearchTree;