var i = 0;
var txt;
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typer").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}