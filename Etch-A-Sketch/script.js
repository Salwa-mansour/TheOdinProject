
const screen =document.querySelector('.screen');
const controls = document.querySelector('.controls')
const color = controls.querySelector('#color');
const clearBtn = controls.querySelector('#clear');
const fillBtn = controls.querySelector('#fill');
const options = controls.querySelector('#options');
const pointSize = controls.querySelector('#point-size');


function generatePoints(){
  
  let screenWidth = screen.offsetWidth;
  let screenHeight = screen.offsetHeight;
  let diminutions =parseInt(pointSize.value) ;
  console.log(diminutions)
  let xPoints =Math.round(screenWidth / diminutions) ;
  let yPoints =Math.round(screenHeight / diminutions) ;
  let points  = xPoints * yPoints;
      for(let i = 0 ; i < points  ;i++){
      const div = document.createElement('div');
      div.classList.add('point');
      div.setAttribute("data-moved-on", 0);
      div.style.width =`${diminutions}px`;
      div.style.height =`${diminutions}px`;
      screen.appendChild(div);
    }

}


function colorize(e){
 
    if(e.target.classList.contains('point')){
        e.target.classList.add(`color`);

    if(options.value.match('shader')){
        e.target.addEventListener('mouseleave',shaderColoring);
    }else  if(options.value.match('normal')){
        e.target.style.backgroundColor = color.value;
        e.target.style.opacity ='100%' ;// override any older opacity change
         // unbind any shader eventListener from old shader mood selection
         e.target.removeEventListener('mouseleave',shaderColoring);
        console.log('remove eventlistner1')
    }
   
  //  console.log(e.target)
    }
 
}
function shaderColoring(e){
  screen.style.backgroundColor = '#fff';
  let movedOnCounter = parseInt(e.target.dataset.movedOn) /* how many times moved on */
     if(movedOnCounter < 10){
     this.dataset.movedOn = movedOnCounter + 1 ;
     this.style.opacity = `${this.dataset.movedOn * 10 }%`;
     this.style.backgroundColor = '#000';
   
    }else{
      // unbind event listener after 10 times of mouse event (item reach 100% opacity)
       e.target.removeEventListener('mouseleave',shaderColoring);
     
    }
}
function resetScreen(){
const  items =  screen.querySelectorAll('[class*="color"]');

  items.forEach(item => {
   item.classList.remove('color');
   item.dataset.movedOn = 0;
   item.style.backgroundColor = 'transparent';
   item.style.opacity = '100%';
  });
  screen.style.backgroundColor = '#fff';
}
function colorScreen(){
   
    screen.style.backgroundColor = color.value;
}

generatePoints();
window.addEventListener('resize',generatePoints);
 screen.addEventListener('mousemove',colorize);
//screen.addEventListener('mouseenter',colorize);
clearBtn.addEventListener('click',resetScreen);
fillBtn.addEventListener('click',colorScreen);
options.addEventListener('change', resetScreen);
pointSize.addEventListener('change',()=>{
    screen.replaceChildren();//remove all old size points
    generatePoints();
});
