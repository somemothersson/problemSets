/* 
Used to implement associative arrays or mappings of key value pairs
common way to implement the map data structure or object

Takes a key input and then runs it through a hash function
the hash function maps strings to numbers, and ussual the numbers correspond to indexs in an ary

needs to be consistent so when key run through the system is gives the same number
otherwise you get a collision

the way to handle collisions is store both key value pairs at that index, then upon lookup of either
iterate over the bucket to find what you are looking for


probably never have to implement, because javascript uses objects

*/
// pass in teh string we want to hash, 
//and provide the number of buckets we are using to store values
var hash = (string, max) => {
    // has starts a 0
    var hash = 0
    // for every character in teh string, 
    for (var i = 0; i <  string.length; i++) {
        // add teh character code fore each
        hash += string.charCodeAt(i)
    }
    //divide by the number of buckets and return the remainder
    //this will be the index placed into the aray
    return hash % max;
}

let HashTable = function() {
    // where we store teh data
    let storage = []
    // the number of buckets in the array
    const storageLimit = 4
    
    // utility function to easily log
    this.print = function() {
        console.log( storage)

    }
    this.add = function(key,value) {
        //pass the key and the number of bucketss
        var index = hash(key, storageLimit)
        // if there is nothing in the index, undefined
        if (storage[index] === undefined) {
            //
            storage[index] = [
                [key, value]
            ]
        } else {
            var inserted = false
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
        }
        if (inserted === false) {

        }
    }

}