// $(".dropdown-menu a").click(function(){
//   $("#dropdownMenuLink").text($(this).text());
// });
var myHP;
var myATK;
var myDEF;
var mySPC;
var myCoolInterval;
var myCurrentCool;

var bossHP;
var bossATK;
var bossDEF;
var bossSPC;
var bossCoolInterval;
var bossCurrentCool;

$("#atk-btn").click(function() {

  var sndAttack = new Audio();
  sndAttack.src = "../audio/metal_thud.ogg";
  sndAttack.play();
  
  myHP = parseInt($("#my-health").html());
  myATK = parseInt($("#char-attack").html());
  myDEF = parseInt($("#char-defense").html());
  mySPC = $("#char-special").html();
  myCoolInterval = parseInt($("#char-specialInterval").html());
  myCurrentCool = parseInt($("#my-cooldown").html());

  bossHP = parseInt($("#boss-health").html());
  bossATK = parseInt($("#boss-attack").html());
  bossDEF = parseInt($("#boss-defense").html());
  bossSPC = $("#boss-special").html();
  bossCoolInterval = parseInt($("#boss-specialInterval").html());
  bossCurrentCool = parseInt($("#boss-cooldown").html());

  if (bossCurrentCool === 0) {
    bossCurrentCool = bossCoolInterval + 1;
    if (bossSPC === "ATK300") {
      $("#my-health").html(myHP - bossATK * 3);
      $("#boss-health").html(bossHP - myATK);
    }
  } else {
    $("#my-health").html(myHP - bossATK);
    $("#boss-health").html(bossHP - myATK);
  }
  bossCurrentCool--;
  if (myCurrentCool > 0) {
    myCurrentCool--;
    if (myCurrentCool === 0) {
      $("#spc-btn").removeClass("disabled");
    }
  }

  $("#boss-cooldown").html(bossCurrentCool);
  $("#my-cooldown").html(myCurrentCool);
});

$("#def-btn").click(function() {
  
  var sndDefend = new Audio();
  sndDefend.src = "../audio/windshield_hit_with_bar.ogg";
  sndDefend.play();

  myHP = parseInt($("#my-health").html());
  myATK = parseInt($("#char-attack").html());
  myDEF = parseInt($("#char-defense").html());
  mySPC = $("#char-special").html();
  myCoolInterval = parseInt($("#char-specialInterval").html());
  myCurrentCool = parseInt($("#my-cooldown").html());

  bossHP = parseInt($("#boss-health").html());
  bossATK = parseInt($("#boss-attack").html());
  bossDEF = parseInt($("#boss-defense").html());
  bossSPC = $("#boss-special").html();
  bossCoolInterval = parseInt($("#boss-specialInterval").html());
  bossCurrentCool = parseInt($("#boss-cooldown").html());

  if (bossCurrentCool === 0) {
    bossCurrentCool = bossCoolInterval + 1;
    if (bossSPC === "ATK300") {
      $("#my-health").html(myHP - bossATK * 3 + myDEF);
    }
  } else {
    $("#my-health").html(myHP - bossATK + myDEF);
  }
  bossCurrentCool--;
  if (myCurrentCool > 0) {
    myCurrentCool--;
    if (myCurrentCool === 0) {
      $("#spc-btn").removeClass("disabled");
    }
  }

  $("#boss-cooldown").html(bossCurrentCool);
  $("#my-cooldown").html(myCurrentCool);
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
  

    myHP = parseInt($("#my-health").html());
    myATK = parseInt($("#char-attack").html());
    myDEF = parseInt($("#char-defense").html());
    mySPC = $("#char-special").html();
    myCoolInterval = parseInt($("#char-specialInterval").html());
    myCurrentCool = parseInt($("#my-cooldown").html());

    bossHP = parseInt($("#boss-health").html());
    bossATK = parseInt($("#boss-attack").html());
    bossDEF = parseInt($("#boss-defense").html());
    bossSPC = $("#boss-special").html();
    bossCoolInterval = parseInt($("#boss-specialInterval").html());
    bossCurrentCool = parseInt($("#boss-cooldown").html());

    if (mySPC === "ATK200") {
      $("#boss-health").html(bossHP - myATK * 2);
    } else if (mySPC === "ATK250") {
      $("#boss-health").html(bossHP - myATK * 2.5);
    } else if (mySPC === "HEAL50") {
      myHP = myHP * 1.5;
    } else if (mySPC === "HEAL25") {
      myHP = myHP * 1.25;
    }

    if (bossCurrentCool === 0) {
      bossCurrentCool = bossCoolInterval + 1;
      if (bossSPC === "ATK300") {
        $("#my-health").html(myHP - bossATK * 3 + myDEF);
      }
    } else {
      $("#my-health").html(myHP - bossATK + myDEF);
    }
    bossCurrentCool--;

    $("#spc-btn").addClass("disabled");
    myCurrentCool = myCoolInterval;
    $("#boss-cooldown").html(bossCurrentCool);
    $("#my-cooldown").html(myCurrentCool);
  }
});
