/* 
The Set data structure is like an array, but there are no duplicate items,
and the values are not in any particular order


The pourpose is to look for the presence of aparticular item.

ES6 has a built in set object, but doesn't have all the methods


*/ 
function mySet() {
    // the var collection will hold the set
    var collection = []
    //this method will check for the presence of an element and return true or false
    this.has = function(element) {
        // If the element is not in the collection, return -1
        // If not -1, then it is true
        return (collection.indexOf(element) !== -1)
    }
    // this method will return all the values in the set 
    this.values = function() {
        return collection
    }
    // this method will add an element to the set
    this.add =function(element) {
        // First we have to check if the element is in the set
        
        if(!this.has(element)){
            // If it doesn't have the element add it to the array
            collection.push(element)
            return true
        }
        return false
    }
   

    // this method will remove an element from a set

    this.remove = function(element) {
        // Check if element is in the collection
        if(this.has(element)) {
            // determine the index of the element
            index = collecntion.indexOf(element)
            // remove with splice
            collection.splice(index,1)
            return true
        }
        return false
    }
    
    // this method will return the size of the collection
    this.size = function(){
        return collection.length
    }
    // this method will return the union of two sets
    // union will combine the sets, but leave out any duplicates
    // call the union on the other set and pass in the set we want to combine
    this.union = function(otherSet) {
        // create new set
        var unionSet = new mySet()
        // the new set
        var firstSet = this.values()
        var secondSet = otherSet.values()
        // for each value in the set, add the value
        //.add will not add duplicate entries
        firstSet.forEach(function(e){
            unionSet.add(e)
        })
        secondSet.forEach(function(e){
            unionSet.add(e)
        })
    }

    // this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet) {
        var intersection
    }

}