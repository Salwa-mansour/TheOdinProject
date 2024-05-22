
const screen =document.querySelector('.screen');
const color = document.querySelector('#color');
const clearBtn = document.querySelector('#clear');
const fillBtn = document.querySelector('#fill');


function generatePoints(){
  let screenWidth = screen.offsetWidth;
  let screenHeight = screen.offsetHeight;
  let xPoints =Math.round(screenWidth / 10) ;
  let yPoints =Math.round(screenHeight / 10) ;
  let points  = xPoints * yPoints;
  for(let i = 0 ; i < points  ;i++){
  const div = document.createElement('div');
  div.classList.add('point');
  screen.appendChild(div);
}
 console.log(xPoints)
}

function colorize(e){
    console.log(e.target.classList)

    if(e.target.classList.contains('point')){
    e.target.style.backgroundColor = color.value;
    e.target.classList.add(`color-${color.value}`)
    }
}
function clearScreen(){
  items =  screen.querySelectorAll('[class*="color"]');
  console.log(items)
  items.forEach(item => {
    item.style.backgroundColor = 'transparent';
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
clearBtn.addEventListener('click',clearScreen);
fillBtn.addEventListener('click',colorScreen)
