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
  var number = function(display){
    for(i=1; i<=display; i++){


  if ( i % 3 === 0) {
   $("#enter").append("<li>" + "ping" + "</>")
   return "ping";
  } else if (i % 5 === 0){
   $("#enter").append("<li>" + "pong" + "</>")
   return "pong";
  } else if (i % 15 === 0){
   $("#enter").append("<li>"+"pingpong"+ "</>")
   return "pingpong";
  } else {
   $("#enter").append("<li>"+ i + "</>");

  }
}
};
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
