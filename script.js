const questions = [
    {
        question: "Which language is used for web development?",
        answers: {
            a: "Python",
            b: "JavaScript",
            c: "Java",
            d: "C++"
        },
        correctAnswer: "b"
    },
    {
        question: "What does CSS stand for?",
        answers: {
            a: "Computer Style Sheets",
            b: "Colorful Style Sheets",
            c: "Cascading Style Sheets",
            d: "Creative Style Sheets"
        },
        correctAnswer: "c"
    },
    {
        question: "HTML stands for?",
        answers: {
            a: "hyper text markup language",
            b: "hyper terminal language",
            c: "header markup language",
            d: "heading markup language"
        },
        correctAnswer: "a"
    }
];

let score = 0;
let currentQuestionIndex = 0;
let timeLeft = 60;
const timerElement = document.getElementById("time");

function loadQuestions() {
    const questionContainer = document.getElementById("questions-container");
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            <label><input type="radio" name="question${index}" value="a"> ${q.answers.a}</label><br>
            <label><input type="radio" name="question${index}" value="b"> ${q.answers.b}</label><br>
            <label><input type="radio" name="question${index}" value="c"> ${q.answers.c}</label><br>
            <label><input type="radio" name="question${index}" value="d"> ${q.answers.d}</label><br>
        `;
        questionContainer.appendChild(questionDiv);
    });
}

function startTimer() {
    const timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            submitQuiz();
        }
    }, 1000);
}

function submitQuiz() {
    const form = document.getElementById("quiz-form");
    const resultContainer = document.getElementById("result-container");
    const scoreElement = document.getElementById("score");

    questions.forEach((q, index) => {
        const answer = form[`question${index}`].value;
        if (answer === q.correctAnswer) {
            score++;
        }
    });

    form.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreElement.textContent = `${score} out of ${questions.length}`;
}

document.getElementById("quiz-form").addEventListener("submit", function (e) {
    e.preventDefault();
    submitQuiz();
});

// Initialize quiz
loadQuestions();
startTimer();
