$(".rectangle").click(function() {
	$(this).addClass("selected");
});

// $(".rectangles_four").click(function () {
//   $(".items h3").text("mug");
//   number_of_rectangles();
// });

// $(".rectangles_three").click(function () {
//   $(".items h4").text("bottled water");
//   number_of_rectangles();
// });

$ (".rectangles_one, .rectangles_two, .rectangles_three, .rectangles_four, .rectangles, .rectangles_five, .rectangles_six, .rectangles_seven, .rectangles_eight, .rectangles_nine, .rectangles_ten, .rectangles_eleven, .rectangles_twelve, .rectangles_thirteen, .rectangles_fifthteen, .rectangles_sixteen").click(function() {
	$(this).addClass("receipt");
});

$("rectangles_fourteen").click(function() {
	$("rectangle").removeClass("receipt")
});

// function number_of_rectangles() {
// 	var count = $(".rectangle.selected").length;
// 	// alert(count);
// 	if ( count == 2 ) {

// 		window.location.href = "receipt.html";
		
// 	}
// };
	// if count is 2, then load some page.

