// var overlay = document.getElementById('overlay');
//
// function toggleOverlay() {
//   // overlay.classList.toggle('show');
//   toggleOverlay('show');
// }
var overlay = document.getElementById('overlay');

function toggleOverlayA() {
  var overlay = document.getElementById('overlayA');
  overlay.classList.toggle('show');
}

function on() {
  document.getElementById("a").style.display = "block";
}

function off() {
  document.getElementById("a").style.display = "none";
}

// function myFunction() {
//   var x = document.getElementById("2000");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// };

var audioa = document.getElementById("audioa");
function togglePlaya() {
  var audioPaused = audioa.paused; // boolean (true or false)
  if(audioPaused==true) {
    audioa.play()
  } else {
    audioa.pause();
  }
  };
//
// function myFunction() {
//   var x = document.getElementById("2004");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// };
//
// var audio2004 = document.getElementById("audio2004");
// function togglePlay2004() {
//   var audioPaused = audio2004.paused; // boolean (true or false)
//   if(audioPaused==true) {
//     audio2004.play()
//   } else {
//     audio2004.pause();
//   }
// };
//
// function myFunction() {
//   var x = document.getElementById("2005");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// };
//
// var audio2005 = document.getElementById("audio2005");
// function togglePlay2005() {
//   var audioPaused = audio2005.paused; // boolean (true or false)
//   if(audioPaused==true) {
//     audio2005.play()
//   } else {
//     audio2005.pause();
//   }
//   };
//
// function myFunction() {
//   var x = document.getElementById("2008");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// };
//
// var audio2008 = document.getElementById("audio2008");
// function togglePlay2008() {
//   var audioPaused = audio2008.paused; // boolean (true or false)
//   if(audioPaused==true) {
//     audio2008.play()
//   } else {
//     audio2008.pause();
//   }
//   };
//
// function myFunction() {
//   var x = document.getElementById("2010");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// };
//
// var audio2010 = document.getElementById("audio2010");
// function togglePlay2010() {
//   var audioPaused = audio2010.paused; // boolean (true or false)
//   if(audioPaused==true) {
//     audio2010.play()
//   } else {
//     audio2010.pause();
//   }
//   };
//
// function myFunction() {
//   var x = document.getElementById("2016");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// };
//
// var audio2016 = document.getElementById("audio2016");
// function togglePlay2016() {
//   var audioPaused = audio2016.paused; // boolean (true or false)
//   if(audioPaused==true) {
//     audio2016.play()
//   } else {
//     audio2016.pause();
//   }
//   };
