// Numbers Exercise Using Asynchronous Functions
let favNum = 30;
let favRangeMin = 10;
let favRangeMax = 20;

function addNumData(key, val) {
  numList = document.querySelector("#numbersFacts");
  var newLi = document.createElement("li");
  newLi.innerHTML = `${key} - ${val}`;
  numList.appendChild(newLi);
}

// Part 1
async function favNumFact(num) {
  let url = `http://numbersapi.com/${num}?json`;
  let numFact = await axios.get(url);
  console.log(numFact.data.text);
}

favNumFact(favNum);

// Part 2
async function multiNumFacts(...args){
  let nums = args.join(",");
  let url = `http://numbersapi.com/${nums}?json`;
  let numFacts = await axios.get(url);
  
  for (const [k, v] of Object.entries(numFacts.data)) {
    addNumData(k, v);
  }
}
multiNumFacts(1,2,3);

// Part 3
async function singleNumFacts(num){
  let url = `http://numbersapi.com/${num}?json`;
  let numFacts = await Promise.all([
    axios.get(url),
    axios.get(url),
    axios.get(url),
    axios.get(url),
  ]);

  numFacts.forEach( (numFact) => {
    addNumData(numFact.data.number,numFact.data.text);
  });
}

singleNumFacts(50);