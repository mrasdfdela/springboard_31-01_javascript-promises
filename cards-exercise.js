function logCard(draw) {
  card = draw.data.cards[0];
  console.log(`${card.value} of ${card.suit}`);
}

function drawCard(deckId='new') {
  return axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
};

// Part 2
let deckId = 'new'
// drawCard()
//   .then( (req) => {
//     deckId = req.data.deck_id;
//     console.log(deckId)
//     logCard(req);
//     return drawCard(deckId);
//   })
//   .then( (req) => {
//     deckId = req.data.deck_id;
//     console.log(deckId)
//     logCard(req);
//     return drawCard(req.data.deck_id);
//   });

// Part 3
btn = document.querySelector("#card-form button");
table = document.querySelector("#card-table");

btn.addEventListener( 'click', (evt) => {
  evt.preventDefault();
  drawCard(deckId)
    .then( (req) => {
      deckId = req.data.deck_id;
      console.log(deckId);
      logCard(req);
      // console.log(req.data.cards[0].image)
      printCard(req);
    });
})

function printCard(draw) {
  let newCard = document.createElement('li');
  let newLI = document.createElement('img');
  newLI.src = draw.data.cards[0].image
  // console.log(newLI)
  newCard.appendChild(newLI);
  table.appendChild(newCard);
}