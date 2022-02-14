
let Cards = []
let Sum = 0
let hasBlackJack = false
let isAlive = false
let CardsEl = document.querySelector("#cards-el")
let SumEl = document.querySelector("#sum-el")
let MessageEl = document.querySelector("#message-el")
let message = ""
let playerEl = document.getElementById("player-el")


let Player = {
    Name : "Jack" ,
    Chips : 200 
}

playerEl.textContent = Player.Name + " : $" + Player.Chips






function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum > 10) {
        return 10
    } else if (randomNum === 1) {
        return 11
    } else { return randomNum }
}




function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    Cards = [firstCard, secondCard]
    Sum = firstCard + secondCard

    renderGame()
}

function renderGame() {

    CardsEl.textContent = "Cards:"
    for (let i = 0; i < Cards.length; i++) {
        CardsEl.textContent += Cards[i] + " "
    }


    SumEl.textContent = "Sum:" + " " + Sum

    if (Sum < 21) {
        message = "Draw a new Card ?"
    } else if (Sum === 21) {
        message = "You have a BlackJack !"
        hasBlackJack = true
    } else {
        message = "You'r out of the game"
        isAlive = false
    }
    MessageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        Sum += card
        Cards.push(card)
        renderGame()
    }
}