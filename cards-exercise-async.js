function cardFromDraw(draw){
  return draw.cards[0]
}

// Part 1
async function drawCard(deckId = "new"){
  url = `http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
  newDraw = await axios.get(url);
  draw = newDraw.data;
  card = cardFromDraw(draw);
  // console.log(`${card.value} of ${card.suit}`);
  return newDraw.data;
}
// drawOne = drawCard();

// // Part 2
async function drawTwoCards(){
  let cards = await Promise.all([
    drawOne = drawCard(),
    drawTwo = drawCard(drawOne.deck_id),
  ])

  cards.forEach( (card) => {
    card = cardFromDraw(card);
    console.log(`${card.value} of ${card.suit}`);
  })
}
// drawTwoCards();

// // Part 3
function printCard(draw) {
  let card = cardFromDraw(draw);
  let newCard = document.createElement("li");
  let newLI = document.createElement("img");

  newLI.src = card.image;
  newCard.appendChild(newLI);
  table.appendChild(newCard);
}

let btn = document.querySelector("#card-form button");
let table = document.querySelector("#card-table");
let deckId = "new"

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let newDraw = await drawCard(deckId);
  deckId = newDraw.deck_id;
  console.log(newDraw)
  printCard(newDraw);
});
