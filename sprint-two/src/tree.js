var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (this.children.length > 0) {
    return this.children.reduce(function(isTrue, element) {
      if (isTrue === true) {
        return true;
      }
      return element.contains(target);
    }, false);
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O(1)
 contains: O(n)
 */
