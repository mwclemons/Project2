module.exports = {

var attack = new Audio();
  attack.src = "../audio/metal_thud.ogg";
  function attackContent(num) {
    attack.play();
  }
  var defend = new Audio();
    defend.src = "../audio/windshield_hit_with_bar.ogg";
    function defendContent(num) {
        defend.play();
  }
    var special = new Audio();
    special.src = "../audio/Synthetic_Insects.mp3";
    function specialContent(num) {
        special.play();
  }
   var wait = new Audio();
    wait.src = "../audio/beep_short.ogg";
    function waitContent(num) {
        wait.play();
  }
  var alarm = new Audio();
    alarm.src = "../audio/alarm_clock.ogg";
    function alarmContent(num) {
        alarm.play();
  }
    var background = new Audio();
    background.src = "../audio/sci_fi_vortex.ogg";
    function bgContent(num) {
        background.play();
  }

 }