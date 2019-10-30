/* Stacks */

// functions: push(place data on), pop(remove element), peek(see the top item), length(how many on stack)

var letters = []

var word = "racecar"

var reverseWord = ""

// put the letters into the stack
for (var i = 0; i < word.length; i++) {
    letters.push(word[i])
}
// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
    //pop off the end of the array
    reverseWord += letters.pop()
    
}

if (reverseWord === word) {
    console.log(`${word} is a Palindrome`)
} else {
    console.log(`${word} is not a Palindrome`)
}



var Stack = function() {
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack
    this.push = (value) => {
        // Put the value on the end of the stack
        this.storage[this.count] = value
        // Increment count of 1 so we know how many are in the stack
        this.count++
    }
    // Removes and returns the value at the end of the stack
    this.pop = () => {
        if (this.count === 0) {
            // There is nothing in the stack, return undefiedn
            return undefined
        }

        this.count--;
        var result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }
    // Return this.coout, the number of items in the stack
    this.size = () => {
        return this.count;
    }

    // Returns the value at the end of the stack, peek will not remove the tiem
    this.peek = () => {
        // - 1 to get the last item
        return this.storage[this.count-1]
    }

}
var myStack = new Stack()

myStack.push(1)
myStack.push(2)
// Peeked will show 2, peek will show the last item in the stack
console.log(myStack.peek())
// Pop off 2, should still be 2
console.log(myStack.pop())
//  Peek again, and we will see 1 since 2 was popped off
console.log(myStack.peek())
// We pushed freecodecamp so now there are 2
myStack.push("freeCodeCamp")
// We check the size and now there are 2 again after adding freecode camp
console.log(myStack.size())
// Peek and we will see FreeCodeCamp
console.log(myStack.peek())
// Pop off the last item, freeCodeCamp
console.log(myStack.pop())
// Peek Again, and we will see one since we popped freecodecamp off
console.log(myStack.peek())
