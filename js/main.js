

var cards = [
{
  rank: "queen",
  suit: "hearts",
  cardImage: 'images/queen-of-hearts.png'
},
{
  rank: "queen",
  suit: "diamonds",
  cardImage: 'images/queen-of-diamonds.png'
},
{
  rank: "king",
  suit: "hearts",
  cardImage: 'images/king-of-hearts.png'
},
{
  rank: "king",
  suit: "diamonds",
  cardImage:'images/king-of-diamonds.png'
}
];

var cardsInPlay = [];

var checkForMatch = function(){
    if (cardsInPlay[0] === cardsInPlay[1]) {
      window.setTimeout(function(){
       alert("You found a match!"); console.log('+1 Point');
      }, 500);
      pageReload()
     } else {
       window.setTimeout(function(){
       alert("Sorry, try again."); console.log('-1 Point');
      }, 500)
     }
   };


var flipCard = function(){
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
      if (cardsInPlay.length === 2){
    checkForMatch();
  }
};


var createBoard = function(){
  for(var i = 0; i < cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
};

createBoard();



var resetGame = function(){
document.location.reload();
};

var button = document.getElementById('button');
button.addEventListener('click', resetGame);



var gradebook = {
  scores: [51, 80, 84, 93, 99],
  getAverage: function() {
    this.scores.reduce(function(memo, element){
      return memo + element/this.scores.length;
    });
  }
};
