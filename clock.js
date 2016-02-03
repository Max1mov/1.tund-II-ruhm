 //ootan kuni leht on leatud
 window.onload = function(){

   var clock = document.getElementById('clock');

   writeDate();

 };

//võtab aja ja kirjutab #clock elemendi sisse
function writeDate(){

  var today = new Date();

  var hours = addZeroBefore(today.getHours());
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  seconds = addZeroBefore(seconds);

  //muudan #clock elemendi htmli
  clock.innerHTML = hours + ':' + addZeroBefore(minutes) + ':' + seconds;
}

function addZeroBefore(number){

  if(number < 10){
    number = "0" + number;
  }

  return number;
}
