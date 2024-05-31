// NOTE: 
// This is the starter file for a blog post "How to build a 
//calculator". You can follow the lesson at
// https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
/*
-handle mutliple opraoin
  user reduce along with foreach and `` to generate result from both arrays
-handle . more than once (disaple it)
-handle user clicking = ,*,% in the begnging
- handle user clicking - ,+ in the biging
- handle back space 
 */
// ===============

const mainContainer = document.querySelector('.calculator');
const display = mainContainer.querySelector('.calculator__display');
const keys = mainContainer.querySelectorAll('[class^=key]');
const clearBtn = mainContainer.querySelector('#clear');
const equalBtn = mainContainer.querySelector('#equal');

let operatorClicked = false;
let startNum = false ;
let result = 0;
let numCounter = 0;
let mathExpression = {
    // you can change thet to array of numbers and array of oprators if you want to perform multiple oprations in one shot 
    numbers:[] ,
    operations:[] ,
    
 }

function operate(result,num,operation){
    switch (operation){
        case '+':
            add(result,num);
        break;
        case '-':
            subtract(result,num);
        break;
        case '*':
            multiply(result,num);
        break;
        case '/':
            divide(result,num);
        break;

    }
    displayResult();
}
function displayResult(){
     reset();
    display.value = result;
   
}
 function add(num1,num2){
  result = parseFloat(num1) + parseFloat(num2) ;
 }
 function subtract(num1,num2){
    result = parseFloat(num1) - parseFloat(num2);
 }
 function multiply(num1,num2){
    result = parseFloat(num1) * parseFloat(num2);
 }
 function divide(num1,num2){
    result = parseFloat(num1)  / parseFloat(num2);
 }
 function getData(e){
 
    // seperate data from opration and call other funcions to oprate them
    if(this.dataset.action ){
        // handle previus opration result value
    //   if(result !=="") mathExpression.num1 = result;
    // && operatorClicked === false 
        mathExpression.operations.push(this.dataset.action);
        operatorClicked = true ;
      
     
    }else{ 
        let num = this.innerText;
        if(!operatorClicked){
        //   num = display.value + this.innerText ;
          mathExpression.numbers[numCounter] = mathExpression.numbers[numCounter] + this.innerText;
        }else{
            num =  this.innerText ;
            mathExpression.numbers.push(num);
            numCounter++;
        }
        
        
        operatorClicked = false ;      
    }
    console.log({numCounter});
    console.log(mathExpression)
    updateDisplay(e,numCounter);
    return mathExpression;

 }
 function getDataArr(e){
   if(this.dataset.action && !startNum){
    mathExpression.operations.push(this.innerText);
  //   operatorClicked = true ; 
     startNum = true;
    // console.log(mathExpression.operations.length)
    if(mathExpression.numbers.length ===1){
        //set inial value
        result = mathExpression.numbers[0];
    }else{
       let idxOpratro = mathExpression.operations.length-1;
       let oprator = mathExpression.operations[idxOpratro];
       let idxNumber = mathExpression.numbers.length-1;
       let fNum = mathExpression.numbers[idxNumber];
        operate(result,fNum,oprator)
    
    
        console.log({result,fNum,oprator});
    }
        console.log(mathExpression)
    
   // console.log('path1')
   }else{
        if(startNum && !this.dataset.action  || mathExpression.numbers.length === 0 && !this.dataset.action ){
            mathExpression.numbers.push(this.innerText);
            startNum = false;
         //   console.log('path2')
         
        }else {
          //  console.log('path3')
        //  mathExpression.n  =
       // console.log(mathExpression.numbers.length)
        mathExpression.numbers[mathExpression.numbers.length - 1] =
        mathExpression.numbers[mathExpression.numbers.length - 1] + this.innerText;
    }
   
   }
   displayExpretion(this.innerText)
 }
 function displayExpretion( item){
   display.value = display.value + item;
 }
 
 function updateDisplay(e,i){
    display.value = `${mathExpression.numbers}${mathExpression.operations}`;
 }
 function reset(){
    display.value = "";
    mathExpression = {
        numbers:[] ,
        operations:[] ,
        
     }
     operatorClicked = false;

 }


 keys.forEach(key => {
    key.addEventListener('click',getDataArr)
    
 });
 clearBtn.addEventListener('click',()=>{
    result = "";//empty result for new operations
    reset();
    });
 equalBtn.addEventListener('click',operate);