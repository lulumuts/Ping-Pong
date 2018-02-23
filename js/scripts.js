//back-end work
function myFunction() {
  var x, text;

  x = document.getElementById('enter').value;

  if (isNan(x) || x === 3) {
    text = "ping";
  } else {
    text = "pong";
  }

//front-end response
$(document).ready(function() {
  $("button.PING").click(function(){
    var response = $("ul").prepend("<li>text</li>");

    });
  });


//
//   document.getElementById('response').innerHTML = text;
//   alert("no");
