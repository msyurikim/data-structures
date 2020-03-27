var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};

BinarySearchTree.prototype.insert = function(value) {
  if (typeof value !== 'number') {
    return;
  }
  if (this.value === value) {
    return;
  } else if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (value < this.value) {
    if (this.left !== null) {
      return this.left.contains(value);
    } else {
      return false;
    }
  } else if (value > this.value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }

};

BinarySearchTree.prototype.depthFirstLog = function(callBack) {
  callBack(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callBack);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callBack);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

 insert: O(log n) if the tree is balanced, but O(n) in the worst case scenario of a one branch tree
 contains: O(log n) if the tree is balanced, but O(n) in the worst case scenario of a one branch tree
 depthFirstLog: O(n)

 */
