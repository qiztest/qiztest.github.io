// Define the questions and their answers
const questions = [
	{
		question: "What is the capital of France?",
		answer: 1 // The correct answer is Paris
	},
	{
		question: "What is the highest mountain in the world?",
		answer: 2 // The correct answer is Mount Everest
	},
	{
		question: "What is the largest country in the world by land area?",
		answer: 3 // The correct answer is Russia
	}
];

let currentQuestion = 0;
let answer = null;

// Function to update the slider value
function updateSliderValue(value) {
	answer = parseInt(value);
}

// Function to display the current question
function displayQuestion() {
	const questionDiv = document.getElementById("question");
	const answerDiv = document.getElementById("answer");
	const sliderDiv = document.getElementById("slider");

	questionDiv.innerText = questions[currentQuestion].question;
	answerDiv.innerText = "";
	answer = null;

	// Create the slider element
	const slider = document.createElement("input");
	slider.type = "range";
	slider.min = 1;
	slider.max = 4;
	slider.value = 1;
	slider.step = 1;
	slider.oninput = function() {
		updateSliderValue(this.value);
	};
	sliderDiv.innerHTML = "";
	sliderDiv.appendChild(slider);
}

// Function to check the answer and display the result
function checkAnswer() {
	const answerDiv = document.getElementById("answer");
	const currentQuestionObj = questions[currentQuestion];

	if (answer === currentQuestionObj.answer) {
		answerDiv.innerText = "Correct!";
	} else {
		answerDiv.innerText = "Wrong!";
	}

	currentQuestion++;
	if (currentQuestion >= questions.length) {
		currentQuestion = 0;
	}

	displayQuestion();
}

// Display the first question when the page loads
displayQuestion();
