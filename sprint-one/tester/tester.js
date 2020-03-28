var runTests = function(depth, iterations, type, implementation) {
  console.log('Depth:', depth);
  console.log('Iterations:', iterations);
  console.log('Type:', type);
  console.log('Implementation:', implementation);


  var makeStack = function(implementation) {
    if (implementation === 'es6-array') {
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

    } else if (implementation === 'es6-fast') {
      class Stack {
        constructor() {
          this.storage = {};
          this.top = 0;
        }

        push(value) {
          this.storage[this.size()] = value;
          this.top++;
        }

        pop() {
          if (this.top === 0) {
            return;
          }
          var popped = this.storage[this.size() - 1];
          delete this.storage[this.size() - 1];
          this.top--;
          return popped;
        }

        size() {
          return this.top;
        }
      }

      var tester = new Stack();
      return tester;

    } else if (implementation === 'functional-array') {
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

    } else if (implementation === 'functional-fast') {
      var Stack = function() {
        var someInstance = {};

        var storage = {};
        var top = 0;

        someInstance.push = function(value) {
          storage[someInstance.size()] = value;
          top++;
        };

        someInstance.pop = function() {
          if (top === 0) {
            return;
          }
          var result = storage[someInstance.size() - 1];
          delete storage[someInstance.size() - 1];
          top--;
          return result;
        };

        someInstance.size = function() {
          return top;
        };

        return someInstance;
      };

      var tester = Stack();
      return tester;

    } else if (implementation === 'functional-shared-array') {
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

    } else if (implementation === 'functional-shared-fast') {
      var Stack = function() {
        var someInstance = {};
        someInstance.stack = {};
        someInstance.top = 0;
        _.extend(someInstance, stackMethods);
        return someInstance;
      };

      var stackMethods = {
        push: function(value) {
          this.stack[this.size()] = value;
          this.top++;
        },
        pop: function() {
          if (this.top === 0) {
            return;
          }
          let popped = this.stack[this.size() - 1];
          delete this.stack[this.size() - 1];
          this.top--;
          return popped;
        },
        size: function() {
          return this.top;
        }
      };

      var tester = Stack();
      return tester;

    } else if (implementation === 'prototypal-array') {
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

    } else if (implementation === 'prototypal-fast') {
      var Stack = function() {
        var obj = Object.create(stackMethods);
        obj.storage = {};
        obj.top = 0;
        return obj;
      };

      var stackMethods = {
        push: function(value) {
          this.storage[this.size()] = value;
          this.top++;
        },
        pop: function() {
          if (this.top === 0) {
            return;
          }
          var popped = this.storage[this.size() - 1];
          delete this.storage[this.size() - 1];
          this.top--;
          return popped;
        },
        size: function() {
          return this.top;
        }
      };

      var tester = Stack();
      return tester;

    } else if (implementation === 'pseudoclassical-array') {
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

    } else if (implementation === 'pseudoclassical-fast') {
      var Stack = function() {
        this.storage = {};
        this.top = 0;
      };

      Stack.prototype.push = function(value) {
        this.storage[this.size()] = value;
        this.top++;
      };

      Stack.prototype.pop = function() {
        if (this.top === 0) {
          return;
        }
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
    if (implementation === 'es6-array') {
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

    } else if (implementation === 'es6-fast') {
      class Queue {
        constructor() {
          this.storage = {};
          this.head = 0;
          this.tail = -1;
        }

        enqueue(value) {
          this.tail++;
          this.storage[this.tail] = value;
        }

        dequeue() {
          var dequeued = this.storage[head];
          delete this.storage[this.head];
          this.head++;
          if (this.size === 0) {
            this.head = 0;
            this.tail = -1;
          }
          return dequeued;
        }

        size() {
          return tail - head + 1;
        }
      }

      var tester = new Queue();
      return tester;

    } else if (implementation === 'functional-array') {
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

    } else if (implementation === 'functional-fast') {
      var Queue = function() {
        var someInstance = {};
        var storage = {};
        var head = 0;
        var tail = -1;

        someInstance.enqueue = function(value) {
          tail++;
          storage[tail] = value;
        };

        someInstance.dequeue = function() {
          let removed = storage[head];
          delete storage[head];
          head++;
          if (someInstance.size() === 0) {
            head = 0;
            tail = -1;
          }
          return removed;
        };

        someInstance.size = function() {
          return tail - head + 1;
        };

        return someInstance;
      };

      var tester = Queue();
      return tester;

    } else if (implementation === 'functional-shared-array') {
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

    } else if (implementation === 'functional-shared-fast') {
      var Queue = function() {
        var someInstance = {};
        someInstance.queue = {};
        someInstance.head = 0;
        someInstance.tail = -1;
        _.extend(someInstance, queueMethods);
        return someInstance;
      };

      var queueMethods = {
        enqueue: function(value) {
          this.tail++;
          this.queue[this.tail] = value;
        },
        dequeue: function() {
          var dequeued = this.queue[head];
          delete this.queue[head];
          this.head++;
          if (this.size === 0) {
            this.head = 0;
            this.tail = -1;
          }
          return dequeued;
        },
        size: function() {
          return this.tail - this.head + 1;
        }
      };

      var tester = Queue();
      return tester;

    } else if (implementation === 'prototypal-array') {
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

    } else if (implementation === 'prototypal-fast') {
      var Queue = function() {
        var obj = Object.create(queueMethods);
        obj.storage = {};
        obj.head = 0;
        obj.tail = -1;
        return obj;
      };

      var queueMethods = {
        enqueue: function (value) {
          this.tail++;
          this.storage[this.tail] = value;
        },
        dequeue: function() {
          var dequeued = this.queue[head];
          delete this.storage[head];
          this.head++;
          if (this.size === 0) {
            this.head = 0;
            this.tail = -1;
          }
          return dequeued;
        },
        size: function() {
          return this.tail - this.head + 1;
        }
      };

      var tester = Queue();
      return tester;

    } else if (implementation === 'pseudoclassical-array') {
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

    } else if (implementation === 'pseudoclassical-fast') {
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
        if (this.size === 0) {
          this.head = 0;
          this.tail = -1;
        }
        return dequeued;
      };

      Queue.prototype.size = function() {
        return tail - head + 1;
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