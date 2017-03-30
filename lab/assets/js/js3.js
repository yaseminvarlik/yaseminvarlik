var banana = '<div class=" fruit banana"></div>';
var apple = '<div class=" fruit apple"></div>';
var grapes = '<div class=" fruit grapes"></div>';
var everything = '<div class=" fruit banana"></div><div class=" fruit apple"></div><div class=" fruit grapes"></div>';

$('.button').click(function(){
	var fruit = $(this).data('fruit');
	

	if(fruit == 'banana') {
		$('.wrapper').append(banana);

	} else if( fruit == 'grapes') {
		$('.wrapper').append(grapes);
	} else if( fruit == 'apple') {
		$('.wrapper').append(apple);
	} else {
		$('.wrapper').append(everything);
	}
});

	$(window).keypress(function(event){
		console.log(event.which);
		if(event.which == '98') {
		$('.wrapper').append(banana);
	} else if( event.which == '103') {
		$('.wrapper').append(grapes);
	} else if(event.which == '97') {
		$('.wrapper').append(apple);
	} else if (event.which == '101') {
		$('.wrapper').append(everything);
	}
	});