
// constat variabes for startGam function
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
//const clearStatusClass = document.getElementsById('btn-grid"')
const questionContainerElement = document.getElementById('question-container');


//variables for timer
var totalSeconds = 60 * 5;
var  cMinutes = parseInt(totalSeconds / 60);
var cSeconds = parseInt (totalSeconds % 60);
//step.8
// checkTime function count down a time for the queez
function checkTime()
    {
        document.getElementById('queez-time-left').innerHTML
        = 'TimeLeft:  ' + cMinutes + ' minutes  ' + cSeconds + ' seconds';
        if(totalSeconds <= 0)
        {
            setTimeout('document.quiz.submit()', 1);
        }
        else{
                totalSeconds = totalSeconds - 1;
                cMinutes = parseInt(totalSeconds / 60);
                cSeconds = parseInt(totalSeconds % 60)
                setTimeout('checkTime()', 1000)
            }
    }
    setTimeout('checkTime()', 1000);


//step.4 
//for question element
const questionElemant = document.getElementById('question') 
const answerButtonsElement = document.getElementById('answer-button');

//step.3
//randoming question
var shuffledQuestions,  currentQuestionIndex;


//step 1.
//to execute a start buttopn functionality
startButton.addEventListener('click', startGame)

//this add event listner work the next button event
nextButton.addEventListener('click',() =>
{
 currentQuestionIndex++
 setNextQuestion()
})

function startGame()
{
   
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
   //step.3
   //to random queezes 
   shuffledQuestions = questions.sort(()=> Math.random() - .5);
   currentQuestionIndex =  0;
    //step.2
    //setting a question to start queezing
    setNextQuestion()
}
//step.3
//this question show question at the current question index
function setNextQuestion()
    {
     //calling a function of resetState()
     resetState()

       //here we pass the shuffeld question parameters 
      showQuestion(shuffledQuestions[currentQuestionIndex]);
    }

//this function take a question  from down below const 
function showQuestion(question)
{
 questionElemant.innerHTML = question.question
 //make a loop to identify the right answer
 question.answer.forEach(answer =>{ 
    
        const button = document.createElement('button')
        button.innerText = answer.text;
        button.classList.add('btn');
       //boolean to know if tye answer is correc 
        if(answer.correct)
        {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer )
        answerButtonsElement.appendChild(button)
    })
}


//step 4
    //to reset and join answer buttons with the actual answer 
function resetState()
{   clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild)
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)

}
//step.5
//here a function select the right answer for
//which a button has the right answer for the question
function selectAnswer(e)
{
    const selectedButton =  e.target
    const correct = selectedButton.dataset.correct
    //here we us a function called use document body  correct  argument 
    //todecideon an answer right or not
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>
        {
            setStatusClass(button, button.dataset.correct)
        })
        //for add eventlistner on next question
        if(shuffledQuestions.length < currentQuestionIndex + 1)
        {
            nextButton.classList.remove('button')
        }
        else
        {
            startButton.innerText = 'next'
            startButton.classList.remove('hide')
        }
        //after the queez execute to go the next step
        startButton.classList.remove('hide')
        
       
} 

//step 6 
//this function has two parameters
//to take the element of the question and the correct answer
function setStatusClass(element, correct)
    {
       
        clearStatusClass(element)
        if (correct)
        {
            element.classList.add('correct')
        }
        else
        {
            element.classList.add('wrong')
        }
    }
//Step7
function  clearStatusClass(element)
{
    element.classList.remove('correct')
    element.classList.remove('wrong')


}

//step.2
//constant for questions array
//❌ it is not the right answer
//✔️ it is the rightanswer
const questions = [
    {
        question: '_______ is the process of finding errors and fixing them within a program.', 
        answer:  [
            { text:  'Debugging: ', correct: true },
            { text:  'Compiling ', correct: false},
            { text:  'Scanning ', correct: false },
            { text:  'Executing' , correct: false},
            
        ]
        
    },
    {
        question: 'what is 4 + 2?', 
        answer:  [
            { text:  '6: ', correct: true },
            { text: '25 ', correct: false},
            { text:  '0 ', correct: false },
            { text: '9 ', correct: false},
            
        ]
        
    },
    {
        question: 'what is 7 + 2?', 
        answer:  [
            { text:  '8: ', correct: false },
            { text: '35 ', correct: false},
            { text:  '12 ', correct: false },
            { text: '9 ', correct: true},
            
        ]
        
    }
    
    
]
