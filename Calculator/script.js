// NOTE: 
// This is the starter file for a blog post "How to build a 
//calculator". You can follow the lesson at
// https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const mainContainer = document.querySelector('.calculator');
const display = mainContainer.querySelector('.calculator__display');
const keys = mainContainer.querySelectorAll('[class^=key]');
const clearBtn = mainContainer.querySelector('#clear');
const equalBtn = mainContainer.querySelector('#equal');

let operatorClicked = false;
let result = "";
let mathExpression = {
    // you can change thet to array of numbers and array of oprators if you want to perform multiple oprations in one shot 
    num1:"" ,
    operation:"" ,
    num2:""
 }

function operate(){
    switch (mathExpression.operation){
        case '+':
            add();
        break;
        case '-':
            subtract();
        break;
        case '*':
            multiply();
        break;
        case '/':
            divide();
        break;

    }
    displayResult();
}
function displayResult(){
     reset();
    display.value = result;
   
}
 function add(){
  result = parseFloat(mathExpression.num1 ) + parseFloat(mathExpression.num2) ;
 }
 function subtract(){
    result = parseFloat(mathExpression.num1) - parseFloat(mathExpression.num2);
 }
 function multiply(){
    result = parseFloat(mathExpression.num1) * parseFloat(mathExpression.num2);
 }
 function divide(){
    result = parseFloat(mathExpression.num1)  / parseFloat(mathExpression.num2);
 }
 function getData(e){
    // seperate data from opration and call other funcions to oprate them
    if(this.dataset.action){
        // handle previus opration result value
      if(result !=="") mathExpression.num1 = result; 
        mathExpression.operation  = this.dataset.action;
        operatorClicked = true ;
      
     
    }else{
        if(!operatorClicked){
            mathExpression.num1 = display.value + this.innerText ;
        }else{
            mathExpression.num2 = mathExpression.num2 + this.innerText ;
        }
    }

    updateDisplay(e);
    return mathExpression;

 }
 function updateDisplay(e){
    display.value = `${mathExpression.num1}${mathExpression.operation}${mathExpression.num2}`;
 }
 function reset(){
    display.value = "";
    mathExpression = {
        num1:"" ,
        operation:"" ,
        num2:""
     }
     operatorClicked = false;

 }


 keys.forEach(key => {
    key.addEventListener('click',getData)
    
 });
 clearBtn.addEventListener('click',()=>{
    result = "";//empty result for new operations
    reset();
    });
 equalBtn.addEventListener('click',operate);