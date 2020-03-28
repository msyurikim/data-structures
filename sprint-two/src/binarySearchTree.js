var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  obj.depth = 0;
  //obj.height = 0;
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
      this.left.depth = this.depth + 1;
      //this.height = this.left.height +1;
      return this.left;
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
      this.right.depth = this.depth + 1;
      return this.right;
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



BinarySearchTree.prototype.breadthFirstLog = function(callback) {

  var toBeSearched = [];
  toBeSearched.push(this);

  while (toBeSearched.length > 0) {
    var searched = toBeSearched.shift();
    callback(searched.value);
    if (searched.left !== null) {
      toBeSearched.push(searched.left);
    }
    if (searched.right !== null) {
      toBeSearched.push(searched.right);
    }
  }
};



BinarySearchTree.prototype.breadthFirstSearch = function(test) {

  var toBeSearched = [];
  toBeSearched.push(this);

  while (toBeSearched.length > 0) {
    var searched = toBeSearched.shift();
    if (test(searched)) {
      return searched;
    }
    if (searched.left !== null) {
      toBeSearched.push(searched.left);
    }
    if (searched.right !== null) {
      toBeSearched.push(searched.right);
    }
  }
};
/*
 * Complexity: What is the time complexity of the above functions?

 insert: O(log n) if the tree is balanced, but O(n) in the worst case scenario of a one branch tree
 contains: O(log n) if the tree is balanced, but O(n) in the worst case scenario of a one branch tree
 depthFirstLog: O(n)
 breadthFirstLog: O(n)

 */

var RebalancingTree = function(value) {
  this.tree = BinarySearchTree (value);
  this.max = 0;
  this.min = 0;
};
RebalancingTree.prototype.contains = function(target) {
  this.tree.contains(target);
};

RebalancingTree.prototype.insert = function(value) {
  var inserted = this.tree.insert(value); //get depth of newly inserted tree   //// (tobeinserted, recording locn, currentdepth)
  if (inserted.depth > this.max) {
    this.max = inserted.depth;
    if (this.max >= 2 * this.min) {
      //rotate
    }
  }
  //if (inserted.depth < this.min)
  //this.min = inserted.depth
};

RebalancingTree.prototype.depthFirstLog = function(callBack) {
  this.tree.depthFirstLog(callBack);
};

RebalancingTree.prototype.breadthFirstLog = function(callBack) {
  this.tree.breadthFirstLog(callBack);
};

RebalancingTree.prototype.breadthFirstSearch = function(test) {
  this.tree.breadthFirstLog(test);
};

// RebalancingTree.prototype.updateMinDepth = function() {

//   this.min = this.tree.breadthFirstSearch(function(){
//     if (this.left === null && this.right === null) {
//       return true;
//     }
//   }).depth;
// };

//invoke after insertion
// RebalancingTree.prototype.maxDepth = function(node) {
//   //no left/right child, node is leaf
//   if (node === null) {
//     return 0;
//   }
//   else  {
//     var leftDepth = maxDepth(node.left);
//     var rightDepth = maxDepth(node.right);
//     if (leftDepth > rightDepth) {
//       //depth of left child + 1 (for the root)
//       return leftDepth + 1;
//     } else {
//       return rightDepth + 1;
//     }
//   }
// }

RebalancingTree.prototype.balanceCheck = function(node) {
  let leaves = [];
  var walk = function (node, depth = 0) {
    if (node.left === null && node.right === null) {
      leaves.push(depth);
    }
    if (node.left !== null) {
      walk(node.left, depth + 1);
    }
    if (node.right !== null) {
      walk(node.right, depth + 1);
    }
  };
  walk(this.tree);

  if (Math.max(leaves) >= 2 * Math.min(leaves)) {
    // rebalancefn()
  }

};

