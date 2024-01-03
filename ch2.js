// exo 1

function filterEvenNumbers(arr) {

    let evenNumbers = arr.filter(num => num % 2 === 0);
    return evenNumbers;
}

// Example usage:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenResult = filterEvenNumbers(numbers);
console.log("Array with even numbers:", evenResult);

//   exo2

function filterPeopleOver30(people) {

    let over30 = people.filter(person => person.age > 30);
    return over30;
}


let peopleArray = [
    { name: 'Alice', age: 28, email: 'alice@example.com' },
    { name: 'Bob', age: 35, email: 'bob@example.com' },
    { name: 'Charlie', age: 42, email: 'charlie@example.com' },
    { name: 'David', age: 25, email: 'david@example.com' }
];


let peopleOver30 = filterPeopleOver30(peopleArray);


console.log("People over 30:", peopleOver30);

// exo3

class Stack {
    constructor() {
        this.stackArray = [];
    }


    push(element) {
        this.stackArray.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack underflow - Cannot pop from an empty stack";
        }
        return this.stackArray.pop();
    }


    peek() {
        if (this.isEmpty()) {
            return "Stack is empty - No elements to peek";
        }
        return this.stackArray[this.stackArray.length - 1];
    }


    isEmpty() {
        return this.stackArray.length === 0;
    }


    size() {
        return this.stackArray.length;
    }
}

// Example usage:
let myStack = new Stack();

myStack.push(5);
myStack.push(10);
myStack.push(15);

console.log("Current stack:", myStack.stackArray);

console.log("Popped element:", myStack.pop());

console.log("Peeked element:", myStack.peek());

console.log("Is stack empty?", myStack.isEmpty());

console.log("Size of the stack:", myStack.size());

//   exo4

class Queue {
    constructor() {
        this.queueArray = [];
    }


    enqueue(element) {
        this.queueArray.push(element);
    }


    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty - Cannot dequeue from an empty queue";
        }
        return this.queueArray.shift();
    }


    peek() {
        if (this.isEmpty()) {
            return "Queue is empty - No elements to peek";
        }
        return this.queueArray[0];
    }


    isEmpty() {
        return this.queueArray.length === 0;
    }


    size() {
        return this.queueArray.length;
    }
}

// Example usage:
let myQueue = new Queue();

myQueue.enqueue(5);
myQueue.enqueue(10);
myQueue.enqueue(15);

console.log("Current queue:", myQueue.queueArray);

console.log("Dequeued element:", myQueue.dequeue());

console.log("Peeked element:", myQueue.peek());

console.log("Is queue empty?", myQueue.isEmpty());

console.log("Size of the queue:", myQueue.size());

// exo5

function removeVowels(inputString) {

    return inputString.replace(/[aeiouAEIOU]/g, '');
}

// Example usage:
let stringWithVowels = "Hello, this is a sample string with vowels.";
let stringWithoutVowels = removeVowels(stringWithVowels);
console.log("String without vowels:", stringWithoutVowels);

// exo6

function uniqueElementsFromArray(arr1, arr2) {
    let combinedArray = arr1.concat(arr2);
    let uniqueArray = [...new Set(combinedArray)];
    return uniqueArray;
}

// Example usage:
let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];
let uniqueElements = uniqueElementsFromArray(array1, array2);
console.log("Unique elements from both arrays:", uniqueElements);