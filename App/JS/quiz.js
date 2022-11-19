const quizData = [
    {   
        question:'Quelle est la capitale du Cameroun ?',
        a : 'Foumban',
        b : 'Douala',
        c : 'yaounde',
        d : 'maroua',
        correct : 'c',
    },
    {   
        question:'Quelle language de programmation apprenez-vous ?',
        a : 'javascript',
        b : 'python',
        c : 'java',
        d : 'c++',
        correct : 'a',
    },
    {   
        question:'Combien de pays compte le continent africain ?',
        a : '34',
        b : '55',
        c : '80',
        d : '10',
        correct : 'b',
    },
    {   
        question:'Qui est le president du Cameroun ?',
        a : 'samuel eto`o',
        b : 'nelson mandela',
        c : 'ali bongo',
        d : 'paul biya',
        correct : 'd',
    },
    {   
        question:'Quel est le plus grand departement de l`Ouest ?',
        a : 'mifi',
        b : 'menoua',
        c : 'noun',
        d : ' bamboutos',
        correct : 'c',
    },

];
const quizTitle = document.querySelector('#quiz-title');
const aAnswer = document.querySelector('#a-answer');
const bAnswer = document.querySelector('#b-answer');
const cAnswer = document.querySelector('#c-answer');
const dAnswer = document.querySelector('#d-answer');
const submitBtn = document.querySelector('.btn-submit')

let currentQuiz = 0;

function load(){
    let quizItem = quizData[currentQuiz];
    quizTitle.textContent = quizItem.question;
    aAnswer.textContent = quizItem.a;
    bAnswer.textContent = quizItem.b;
    cAnswer.textContent = quizItem.c;
    dAnswer.textContent = quizItem.d;
}

load();

submitBtn.addEventListener('click',()=>{
    currentQuiz++;
    if(currentQuiz < quizData.length-1){
        load()
    }else{
        alert('soule')
    }
    
})