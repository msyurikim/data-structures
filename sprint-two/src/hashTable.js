

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //if (this._storage.get(index) === undefined) {
  // if the first member of what's here is the k you gave me, overwrite, otherwise add another kv pair?)
  //if === undefined make an object add kv, otherwise add kv to the object that's already there?
  //if (this._storage)
  this._storage.set(index, obj);
  //}
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


