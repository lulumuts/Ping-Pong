//back-end work
// var myArr = ["A", "B", "C", "D"];
//
// $(document).ready(function() {
//
//   function pushData()
//   {
//     var enter = document.getElementById('enter').value;
//      myArr.push(enter);
//      var ulval = "";
//      for(i = 0; i < myArr.length; i++)
//      {
//        ulval = ulval + myArr[i] + "<br/>";
//      }
//
//      document.getElementById('response').innerHTML =ulval;
//
  number = document.getElementById('enter').value;

  if ( number % 3 === 0) {
    text = "ping";
  } else if (number % 5 === 0){
    text = "pong";
  } else if (number % 15 === 0){
    text = "pingpong";
  } else {
    return number
  }
//
// });
//front-end

$(document).ready(function() {
  $("button.PING").click(function(){

    var response = $("ul").append("<li>number</li>").val();
    console.log();
    });
  });


//
//   document.getElementById('response').innerHTML = text;
//   alert("no");
