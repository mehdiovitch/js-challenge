function countWords(message) {
    let words = message.split(" ");
    return words.length;
}

function challenge_one() {
    let message = "There is no war in Ba Sing Se";


    let wordCount = countWords(message);

    console.log(`The message contains ${wordCount} words.`);
}

challenge_one();


// second exercice

let countries = ['China', 'Japan', 'South Korea', 'Vietnam', 'Malaysia'];
let capital = ['Beijing', 'Tokyo', 'Seoul', 'Hanoï', 'Kuala Lumpur'];

function displayCountryCapital() {

    if (countries.length !== capital.length) {
        console.log('Number of countries and capitals does not match.');
        return;
    }

    for (let i = 0; i < countries.length; i++) {
        let country = countries[i];
        let capitalCity = capital[i];

        console.log(`Your country: ${country} has the capital named: ${capitalCity}.`);
    }
}

displayCountryCapital();

//  third exercice

// Generating a random number between 0 and 3 (exclusive of 3)
let randomizer = Math.floor(Math.random() * 3);

// Assigning fates based on the random number generated
let fate;
if (randomizer === 0) {
    fate = "A certain victory";
} else if (randomizer === 1) {
    fate = "Not so certain victory";
} else if (randomizer === 2) {
    fate = "An uneasy victory";
} else {
    fate = "Your fate is unclear, ô chosen undead";
}

// Displaying the fate determined by the random number
console.log(`Your fate: ${fate}`);

// the last exercice

function checkSeason(month) {
    // Ensure month is within the range of 1 to 12
    if (month < 1 || month > 12) {
        return "Invalid month";
    }

    // Determine the season based on the month
    if (month >= 3 && month <= 5) {
        return "Spring";
    } else if (month >= 6 && month <= 8) {
        return "Summer";
    } else if (month >= 9 && month <= 11) {
        return "Autumn";
    } else {
        return "Winter";
    }
}

// Example usage:
const currentMonth = 1; // Replace this with the current month's number (1 to 12)
const currentSeason = checkSeason(currentMonth);
console.log(`The current season is: ${currentSeason}`);