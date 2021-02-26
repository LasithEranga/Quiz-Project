//contains functions related to mcq processing 
var questions = []; //global array that holds the current step questions and answers
var currentStep = 0; //global current step helps to maintain the Next button
function buildQuiz(myQuestion,start) {
    const output = [];
	questions = []; //reset the global questions set. otherwise it will show questions cumulatively
	currentStep = start; //current step is updated using the start, so that each time the function is called the variable is set to the new question set.
	resultsContainer.innerHTML = ``; //clears the resultcontainer in order to stop showing marks
    for (var i = start; i<start+10; i++){
        if(myQuestion[i] === undefined){
            break;
        }
        questions.push(myQuestion[i]);
    }
    var index = 1;
	
    questions.forEach(
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
            `<div class = "question"> ${index}.${currentQuestion.question}</div>
             <div class = "answers">${answers.join('')}</div></br>`);
        index ++;
        
        }       
        
    );
    quizContainer.innerHTML = output.join('');
	if (questions.length === 0){
		
		quizContainer.innerHTML = "End Of Questions";
		buttonContainer.innerHTML = `<style>

.button1 {
  background-color: white; 
  color: black; 
  border: 2px solid #4CAF50;
.button1:hover {
  background-color: #4CAF50;
}
}</style>
		<button class="button button1" onclick = 'location.href ="../../HomePage.html" '>Back</button>`;
	}
}

function Next(){
	buildQuiz(myQuestions,currentStep+10);
}
        
function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    questions.forEach( (currentQuestion, questionNumber) => {

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
  resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
}






