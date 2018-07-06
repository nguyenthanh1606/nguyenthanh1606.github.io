$(document).ready(function() {
	$('.carousel').carousel({
		interval: 5000
	})
});

window.onscroll = function() {myFunction()};
var header = document.getElementById("headMain");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}