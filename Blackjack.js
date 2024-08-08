let player = {
  Name: "Shalak",
  Chips: 188,
};
let sum = 0;
let card = [];

console.log(sum);
let hasBlackjack = false;
let isAlive = false;
let massage = "";

let messageEl = document.getElementById("message-el");
console.log(messageEl);
let sumEl = document.getElementById("sum-el");
console.log(sumEl);
let cardEl = document.getElementById("card-el");
console.log(cardEl);
let playerEl = document.getElementById("player-el");
console.log(playerEl);
playerEl.textContent = player.Name + ": $" + player.Chips;

function getRandomCard() {
  let RandomNumber = Math.floor(Math.random() * 13) + 1;
  if (RandomNumber > 10) {
    return 10;
  } else if (RandomNumber === 1) {
    return 11;
  } else {
    return RandomNumber;
  }
}

function startgame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let SecondCard = getRandomCard();
  sum = firstCard + SecondCard;
  card = [firstCard, SecondCard];
  rendergame();
}

function rendergame() {
  cardEl.textContent = "Cards :";

  for (let i = 0; i < card.length; i++) {
    cardEl.textContent += card[i] + " ";
  }

  sumEl.textContent = "Sum : " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo!You got the Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    console.log("Drawing a new card from thr deck!");
    let cards = getRandomCard();
    sum += cards;
    card.push(cards);
    console.log(cards);
    rendergame();
  }
}
