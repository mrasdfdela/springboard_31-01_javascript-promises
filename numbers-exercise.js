// Part One
let favNum = 30;
let favRangeMin = 10;
let favRangeMax = 20;

// 1.1
const partOneQueryOne = `http://numbersapi.com/${favNum}?json`;
favNumQueryOne = axios.get(partOneQueryOne);
favNumQueryOne
  .then( req => {
    console.log("Part One, Query One:")
    console.log(req)
  })

// 1.2
const partOneQueryTwo = `http://numbersapi.com/${favRangeMin}..${favRangeMax},${favNum}?json`;
let favNumQueryTwo = axios.get(partOneQueryTwo);

favNumQueryTwo
  .then((req) => {
    for (const [k, v] of Object.entries(req.data)) {
      addNumData(k, v);
    }
  })
  .catch((err) => console.log(err));

  function addNumData(key, val){
    numList = document.querySelector("#numbersFacts");
    var newLi = document.createElement('li');
    newLi.innerHTML = `${key} - ${val}`;
    numList.appendChild(newLi);
  }

// 1.3
axios.get(partOneQueryOne)
  .then( req => {
    addNumData(req.data.number,req.data.text);
    return axios.get(partOneQueryOne);
  })
  .then( req => {
    addNumData(req.data.number, req.data.text);
    return axios.get(partOneQueryOne);
  })
  .then( req => {
    addNumData(req.data.number, req.data.text);
    return axios.get(partOneQueryOne);
  })
  .then( req => {
    addNumData(req.data.number, req.data.text);
    return axios.get(partOneQueryOne);
  })
  .catch( (err) => console.log(`Oh noes! ${err}`))