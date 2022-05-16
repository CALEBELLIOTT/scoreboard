let home = "home"
let away = "away"
let scores = {
  home: 0,
  away: 0
}

function incrementScore(team, points) {
  if (team == "home") {
    scores.home += points
    console.log("home score is " + scores.home);
  }
  else {
    scores.away += points
    console.log("Away score is " + scores.away);
  }
  saveScore()
  drawScores()
}

function drawScores() {
  document.getElementById("home-score").innerHTML = "  " + scores.home
  document.getElementById("away-score").innerHTML = "  " + scores.away
}


function resetScore() {
  scores.home = 0
  scores.away = 0
  saveScore()
  drawScores()
}

function saveScore() {
  window.localStorage.setItem("scores", JSON.stringify(scores))
}

function loadScores() {
  scores = JSON.parse(window.localStorage.getItem("scores"))
  console.log(scores);
}

loadScores()
drawScores()

