// NOTE: 
// This is the starter file for a blog post "How to build a 
//calculator". You can follow the lesson at
// https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const mainContainer = document.querySelector('.calculator');
const display = mainContainer.querySelector('.calculator__display');
const keys = mainContainer.querySelector('button');
const operatorClicked = false;
const result;


function operate(operator){
    switch (operator){
    case 'add':
            add();
        break;
        case 'subtract':
            subtract();
        break;
        case 'multiply':
            multiply();
        break;
        case 'divide':
            divide();
        break;

    }
}
 function add(num1,num2){
    
 }
 function subtract(num1,num2){

 }
 function multiply(num1,num2){

 }
 function divide(num1,num2){

 }
 function getData(){
    // seperate data from opration and call other funcions to oprate them
    let operator;
 }
 function updateDisplay(){

 }
 function reset(){

 }

