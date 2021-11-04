/* nav bar visible when scroll down */
var navBar = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    navBar.classList.add("scrollBar");
  } else {
    navBar.classList.remove("scrollBar");
  }
});

/* Count down in id="works" */
var countDownDate = new Date("Feb 12, 2022 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in an element with id="count"
  document.getElementById("count").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count").innerHTML = "EXPIRED";
  }
}, 1000);
