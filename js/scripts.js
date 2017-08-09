// // Business (or back-end) logic:
//
// var add = function(number1, number2) {
//   return number1 + number2;
// };
//
// var subtract = function(number1, number2) {
//   return number1 - number2;
// };
//
// var multiply = function(number1, number2) {
//   return number1 * number2;
// };
//
// var divide = function(number1, number2) {
//   return number1 / number2;
// };

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = $("#add1").val();
    var number2 = $("#add2").val();
    var number3 = $("#add3").val();
    var number4 = $("#add4").val();
    var number5 = $("#add5").val();
    //var result = (number1 + ", would you like to confirm this appointment for " + number2 + ", starting at "  + number3 + ", ending at "  + number4 + ",on " + number5 + "?")
    //$("#output").text(result);//
    //confirm(result);//
    $(".add1").text(number1);
    $(".add2").text(number2);
    $(".add3").text(number3);
    $(".add4").text(number4);
    $(".add5").text(number5);

    $("#pleasework2").show();
    $("#add").hide();
  });
});
