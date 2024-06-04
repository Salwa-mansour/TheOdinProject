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
const display = mainContainer.querySelector('.calculator__display input');
const dispalyOprations = mainContainer.querySelector('.calculator__display .oprations')
const keys = mainContainer.querySelectorAll('[class^=key]');
const clearBtn = mainContainer.querySelector('#clear');
const equalBtn = mainContainer.querySelector('#equal');
let startNum = false ;
let result = 0;
let numCounter = 0;
let   numbers=[] ;
let operations=[] ;


function operate(){
    let idxOpratro ;
    let oprator ;
    let idxNumber ;
    let fNum ;
    if(numbers.length ===1){
        //set inial value
        result = numbers[0];
    }else{
     idxOpratro = operations.length-1;
     oprator = operations[idxOpratro];
     idxNumber = numbers.length-1;
     fNum = numbers[idxNumber];
      
    
        switch (oprator){
            case '+':
                add(result,fNum);
            break;
            case '-':
                subtract(result,fNum);
            break;
            case '*':
                multiply(result,fNum);
            break;
            case '/':
                divide(result,fNum);
            break;

        }
    }
 //   displayResult();
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

 function getDataArr(e){
   if(this.dataset.action && !startNum){
    operations.push(this.innerText);
     startNum = true;
     displayExpretion(this.innerText);
     operate();
     displayResult();
     console.log(result)
   }else  if(startNum && !this.dataset.action  || numbers.length === 0 && !this.dataset.action ){
            numbers.push(this.innerText);
            startNum = false;
            displayExpretion(this.innerText);

        }else if(!startNum && !this.dataset.action) {
        numbers[numbers.length - 1] =
        numbers[numbers.length - 1] + this.innerText;
    
        displayExpretion(this.innerText)
   }
   
    console.log({numbers,operations})
  
 }


 function displayExpretion( item){
   dispalyOprations.innerText = dispalyOprations.innerText + item;
 }
 
 function displayResult(){
    display.value = result;
 }
 function reset(){
    display.value = "";
    numbers = [] ;
    operations = [] ;
        
 }


 keys.forEach(key => {
    key.addEventListener('click',getDataArr)
    
 });
 clearBtn.addEventListener('click',()=>{
    result = "";//empty result for new operations
    reset();
    });
 equalBtn.addEventListener('click',operate);