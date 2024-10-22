// Variables to hold the current question and answer
let correctAnswer;
let score = 0;
let timeLeft = 60; // 1-minute timer
let timerInterval;

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
// Timer function to start the 1-minute countdown
function startTimer() {
    timerInterval = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById('timer').innerText = `Time Left: ${timeLeft}s`;
        } else {
            clearInterval(timerInterval);
            document.getElementById('question').innerText = 'Time is up!';
            document.getElementById('result').innerText = `Your final score: ${score}`;
            document.getElementById('answer').disabled = true;
            document.querySelector('button').disabled = true;
        }
    }, 1000);
}
// Generate the first question when the page loads
generateQuestion();
