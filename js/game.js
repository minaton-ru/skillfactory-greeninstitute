const numDivs = 36;
const maxHits = 10;

    let hits = 0;
let firstHitTime = 0;
function round() {
  $(".target").removeClass("target");
  let divSelector = randomDivId();
  $(divSelector).addClass("target");
  $(divSelector).text(hits + 1);
  if (hits === 1) { firstHitTime = getTimestamp() };
  if (hits === maxHits) {   
    endGame();
  }
}

function endGame() {
  $(".game-field").text("");
  $("#playGround").addClass("d-none");
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);
  
  $("#win-message").removeClass("d-none");
}

function handleClick(event) {
  
  if ($(event.target).hasClass("target")) {
    $(".game-field").text("");
    hits = hits + 1;  
    round();
  } 
  // TODO: как-то отмечать если мы промахнулись? См CSS класс .miss
}

function init() {  
    
    $("#playGround").addClass("d-none");
  
  $("#button-reload").click(function() {
    hits = 0;
firstHitTime = 0;

    $("#playGround").removeClass("d-none");
    round();
    $("#win-message").addClass("d-none");
    $(".game-field").click(handleClick);
  });
}

$(document).ready(init);
