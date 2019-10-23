/* Stacks */

// functions: push, pop, peek, length

var letters = []

var word = "racecar"

var reverseWord = ""

for (var i = 0; i < word.length; i++) {
    letters.push(word[i])
}

for (var i = 0; i < word.length; i++) {
    reverseWord += letters.pop()
    
}

if (reverseWord === word) {
    console.log(`${word} is a Palindrome`)
} else {
    console.log(`${word} is not a Palindrome`)
}