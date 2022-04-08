function start() {
    isAlive = true

    let card1 = randomNumber()
    let card2 = randomNumber()
    cards = [card1,card2]
    sum = cards[0]+cards[1]

    renderGame()
}
let cards = []
let sum= 0
isAlive = false
blackJack = false
let left = "click start to start the game!"

let cardsEl = document.getElementById("card-el")
let sumEl = document.querySelector("#sum-el")
let changeEl = document.getElementById("change-el")
//start function


// let orms = cards[0]
//     // console.log(orms) 
//     cardsEl.innerText= "cards: " + orms


function randomNumber(){
   let p = Math.floor(Math.random()*13)
   return p+1
}

function renderGame(){
    cardsEl.textContent = "cards:" + " "
    for(let i=0;i<cards.length;i++ ){
        cardsEl.textContent += cards[i]+" "
    }

    sumEl.textContent = 'sum: '+ sum
if(sum < 21) {
   left = "do you want a new card ?"
//    changeEl.innerText=left
}
else if (sum === 21) {
    left= "It's a black Jack"
    blackJack = true
}
else {
    left= "you're out! better luck next time"
    isAlive = false
}

changeEl.innerText = left
}

function newcard() {
    if(isAlive === true && blackJack === false){
    let card3 = randomNumber()
    sum += card3
    cards.push(card3)
    renderGame()
    }
}