

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  var kIndex = -1;

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      kIndex = i;
    }
  }
  if (kIndex !== -1) {
    bucket[kIndex][1] = v;
  } else {
    bucket.push([k, v]);
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  var kIndex = -1;
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      kIndex = i;
    }
  }
  if (kIndex !== -1) {
    return bucket[kIndex][1];
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
  var bucket = this._storage.get(index) || [];
  var kIndex = -1;
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      kIndex = i;
    }
  }
  if (kIndex !== -1) {
    bucket.splice(kIndex, 1);
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 O(1) for all functions because size of bucket is negligible to size of hash table
 */


