
// Initialize countries array

let countries;

// Get Countries from API

async function getCountries() {
  console.log("getCountries");
  let results = await fetch("https://countries.trevorblades.com", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    // Define request

    body: JSON.stringify({
      query: `query GetCountry {
        countries(filter: { code: { ne: "MO" } }) {
          name
          emoji
          code
          capital
        }
      }`,
    }),
  });
  countries = await results.json();
  console.log(countries.data);
  startRound(countries);
}

let round = 1;
let rounds = 5;
let points = 0;
let randomCountry;

function startRound() {
  // show easteregg part
  document.getElementById("easteregg").style.display = "block";

  // randomNumber to pick 1 random country
  let randomNumber = Math.floor(
    Math.random() * countries.data.countries.length
  );
  randomCountry = countries.data.countries[randomNumber];
  document.getElementById("eastereggQuestion").innerHTML =
    "What is the capital of " +
    randomCountry.name +
    " " +
    randomCountry.emoji +
    " ?";

  // get false answers and shuffle
  const shuffledArray = createAnswerArray(randomCountry, countries);

  document.getElementById("answer1").value = shuffledArray[0].capital;
  document.getElementById("labelAnswer1").innerHTML = shuffledArray[0].capital;

  document.getElementById("answer2").value = shuffledArray[1].capital;
  document.getElementById("labelAnswer2").innerHTML = shuffledArray[1].capital;

  document.getElementById("answer3").value = shuffledArray[2].capital;
  document.getElementById("labelAnswer3").innerHTML = shuffledArray[2].capital;
  document.getElementById("rounds").innerHTML = round + " / " + rounds;
  document.getElementById("points").innerHTML = points;
}

// creates Array of answers and shuffle it
function createAnswerArray(correctAnswer, countries) {
  let answerArray = [];
  let randomNumber;

  // add correct answer first
  answerArray.push(correctAnswer);

  // pick random countries unntil array is full
  while (answerArray.length < 3) {
    randomNumber = Math.floor(Math.random() * countries.data.countries.length);
    let country = countries.data.countries[randomNumber];
    // check if country has a capital, push only when it has one
    if (country.capital !== "") {
      answerArray.push(country);
    }
  }

  // shuffle
  const shuffledArray = answerArray.sort(() => Math.random() - 0.5);

  return shuffledArray;
}

// check if user given answer is correct
function checkAnswer() {
  let element = document.getElementsByName("quiz");
  let selected = 0;
  // loop through every radiobutton
  for (i = 0; i < element.length; i++) {
    // when checked than compare with correct answer
    if (element[i].checked) {
      selected++;
      if (element[i].value === randomCountry.capital) {
        points++;
        document.getElementById("result").innerHTML = "Verdadero";
      } else {
        document.getElementById("result").innerHTML = "Falso";
      }
    }
    // uncheck radio
    element[i].checked = false;
  }

  if (selected === 0) {
    document.getElementById("result").innerHTML = "No respuesta";
  } else {
    // increase round and start next round
    round++;
    if (round <= rounds) {
      document.getElementById("rounds").innerHTML = round + " / " + rounds;
      document.getElementById("points").innerHTML = points;
      startRound();
    } else {
      showResult();
    }
  }
}

function showResult() {
  const container = document.getElementById('fireworks')
  const fireworks = new Fireworks.default(container)
  fireworks.start();
  document.getElementById("result").innerHTML = "";
  document.getElementById("gameResult").style.display = "block";
}

function resetGame() {
  document.getElementById("gameResult").style.display = "none";

  round = 0;
  points = 0;
  startRound();
}

