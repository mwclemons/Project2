$(".dropdown-menu a").click(function() {
  $("#dropdownMenuLink").text($(this).text());
});

$(document).ready(function() {
  updateVariables();
  if (myCurrentCool === 0) {
    $("#spc-btn").removeClass("disabled");
  }
});

$("#enter-name").click(function() {
  $("#gameover-modal").modal("hide");
});

var myScore;

var myHP;
var myOriginalHP;
var myATK;
var myDEF;
var mySPC;
var myCoolInterval;
var myCurrentCool;
var myID;

var bossHP;
// var bossOriginalHP;
var bossATK;
// var bossDEF;
var bossSPC;
var bossCoolInterval;
var bossCurrentCool;
var bossID;

function updateScore(increaseScoreBy) {
  myScore = parseInt($("#score").html());
  $("#score").html(Math.round(myScore + increaseScoreBy));
}

function updateVariables() {
  myHP = parseInt($("#my-health").html());
  myOriginalHP = parseInt($("#char-originalhp").html());
  myATK = parseInt($("#char-attack").html());
  myDEF = parseInt($("#char-defense").html());
  mySPC = $("#char-special").html();
  myCoolInterval = parseInt($("#char-specialInterval").html());
  myCurrentCool = parseInt($("#my-cooldown").html());
  myID = parseInt($("#char-id").html());

  bossHP = parseInt($("#boss-health").html());
  bossOriginalHP = parseInt($("#boss-originalhp").html());
  bossATK = parseInt($("#boss-attack").html());
  bossDEF = parseInt($("#boss-defense").html());
  bossSPC = $("#boss-special").html();
  bossCoolInterval = parseInt($("#boss-specialInterval").html());
  bossCurrentCool = parseInt($("#boss-cooldown").html());
  bossID = parseInt($("#boss-id").html());
}

function evaluateBossSpecial(defense) {
  if (bossCurrentCool === 0) {
    bossCurrentCool = bossCoolInterval + 1;
    bossATK = bossSPC;
  }
  if (defense > bossATK) {
    defense = bossATK;
  }
  $("#my-health").html(Math.round(myHP - bossATK + defense));
  bossCurrentCool--;
}

function evaluateCharSpecial() {
  if (mySPC === "Do 80 damage") {
    $("#boss-health").html(bossHP - 80);
    updateScore(80);
    evaluateBossSpecial(0);
    updateNarrator(80, bossATK, 0, 0);
  } else if (mySPC === "Do 50 damage") {
    $("#boss-health").html(bossHP - 50);
    updateScore(50);
    evaluateBossSpecial(0);
    updateNarrator(50, bossATK, 0, 0);
  } else if (mySPC === "Heal 50%") {
    myHP = myHP + parseInt(myOriginalHP * 0.5);
    // updateScore(myOriginalHP * 0.5);
    evaluateBossSpecial(0);
    updateNarrator(0, bossATK, 0, myOriginalHP * 0.5);
  } else if (mySPC === "Heal 25%") {
    myHP = myHP + parseInt(myOriginalHP * 0.25);
    // updateScore(myOriginalHP * 0.25);
    evaluateBossSpecial(0);
    updateNarrator(0, bossATK, 0, myOriginalHP * 0.25);
  }
}

function updateNarrator(attack, bossAttack, defense, heal) {
  if (attack) {
    $("#fight-narrator").html(
      "You dealt " +
        Math.round(attack) +
        " damage, and suffered " +
        Math.round(bossAttack) +
        " damage."
    );
  } else if (defense) {
    if (defense >= bossAttack) {
      $("#fight-narrator").html(
        "You prevented " + Math.round(defense) + " damage."
      );
    } else {
      $("#fight-narrator").html(
        "You prevented " +
          Math.round(defense) +
          " damage, but still suffered " +
          Math.round(bossAttack - defense) +
          " damage."
      );
    }
  } else if (heal) {
    $("#fight-narrator").html(
      "You healed " +
        Math.round(heal) +
        " worth of HP, but still suffered " +
        Math.round(bossAttack) +
        " damage."
    );
  }
}

function evaluateGameStatus(myHealth, bossHealth) {
  if (myHealth <= 0) {
    // location.href = "/gameover";
    $.get("/api/scores10", function(data, status){
      var lowestHighScore = JSON.stringify(data[0].score);

      if (lowestHighScore > myScore) {
        location.href = "/gameover";
      } else {
        $("#gameover-modal").modal();
      }
    });
  } else if (bossHealth <= 0) {
    myScore = parseInt($("#score").html());
    bossID++;
    location.href =
      "/fight" +
      myID +
      "&" +
      bossID +
      "&" +
      myScore +
      "&" +
      myHealth +
      "z" +
      myCurrentCool;
  }
}

$("#atk-btn").click(function() {
  var sndAttack = new Audio();
  sndAttack.src = "../audio/metal_thud.ogg";
  sndAttack.play();

  updateVariables();

  bossATK = Math.random() * (bossATK - bossATK / 2) + bossATK / 2;
  evaluateBossSpecial(0);

  if (myCurrentCool > 0) {
    myCurrentCool--;
    if (myCurrentCool === 0) {
      $("#spc-btn").removeClass("disabled");
    }
  }

  myATK = Math.random() * (myATK - myATK / 2) + myATK / 2;

  $("#boss-health").html(Math.round(bossHP - myATK));
  $("#boss-cooldown").html(bossCurrentCool);
  $("#my-cooldown").html(myCurrentCool);
  updateScore(myATK);
  updateNarrator(myATK, bossATK, 0, 0);
  evaluateGameStatus(
    parseInt($("#my-health").html()),
    parseInt($("#boss-health").html())
  );
});

$("#def-btn").click(function() {
  var sndDefend = new Audio();
  sndDefend.src = "../audio/windshield_hit_with_bar.ogg";
  sndDefend.play();

  updateVariables();
  bossATK = Math.random() * (bossATK - bossATK / 2) + bossATK / 2;

  evaluateBossSpecial(myDEF);

  if (myCurrentCool > 0) {
    myCurrentCool--;
    if (myCurrentCool === 0) {
      $("#spc-btn").removeClass("disabled");
    }
  }
  if (myDEF > bossATK) {
    myDEF = bossATK;
  }
  $("#boss-cooldown").html(bossCurrentCool);
  $("#my-cooldown").html(myCurrentCool);
  // updateScore(myDEF);
  updateNarrator(0, bossATK, myDEF, 0);
  evaluateGameStatus(
    parseInt($("#my-health").html()),
    parseInt($("#boss-health").html())
  );
});

$("#spc-btn").click(function() {
  if ($("#spc-btn").hasClass("disabled")) {
    var sndWait = new Audio();
    sndWait.src = "../audio/beep_short.ogg";
    sndWait.play();
  } else {
    var sndSpecial = new Audio();
    sndSpecial.src = "../audio/Synthetic_Insects.mp3";
    sndSpecial.play();

    updateVariables();
    evaluateCharSpecial();

    $("#spc-btn").addClass("disabled");
    myCurrentCool = myCoolInterval;
    $("#boss-cooldown").html(bossCurrentCool);
    $("#my-cooldown").html(myCurrentCool);
    evaluateGameStatus(
      parseInt($("#my-health").html()),
      parseInt($("#boss-health").html())
    );
  }
});
