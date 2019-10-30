/* 
Maps are data structures that store key value pairs
Objects are Maps
Maps provide rapid lookup of stotred items based on key values
*/

let myMap = function() {
    // we need to keep track of two things
    // the collection and the count
  this.collection = {};
  this.count = 0;
  // tell us what the count is
  this.size = function() {
    return this.count;
  };
  // we add to the collection
  this.set = function(key, value) {
    this.collection[key] = value;
    // update the count
    this.count++;
  };
  // check to see if the key exisits in teh collection
  this.has = function(key) {
    return key in this.collection;
  };
  // pass in the key to get the value
  this.get = function(key) {
      // if the key is in the collection, return the key - if not null
    return key in this.collection ? this.collection[key] : null;
  };
  // pass the key you want to delete, and then decrement the count
  this.delete = function(key) {
    if (key in this.collection) {
      delete this.collection[key];
      this.count--;
    }
  };
  //return an array of all the values in the map
  this.values = function() {
      // create a new array
      let result = new Array()
      // for loop to push each item in the array
      for (let key of Object.keys(this.collection)) {
          result.push(this.collection[key])
      }
      //if there are more than 0 items return the array - otherwise return null
      return (result.length > 0) ? result : null
  }
  // clear the items from teh map and set count to 0
  this.clear = function(){
      this.collection = {}
      this.count = 0
  }
}; 

let map = new myMap()
map.set('arms',2)
map.set('fingers',10)
map.set('eyes',2)
map.set('belly',1)
// What is the value of fingers = 10
console.log(map.get('fingers'))
// how many items are there = 4
console.log(map.size())
// what are all the values
console.log(map.values())

let map2 = new Map()
map2.has('hands')
map2.entries()

let keyObj = {},
    keyFunc = function() {}

map2.set('hello', 'string value')
map2.set(keyObj, 'obj value')
map2.set(keyFunc, 'func value')
map2.set(NaN, 'NaN value')

// what is the size of map2
console.log(map2.size)
// what is the value of below
console.log(map2.get('hello'))
console.log(map2.get(keyObj))
console.log(map2.get(keyFunc))
console.log(map2.get(NaN))


    

