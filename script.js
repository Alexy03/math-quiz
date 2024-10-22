let correctAnswer;
let score = 0;
let timeLeft = 60; // Timer mode
let timerInterval;
let inTimerMode = false;

// Generate a new question
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

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
            if (num2 === 0) num2 = 1; // Prevent division by zero
            correctAnswer = (num1 / num2).toFixed(2);
            break;
    }

    document.getElementById('question').innerText = `${num1} ${operation} ${num2} = ?`;
    document.getElementById('result').innerText = '';
    document.getElementById('answer').value = '';
}

// Check user's answer
function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById('answer').value);
    const resultElem = document.getElementById('result');

    if (userAnswer === correctAnswer) {
        score++;
        resultElem.innerText = 'Correct!';
        resultElem.style.color = 'green';
        document.getElementById('score').innerText = `Score: ${score}`;
        generateQuestion(); // Auto-generate new question on correct answer
    } else {
        resultElem.innerText = `Wrong! Try again.`;
        resultElem.style.color = 'red';
    }
	
	document.getElementById('score').innerText = `Score: ${score}`;
    generateQuestion();
}

// Timer function to start the 1-minute countdown
function startTimer() {
    timeLeft = 60;
    document.getElementById('timer').style.display = 'block';
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
			classifyScore();
        }
    }, 1000);
}

// Classify score based on performance
function classifyScore() {
    const classificationElem = document.getElementById('classification');
    if (score <= 10) {
        classificationElem.innerText = 'Need to study harder!';
    } else if (score <= 20) {
        classificationElem.innerText = 'Good work!';
    } else {
        classificationElem.innerText = 'Excellent work!';
    }
}

// Start the quiz in normal mode
function startNormalMode() {
    inTimerMode = false;
    resetQuiz();
    document.getElementById('timer').style.display = 'none';
}

// Start the quiz in timer mode
function startTimerMode() {
    inTimerMode = true;
    resetQuiz();
    startTimer();
}

// Reset the quiz
function resetQuiz() {
    score = 0;
    document.getElementById('answer').disabled = false;
    document.querySelector('button').disabled = false;
    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('classification').innerText = ''; // Reset classification
    generateQuestion();
}

// Detect 'Enter' key press to submit answer
document.getElementById('answer').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

// Start the quiz and normal mode by default
window.onload = function() {
    startNormalMode();
};
