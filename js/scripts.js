//back-end work
$(document).ready(function() {

  var number = parseInt("#enter");
  // number = document.getElementById('enter').value;

  if ( number % 3 === 0) {
    text = "ping";
  } else if (number % 5 === 0){
    text = "pong";
  } else if (number % 15 === 0){
    text = "pingpong";
  } else {
    return number
  }
});
//front-end response
$(document).ready(function() {
  $("button.PING").click(function(){
    var response = $("ul").prepend("<li></li>");

    });
  });


//
//   document.getElementById('response').innerHTML = text;
//   alert("no");
