const selectionBtns = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTIONS = [
    {
        name:'rock',
        emoji:'✊',
        beats:'scissors'
    },
    {
        name:'paper',
        emoji:'✋',
        beats:'rock'
    },
    {
        name:'scissors',
        emoji:'🤞',
        beats:'paper'
    }
]
// -------------
function makeSelection(selection){
    const computerSelection = randomSelection();
    const yourWin = isWinner(selection,computerSelection);
    const computerWin = isWinner(computerSelection,selection);

    addSelectionResult(computerSelection,computerWin);
    addSelectionResult(selection,yourWin);
  if(yourWin) incrementScore(yourScoreSpan);
  if(computerWin) incrementScore(computerScoreSpan);
}


function addSelectionResult(selection,winner){
    const div = document.createElement('div');
    div.innerText = selection.emoji,
    div.classList.add('result-selection');
    if(winner) div.classList.add('winner');
    finalColumn.after(div);
}
function randomSelection(){
    const randomIndex = Math.floor(Math.random()*SELECTIONS.length);
    return SELECTIONS[randomIndex];
}

function isWinner(selection ,opponentSelection){
    return selection.beats === opponentSelection.name;
}
function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

// ------------
 selectionBtns.forEach(selectionBtn =>{
    selectionBtn.addEventListener('click',(e)=>{
    const selectionName = selectionBtn.dataset.selection;
    const selection = SELECTIONS.find(selection =>selection.name === selectionName);

    makeSelection(selection);
    });
});