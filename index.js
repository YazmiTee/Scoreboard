// let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl =document.getElementById("home-score")
let homeScore = 0

// let awayScoreBtnOne = document.getElementById("away-score-btn-1")
let awayStoreEl =document.getElementById("away-score")
let awayScore = 0

// Functions for the home team buttons

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

// Functions for the away team buttons

function increaseawayScoreOne(){
    awayScore += 1
    awayStoreEl.textContent = awayScore
}

function increaseawayScoreTwo(){
    awayScore += 2
    awayStoreEl.textContent = awayScore
}

function increaseawayScoreThree(){
    awayScore += 3
    awayStoreEl.textContent = awayScore
}

function resetScore(){
    homeScore = 0
    awayScore = 0
    homeStoreEl.textContent = homeScore
    awayStoreEl.textContent = awayScore
}