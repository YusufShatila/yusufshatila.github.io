let player1S = 0;
let player2S = 0;

let player1Score= document.getElementById('player1Score')
let player2Score= document.getElementById('player2Score')
let playerText = document.getElementById('playerText')
let player1Name = document.getElementById('player1')
let player2Name = document.getElementById('player2')
let play_again = document.getElementById('play_again')
let restart = document.getElementById('restart')
const boxes = [...document.querySelectorAll('.box')];


const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
let spaces = Array(9).fill(null)

const startGame = () => {
      const boxes = [...document.querySelectorAll('.box')];
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', boxClicked);
      }
    }

function boxClicked(e) {
    const id = e.target.id

    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if(playerHasWon() !==false){
          if (currentPlayer === 'X') {
            playerText.innerHTML = `${player1Name.value} has won!`
            player1S += 1
            player1Score.innerText = player1S.toString();
            
        } else {
          playerText.innerHTML = `${player2Name.value} has won!`
          player2S += 1
          player2Score.innerText = player2S.toString();
        }

        
           
        }

        if (currentPlayer === X_TEXT) {
          currentPlayer = O_TEXT;
        } else {
          currentPlayer = X_TEXT;
        }

    }
}

const win_condition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon() {
  for (const condition of win_condition) {
      let [a, b, c] = condition;

      if (spaces[a] && (spaces[a] === spaces[b] && spaces[a] === spaces[c])) {
          if (spaces[a] === 'X') {
              return 'Player 1 wins';
          } else if (spaces[a] === 'O') {
              return 'Player 2 wins';
          }
      }
  }
  return false;
}



play_again.addEventListener('click', again)

function again() {
    spaces.fill(null)


    boxes.forEach( box => {
        box.innerText = ''
        box.style.backgroundColor=''
    })

    currentPlayer = X_TEXT
    playerText.innerHTML = ''

    
}

restart.addEventListener('click', restart_game)

function restart_game(){
  spaces.fill(null)
  player1Name.value = ''
  player2Name.value = ''
  player2Score.innerText = ''
  player1Score.innerText = ''
    boxes.forEach( box => {
        box.innerText = ''
        box.style.backgroundColor=''
    })

    currentPlayer = X_TEXT
    playerText.innerHTML = ''
    
}



startGame()

