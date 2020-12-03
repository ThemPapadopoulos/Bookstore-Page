
 //!   CART FUNCTIONS
function openNav() {
    document.getElementsByClassName('overlay')[0].style.width ="30%";
}
function openNav2() {
  document.getElementsByClassName('overlay')[0].style.width ="100%";
}

function closeNav() {
    document.getElementsByClassName('overlay')[0].style.width ="0%";
}


//!   FUNCTIONS
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}