var runTests = function(depth, iterations, type, implementation) {
  console.log('Depth:', depth);
  console.log('Iterations:', iterations);
  console.log('Type:', type);
  console.log('Implementation:', implementation);


  var makeStack = function(implementation) {
    if (implementation === 'es6') {
      class Stack {
        constructor() {
          this.storage = {};
        }

        push(value) {
          this.storage[this.size()] = value;
        }

        pop() {
          var popped = this.storage[this.size() - 1];
          delete this.storage[this.size() - 1];
          return popped;
        }

        size() {
          return Object.keys(this.storage).length;
        }
      }

      var tester = new Stack();
      return tester;

    } else if (implementation === 'functional') {
      var Stack = function() {
        var someInstance = {};

        var storage = {};

        someInstance.push = function(value) {
          storage[someInstance.size()] = value;
        };

        someInstance.pop = function() {
          var result = storage[someInstance.size() - 1];
          delete storage[someInstance.size() - 1];
          return result;
        };

        someInstance.size = function() {
          return Object.keys(storage).length;
        };

        return someInstance;
      };

      var tester = Stack();
      return tester;

    } else if (implementation === 'functional-shared') {
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

      var tester = Stack();
      return tester;

    } else if (implementation === 'prototypal') {
      var Stack = function() {
        var obj = Object.create(stackMethods);
        obj.storage = {};
        return obj;
      };

      var stackMethods = {
        push: function(value) {
          this.storage[this.size()] = value;
        },
        pop: function() {
          var popped = this.storage[this.size() - 1];
          delete this.storage[this.size() - 1];
          return popped;
        },
        size: function() {
          return Object.keys(this.storage).length;
        }
      };

      var tester = Stack();
      return tester;

    } else if (implementation === 'pseudoclassical') {
      var Stack = function() {
        this.storage = {};
      };

      Stack.prototype.push = function(value) {
        this.storage[this.size()] = value;
      };

      Stack.prototype.pop = function() {
        var popped = this.storage[this.size() - 1];
        delete this.storage[this.size() - 1];
        return popped;
      };

      Stack.prototype.size = function() {
        return Object.keys(this.storage).length;
      };

      var tester = new Stack();
      return tester;

    } else if (implementation === 'fastpseudo') {
      var Stack = function() {
        this.storage = {};
        this.top = 0;
      };

      Stack.prototype.push = function(value) {
        this.storage[this.size()] = value;
        this.top++;
      };

      Stack.prototype.pop = function() {
        var popped = this.storage[this.size() - 1];
        delete this.storage[this.size() - 1];
        this.top--;
        return popped;
      };

      Stack.prototype.size = function() {
        return this.top;
      };

      var tester = new Stack();
      return tester;

    }
  };

  var makeQueue = function(implementation) {
    if (implementation === 'es6') {
      class Queue {
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

      var tester = new Queue();
      return tester;

    } else if (implementation === 'functional') {
      var Queue = function() {
        var someInstance = {};
        var storage = {};

        someInstance.enqueue = function(value) {
          storage[someInstance.size()] = value;
        };

        someInstance.dequeue = function() {
          let removed = storage[0];
          for (let i = 0; i < someInstance.size(); i++) {
            storage[i] = storage[i + 1];
          }
          delete storage[someInstance.size() - 1];
          return removed;
        };

        someInstance.size = function() {
          return Object.keys(storage).length;
        };

        return someInstance;
      };

      var tester = Queue();
      return tester;

    } else if (implementation === 'functional-shared') {
      var Queue = function() {
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

      var tester = Queue();
      return tester;

    } else if (implementation === 'prototypal') {
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

      var tester = Queue();
      return tester;

    } else if (implementation === 'pseudoclassical') {
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

      var tester = new Queue();
      return tester;

    } else if (implementation === 'fastpseudo') {
      var Queue = function() {
        this.storage = {};
        this.head = 0;
        this.tail = -1;
      };

      Queue.prototype.enqueue = function(value) {
        this.tail++;
        this.storage[this.tail] = value;
      };

      Queue.prototype.dequeue = function() {
        var dequeued = this.storage[head];
        delete this.storage[this.head];
        this.head++;
        if (this.size === -1) {
          this.head = 0;
          this.tail = -1;
        }
        return dequeued;
      };

      Queue.prototype.size = function() {
        return tail - head;
      };

      var tester = new Queue();
      return tester;

    }

  };

  var stackTests = function() {
    for (var i = 0; i < iterations; i++) {
      for (var j = 0; j < depth; j++) {
        tester.push(Math.floor(Math.random() * Math.floor(1000)));
      }
      for (var k = 0; k < depth; k++) {
        tester.pop;
      }
    }
  };

  var queueTests = function() {
    for (var i = 0; i < iterations; i++) {
      for (var j = 0; j < depth; j++) {
        tester.enqueue(Math.floor(Math.random() * Math.floor(1000)));
      }
      for (var k = 0; k < depth; k++) {
        tester.dequeue;
      }
    }
  };

  if (type === 'stack') {
    var tester = makeStack(implementation);
    stackTests();
  } else if (type = 'queue') {
    var tester = makeQueue(implementation);
    queueTests();
  }

  console.log('Done');

};