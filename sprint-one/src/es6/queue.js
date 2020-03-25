class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.size()] = value;
  }

  dequeue() {
    var dequeued = this.storage[0];
    for (var i = 0; i < this.size(); i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[this.size() - 1];
    return dequeued;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}
