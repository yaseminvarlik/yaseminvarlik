$(".rectangle").click(function() {
	$(this).addClass("selected");
});

var total = 0;

$(".rectangle").click(function() {
	total = total + parseFloat($(this).data("value"));
	$(".total").html(total);
});

$(".rectangles_fourteen").click(function() {
	$(this).data("value");
	$(".total").html(total= 0);

});

$(".rectangles_fourteen").click(function() {
	window.location.reload ();
});


// $("rectangles_fourteen").click(function() {
// 	$("rectangle").removeClass ("receipt");
// });

// function number_of_rectangles() {
// 	var count = $(".rectangle.selected").length;
// 	// alert(count);
// 	if ( count == 2 ) {

// 		window.location.href = "receipt.html";
		
// 	}
// };
	// if count is 2, then load some page.

