const toggleBox = document.querySelector('.toggle-box');
const logo = document.querySelector('#logo');
const toggleBtn = document.querySelector('.toggle-btn')
const darkBtn = document.querySelector('.dark-btn');
const lightBtn = document.querySelector('.light-btn');
const container = document.querySelector('.container');

darkBtn.addEventListener('click',()=>{
    toggleBtn.style.left = '60%';
    toggleBtn.style.backgroundColor = '#D2D4D5';
    document.body.style.backgroundColor = '#262626';
    document.body.style.color = '#D2D4D5';
    toggleBox.style.backgroundColor = '#262626';
    toggleBox.style.borderColor = '#D2D4D5';
    logo.style.color = '#D2D4D5';
});

lightBtn.addEventListener('click',()=>{
    toggleBtn.style.left = '5%';
    toggleBtn.style.backgroundColor = '#262626';
    document.body.style.backgroundColor = '#D2D4D5';
    document.body.style.color = '#262626';
    toggleBox.style.backgroundColor = '#D2D4D5';
    toggleBox.style.borderColor = '#262626';
    logo.style.color = '#262626';
   
});