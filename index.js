let homeScore = document.querySelector("#home-score")
let guestScore = document.querySelector("#guest-score")
let homeScoreValue = 0
let guestScoreValue = 0

function updateScore(element, scoreValue, increament){
    scoreValue += increament
    element.textContent = scoreValue
    return scoreValue
}

function increaseHomeScoreByOne(){
    homeScoreValue = updateScore(homeScore, homeScoreValue, 1)  
}
function increaseHomeScoreByTwo(){
    homeScoreValue = updateScore(homeScore, homeScoreValue, 2)   
}
function increaseHomeScoreByThree(){
    homeScoreValue = updateScore(homeScore, homeScoreValue, 3)   
}

function increaseGuestScoreByOne(){
    guestScoreValue = updateScore(guestScore, guestScoreValue, 1)
}
function increaseGuestScoreByTwo(){
    guestScoreValue = updateScore(guestScore, guestScoreValue, 2)
}
function increaseGuestScoreByThree(){
    guestScoreValue = updateScore(guestScore, guestScoreValue, 3)
}

function clearHomeScore(){
    homeScoreValue = 0
    homeScore.textContent = homeScoreValue
}
function clearGuestScore(){
    guestScoreValue = 0
    guestScore.textContent = guestScoreValue
}