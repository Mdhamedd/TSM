var div = document.getElementById("videoPlayer");
var display = 0;

function hideShow(){
  if(display == 1){
    div.style.visibility = "visible";
    display = 0;
  }else{
    div.style.visibility = "hidden";
    display = 1;
  }
}

var video = document.getElementById("videoPlayer2");
var display = 0;

function hideShow2() {
  if (display == 1) {
    video.style.visibility = "visible";
    display = 0;
  } else {
    video.style.visibility = "hidden";
    display = 1;
  }
}