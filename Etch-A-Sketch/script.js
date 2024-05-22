
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
    if(options.value.match('normal')){
        e.target.style.backgroundColor = color.value;
        console.log('normal',color.value)
    }else if(options.value.match('shader')){
        e.target.addEventListener('mouseleave',shaderColoring);
        console.log('shader')
    }
   
  //  console.log(e.target)
    }
 
}
function shaderColoring(e){
   
     let movedOnCounter = parseInt(e.target.dataset.movedOn) /* how many times moved on */
     if(movedOnCounter < 10){
     this.dataset.movedOn = movedOnCounter + 1 ;
     this.style.opacity = `${this.dataset.movedOn * 10 }%`;
     this.style.backgroundColor = '#000';
   
    }
}
function resetScreen(){
const  items =  screen.querySelectorAll('[class*="color"]');

  items.forEach(item => {
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
    screen.replaceChildren();//remove all points
    generatePoints();
});
