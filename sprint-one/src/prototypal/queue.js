var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.storage = {};

  return obj;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.size()] = value;
  },
  dequeue: function() {
    var dequeued = this.storage[0];
    for (i = 0; i < this.size(); i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[this.size() - 1];
    return dequeued;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


