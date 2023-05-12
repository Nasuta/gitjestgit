// $(document).ready(function () {
//   $("#button").on("click", function () {
//     $("#square").animate(
//       { left: +100, width: 100, height: 100 },
//       3000,
//       function () {
//         $("#square").animate({width: 100}, 5000, function () {
//           $("#square").css("background-color", "blue");
//           $("#square").html("<h2>Complete</h2>");
//         });
//       }
//     );
//   });
// });

$(document).ready(function() {
  $('#button').click(function() {
      $('#square').animate({
          left: '+=100px',
          width: '100px',
          height: '100px'
      }, 3000, function() {
        $('#square').css({"background-color" : "blue", "transition" : "5s"})
          setTimeout(function() {
                  $('#square').css({'font-size':'16px', 'color' : 'red'}).html('<h2>Complete</h2>');
          }, 5000);
      });
  });
});


