var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var added = Node(value);
    if (list.head === null) {
      list.head = added;
    } else {
      list.tail.next = added;
    }
    list.tail = added;
  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }

    var removed = list.head;
    list.head = list.head.next;
    removed.next = null;
    return removed.value;
  };

  list.contains = function(target) {
    var node = list.head;

    while (node !== null) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value || null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

 addToTail: O(1)
 removeHead: O(1)
 contains: O(n)

 */
