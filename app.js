
if (window.scrollY == 0) {
  document.getElementById("navbar").style.background = "transparent";
}

document.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    document.getElementById("navbar").style.background = "transparent";
  }
  else {
    document.getElementById("navbar").style.background = "rgb(32, 32, 32)";
  };
});



function makeAlert() {
  document.getElementById("icon2").style.bottom = "5";
};

setInterval(makeAlert, 500);

function makeAlert2() {
  document.getElementById("icon2").style.bottom = "15";
};

setInterval(makeAlert2, 1000);



// function navtog() {
//   var x = document.getElementById("navbarPhone");
//   if (x.className === "nav-bard") {
//     x.className += " displayed";
//   } else {
//     x.className = "nav-bard";
//   }
//   console.log("deene");
// }


function navtog() {
    
  var x = document.getElementById("navbarPhone");

  if (x.className === "nav-bard"){
    x.className = "displayed"
  }else{
    x.className="nav-bard";
  }


};

