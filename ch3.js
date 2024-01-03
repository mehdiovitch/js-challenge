// exo 1

function averageOfEvenNumbers(numbers) {
    // 
    const evenNumbers = numbers.filter(num => num % 2 === 0);

    if (evenNumbers.length === 0) {
        return 0;
    }


    const sumOfEvenNumbers = evenNumbers.reduce((acc, curr) => acc + curr, 0);


    const average = sumOfEvenNumbers / evenNumbers.length;

    return average;
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = averageOfEvenNumbers(numbersArray);
console.log("Average of even numbers:", result);

// exo 2

function longestWord(arr) {
    if (arr.length === 0) {
        return null;
    }


    const longest = arr.reduce((longestWord, currentWord) => {
        return currentWord.length > longestWord.length ? currentWord : longestWord;
    }, "");

    return longest;
}

// Example usage:
const wordsArray = ["apple", "banana", "orange", "strawberry", "kiwi"];
const longest = longestWord(wordsArray);
console.log("Longest word:", longest);

// exo 3 

function averagePages(books) {
    if (books.length === 0) {
        return 0;
    }

    const pagesArray = books.map(book => book.pages);
    const totalSumOfPages = pagesArray.reduce((acc, curr) => acc + curr, 0);
    const average = totalSumOfPages / books.length;
    return average;
}
// Example usage:
const booksArray = [
    { title: "Book 1", author: "Author 1", pages: 250 },
    { title: "Book 2", author: "Author 2", pages: 320 },
    { title: "Book 3", author: "Author 3", pages: 180 },
];

const avgPages = averagePages(booksArray);
console.log("Average number of pages:", avgPages);

// exo4

function stringFrequency(arr) {
    const frequency = arr.reduce((acc, current) => {
        acc[current] = (acc[current] || 0) + 1;
        return acc;
    }, {});

    return frequency;
}

// Example usage:
const stringsArray = ["hello", "world", "hello", "world", "hello"];
const frequencyObject = stringFrequency(stringsArray);
console.log(frequencyObject);

// exo 5

function countPeopleByCity(people) {
    const countByCity = people.reduce((acc, person) => {
        const { city } = person;
        acc[city] = (acc[city] || 0) + 1;
        return acc;
    }, {});

    return countByCity;
}

// Example usage:
const peopleArray = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 40, city: "Chicago" },
    { name: "Charlie", age: 50, city: "New York" },

];

const countByCityObject = countPeopleByCity(peopleArray);
console.log(countByCityObject);