
// constat variabes for startGam function
const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');


//step.3
//randoming question
const shuffledQuestions, currentQuestionIndex;


//step 1.
//to execute a start buttopn functionality
startButton.addEventListener('click', startGame)
function startGame()
{
    console.log('started');
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
   //step.3
   //to random queezes 
   shuffledQuestions = question.sort(()=> Math.random() - .5);
   currentQuestionIndex =  0;
    //step.2
    //setting a question to start queezing
    setNextQuestion()
}

function setNextQuestion()
    {
      showQuestion(shuffledQuestions[currentQuestionIndex])
    }
function selectAnswer()
{

}


//step.2
//constant for questions array
const question = [
    {
        question: 'what is 2 + 2', 
        answer:  [
            { text:  '4', correct: true },
            {text: '22', correct: false}
            
        ]
    }
]