const quizData=[
    {
        question:'Where are you from?',
        a:"USA",
        b:"IRAN",
        c:"CHINA",
        correct:"b"
    },
    {
        question:'How old are you?',
        a:"20",
        b:"10",
        c:"16",
        correct:"c"
    },
    {
        question:'What are you learning now?',
        a:"Front-end",
        b:"Back-end",
        c:"Fullstack",
        correct:"a"
    }
];

const quiz=document.getElementById('quiz')
const answerEls=document.querySelectorAll('.answer')
const questionEl = document.getElementById("question");
const aText=document.getElementById('a_text');
const bText=document.getElementById('b_text');
const cText=document.getElementById('c_text');
const submitBtn=document.getElementById('submit')

let currentQuiz=0;
let score=0;

loadQuiz()

function loadQuiz() {
    diselectAnswers()

    const currentQuizdata=quizData[currentQuiz]
    questionEl.innerHTML=currentQuizdata.question;
    aText.innerText=currentQuizdata.a;
    bText.innerText=currentQuizdata.b;
    cText.innerText=currentQuizdata.c;
}

function getSelected() {
    let answer=undefined

    answerEls.forEach((answerEl)=>{
        if (answerEl.checked) {
            answer=answerEl.id 
        }
    })

    return answer
    
}

function diselectAnswers() {
    answerEls.forEach((answerEl)=>{
        answerEl.checked=false
    })    
}

submitBtn.addEventListener('click',()=>{
    
    const answer=getSelected()

    if (answer) {
        if (answer===quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++;

        if (currentQuiz<quizData.length) {
            loadQuiz();
        }else{
           quiz.innerHTML=`<h1>You answered correctly at ${score}/${quizData.length} questions.</h1>
           <button onclick="location.reload()">Reload</button>
           `
        }
    }
})
