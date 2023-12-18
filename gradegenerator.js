const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateGrade() {
    rl.question("Enter student marks (between 0 and 100): ", function (input) {
        const marks = parseFloat(input);

        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log("Invalid input. Please enter a valid mark between 0 and 100");
        } else {
            const grade = getGrade(marks);
            console.log(`Grade: ${grade}`);
        }

        rl.close();
    });
}

function getGrade(marks) {
    if (marks > 79) {
        return "A";
    } else if (marks >= 60 && marks <= 79) {
        return "B";
    } else if (marks >= 50 && marks <= 59) {
        return "C";
    } else if (marks >= 40 && marks <= 49) {
        return "D";
    } else {
        return "E";
    }
}

// Call the main function
calculateGrade();
