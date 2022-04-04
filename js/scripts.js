$(document).ready(function() {

  $(".header#js-header").click(function() {
    $(".container#js-container").toggle();
  });

  $(".header#meth-header").click(function() {
    $(".container#meth-container").toggle();
  });

  $(".header#jq-header").click(function() {
    $(".container#jq-container").toggle();
  });

  $(".header#f-header").click(function() {
    $(".container#f-container").toggle();
  });
}); 