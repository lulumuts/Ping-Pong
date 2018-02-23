$(document).ready(function() {
  $("button#submit").click(function() {
    $("ul.response").append("<li>#submit</li>");
    event.preventDefault();
  });
});
