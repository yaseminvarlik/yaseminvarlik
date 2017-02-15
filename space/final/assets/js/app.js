
console.log("hello");
$("#rectangle").hover(function() {
    $(this).css('cursor','pointer');
}, function() {
    $(this).css('cursor','auto');
});

$(".rectangles,.rectangles_one,.rectangles_two,.rectangles_three,.rectangles_four,.rectangles_five,.rectangles_six,.rectangles_seven,.rectangles_eight,.rectangles_nine,.rectangles_ten,.rectangles_eleven,.rectangles_twelve,.rectangles_thirteen,.rectangles_fourteen,.rectangles_fifthteen,.rectangles_sixteen").click(function() {
	console.log("hello");
	$(this).css("background-color","#4F99D4");


})