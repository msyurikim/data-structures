var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function() {
    let removed = storage[0];

    for (let i = 0; i < someInstance.size(); i++) {
      storage[i] = storage[i + 1];
    }

    delete storage[someInstance.size() -1];

    return removed;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
