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

// get elements from DOM

const containerDisplay = document.querySelector('.container');
const question = document.querySelector('.question');
const answerA = document.getElementById('a-answer');
const answerB = document.getElementById('b-answer');
const answerC = document.getElementById('c-answer');
const answerD = document.getElementById('d-answer');
const btnSubmit = document.querySelector('.btn-submit');
const inputSelected = document.querySelectorAll('input[type=radio]')

let currentQuizData = 0;
let score = 0;

// function to load the container

function containerLoad(){
    unselectedAnswer();
    // get item from quizData 
    let quizDataItem = quizData[currentQuizData];
    question.textContent = quizDataItem.question;
    answerA.textContent = quizDataItem.a;
    answerB.textContent = quizDataItem.b;
    answerC.textContent = quizDataItem.c;
    answerD.textContent = quizDataItem.d;
}
containerLoad();

// Go to the next question  and will use button submit for that

btnSubmit.addEventListener('click',()=>{
    let answer = selectedAnswer();
// if any radio is not checked the submit button wont go to the next
    if(answer){
        if(answer === quizData[currentQuizData].correct){
            score++;
        }

        currentQuizData++;
        if(currentQuizData < quizData.length){
            containerLoad();
        }else{
            if(score === quizData.length){
                containerDisplay.innerHTML = `<h2>Felicitation , vous avez tout trouve !!!</h2> 
                
                <button class='btn-reload' onclick='location.reload()'>Reload</button>
                `;
              
            }else if(score === 0){
                containerDisplay.innerHTML = `<h2>Vous avez tout rate, desole !!!</h2>
                
                <button class='btn-reload' onclick='location.reload()'>Reload</button>
                `;
               
            }else{
                containerDisplay.innerHTML = `<h2>Vous avez trouve ${score} reponse(s) sur ${quizData.length} !!!</h2>
                
                <button class='btn-reload' onclick='location.reload()'>Reload</button>
                `;
                
            }
        }
    }
})

/* function to select radio checked and for that we wil get those selected from inputs
*/
function selectedAnswer(){
    let answer = undefined;
    inputSelected.forEach((selected)=>{
        if(selected.checked){
            answer = selected.id;
        }
    })
    return answer
}
// unselect the next radio button

function unselectedAnswer(){
    inputSelected.forEach((selected)=>{
        selected.checked = false;
    })
}