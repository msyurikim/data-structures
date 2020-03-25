var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.queue = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.queue[this.size()] = value;
  },
  dequeue: function() {
    var dequeued = this.queue[0];
    for (var i = 0; i < this.size(); i++) {
      this.queue[i] = this.queue[i + 1];
    }
    delete this.queue[this.size() - 1];
    return dequeued;
  },
  size: function() {
    return Object.keys(this.queue).length;
  }
};


