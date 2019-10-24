/* Stacks */

// functions: push, pop, peek, length

var letters = []

var word = "racecar"

var reverseWord = ""

for (var i = 0; i < word.length; i++) {
    letters.push(word[i])
}

for (var i = 0; i < word.length; i++) {
    //pop off the end of the array
    reverseWord += letters.pop()
    
}

if (reverseWord === word) {
    console.log(`${word} is a Palindrome`)
} else {
    console.log(`${word} is not a Palindrome`)
}

var Stack = () => {
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack
    this.push = (value) => {
        this.storage[this.count] = value
        this.count++
    }
    // Removes and returns the valye at the end of the stack
    this.pop = () => {
        if (this.count === 0) {
            return undefined
        }
        this.count--;
        var result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    this.size = () => {
        return this.count;
    }

    // Returns the value at the end of the stack
    this.peek = (value) => {
        return this.storage[this.count-1]
    }

}
var myStack = new Stack()

myStack.push(1)
myStack.push(2)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())