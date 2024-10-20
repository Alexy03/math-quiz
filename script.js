// Variables to hold the current question and answer
let correctAnswer;

// Generate a random math question
function generateQuestion() {
    // Random numbers between 1 and 10
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    // Randomly choose an operation (+, -, *, /)
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    // Calculate the correct answer based on the operation
    switch (operation) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
        case '/':
            correctAnswer = (num1 / num2).toFixed(2);  // Limiting division answer to 2 decimal places
            break;
    }

    // Display the question
    document.getElementById('question').innerText = `${num1} ${operation} ${num2} = ?`;

    // Clear previous result and answer input
    document.getElementById('result').innerText = '';
    document.getElementById('answer').value = '';
}

// Check the user's answer
function checkAnswer() {
    const userAnswer = document.getElementById('answer').value;

    // Compare user's answer to the correct answer
    if (userAnswer == correctAnswer) {
        document.getElementById('result').innerText = 'Correct!';
        document.getElementById('result').style.color = 'green';
    } else {
        document.getElementById('result').innerText = `Wrong! The correct answer is ${correctAnswer}.`;
        document.getElementById('result').style.color = 'red';
    }
}

// Generate the first question when the page loads
generateQuestion();
