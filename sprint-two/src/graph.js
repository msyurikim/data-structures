

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var edges = this.nodes[node];
  for (var key of edges) {
    var index = this.nodes[key].indexOf(node);
    if (index > -1) {
      this.nodes[key].splice(index, 1);
    }
  }

  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this.nodes[fromNode].indexOf(toNode);
  if (index > -1){
    this.nodes[fromNode].splice(index, 1);
  }
  index = this.nodes[toNode].indexOf(fromNode);
  if (index > -1){
    this.nodes[toNode].splice(index, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  Object.keys(this.nodes).forEach(function(node) {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
addNode: O(1)
contains: O(1)
removeNode: O(n)
hasEdge: O(n)
addEdge: O(1)
removeEdge: O(n)
forEachNode: O(n)
 */


