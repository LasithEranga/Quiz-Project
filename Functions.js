const myQuestions =[{
		"question": "Who invented JavaScript?",
		"answers": {
			"a": "Douglas Crockford",
			"b": "Sheryl Sandberg",
			"c": "Brendan Eich"
		},
		"correctAnswer": "c"
	},
	{
		"question": "Which one of these is a JavaScript package manager?",
		"answers": {
			"a": "Node.js",
			"b": "TypeScript",
			"c": "npm"
		},
		"correctAnswer": "c"
	},
	{
		"question": "Which tool can you use to ensure code quality?",
		"answers": {
			"a": "Angular",
			"b": "jQuery",
			"c": "RequireJS",
			"d": "ESLint"
		},
		"correctAnswer": "c"
	}
];
     
 function buildQuiz(){

    const output = [];

    myQuestions.forEach(
    (currentQuestion, questionNumber)=>{
            const answers = [];

            for (letter in currentQuestion.answers){
                answers.push(
                    `<label>
                    <input type = "radio" name = "question${questionNumber}" value = "${letter}">
                    ${letter}:
                    ${currentQuestion.answers[letter]}
                    </label></br>`
                );
            }
        output.push(
            `<div class = "question"> ${currentQuestion.question}</div>
             <div class = "answers">${answers.join('')}</div></br>`);
        }
    );
    quizContainer.innerHTML = output.join('');
}
        
        
        
function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
     numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  alert("Reset");
}