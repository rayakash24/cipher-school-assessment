var BSTIterator = function(root) {
    const arr = [];
    const inorder = (root) => {
        if(!root) return;
        
        inorder(root.left);
        arr.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    this.pointer = 0;
    this.arr = arr;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.arr[this.pointer++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.pointer < this.arr.length;
};