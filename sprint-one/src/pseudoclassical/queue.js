var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.size()] = value;
};

Queue.prototype.dequeue = function() {
  var dequeued = this.storage[0];
  for (var i = 0; i < this.size(); i++) {
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[this.size() - 1];
  return dequeued;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};


