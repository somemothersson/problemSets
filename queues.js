import { runInThisContext } from "vm"

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
q.enqueue('a')
q.enqueue('b')
q.enqueue('c')
q.print()
q.dequeue()
q.front()
q.print()