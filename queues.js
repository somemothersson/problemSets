

/* 
Queue is a way to hold data, similar to a stack
While a stack is first in last out
A Queue is first in first out


*/

function Queue () {
    collection = []
    this.print = function() {
        console.log(collection)
    }
    // push the first item on to the queue at the end of the array
    this.enqueue = function(element) {
        collection.push(element)
    }
    // take the first item off the array and return it
    this.dequeue = function() {
        return collection.shift()
    }
    // what is the first item in the array, but do nothing with it
    this.front = function() {
        return collection[0]
    }
    this.size = function() {
        return collection.length
    }
    // check if there are no items in teh queu
    this.isEmpty = function() {
        return (collection.length === 0)
    }
}

var q = new Queue()
// Add a to queue
q.enqueue('a')
// add b to queue
q.enqueue('b')
// add c to queue
q.enqueue('c')
// show queue
q.print()
// remove the first item in the array - remove a
q.dequeue()
// what element is at the front of the array
console.log(q.front())
// show the current queue
q.print()


function PriorityQueue () {
    var collection = []
    this.printCollection = function() {
        (console.log(collection))
    }
    this.enqueue = function(element) {
        // check if empty
        if (this.isEmpty()) {
            // push on the element
            collection.push(element)
            // if not empty
        } else {
            var added = false
            // run through each item in the collection
            for (var i=0; i<collection.length; i++){
                // is the priority of the item being added to the queue 
                //less than the priority of the item we are checking
                if (element[1] < collection[i][1]){ //checking priorities
                    // if so add the item to the collection
                    collection.splice(i,0,element)
                    added = true;
                    break
                }
            }
            if (!added){
                collection.push(element)
            }
        }
    }
    this.dequeue = function() {
        var value = collection.shift()
        return value [0]

    }
    this.front = function(){
        return collection[0]
    }
    this.size = function(){
        return collection.length
    }
    this.isEmpty = function(){
        return(collection.length === 0)
    }
}

var pq = new PriorityQueue()
pq.enqueue(["Stephen Malito", 2])
pq.enqueue(["Todd Gak", 3])
pq.enqueue(["Martin Van Nostrom", 1])
pq.enqueue(["Joe DiVola", 2])
pq.printCollection()
pq.dequeue()
pq.front()
pq.printCollection()