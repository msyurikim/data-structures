var Stack = function() {

  var someInstance = {};
  someInstance.stack = {};
  _.extend(someInstance, stackMethods);

  return someInstance;

};


var stackMethods = {
  push: function(value) {
    this.stack[this.size()] = value;
  },
  pop: function() {
    let popped = this.stack[this.size() - 1];
    delete this.stack[this.size() - 1];
    return popped;
  },
  size: function() {
    return Object.keys(this.stack).length;
  }
};


