
var elapsedTime = 00;
var elapsedMinute = 00;
var elapsedHour = 00;

setInterval(function(){ 
	elapsedTime++;
	if (elapsedTime < 10) {
		$("#clock").html("0" + elapsedTime);
	} else {
			$("#clock").html(elapsedTime);

	}

	if (elapsedTime == 60) {
		elapsedTime = 0;
		elapsedMinute = elapsedMinute + 1;
	}

	if (elapsedMinute == 60) {
		elapsedMinute = 0;
		elapsedHour = elapsedHour+ 1;
	}
	if (elapsedHour == 13) {
		elapsedHour = 1;
		
	}

	$("#clock").html("0" + elapsedHour +":" + "0" + elapsedMinute + ":" + elapsedTime);
}, 1000);



$(window).keypress(function(e){
	console.log(e.which);
	if(e.which == 97) {
		$(".stage").append($(".lettera").clone().removeClass("lettera"));
	}
	if(e.which == 98) {
		$(".stage").append($(".letterb").clone().removeClass("letterb"));
	}
	if(e.which == 99) {
		$(".stage").append($(".letterc").clone().removeClass("letterc"));
	}
	if(e.which == 100) {
		$(".stage").append($(".letterd").clone().removeClass("letterd"));
	}
	if(e.which == 101) {
		$(".stage").append($(".lettere").clone().removeClass("lettere"));
	}
	if(e.which == 102) {
		$(".stage").append($(".letterf").clone().removeClass("letterf"));
	}
	if(e.which == 103) {
		$(".stage").append($(".letterg").clone().removeClass("letterg"));
	}
	if(e.which == 104) {
		$(".stage").append($(".letterh").clone().removeClass("letterh"));
	}
	if(e.which == 105) {
		$(".stage").append($(".letteri").clone().removeClass("letteri"));
	}
	if(e.which == 106) {
		$(".stage").append($(".letterj").clone().removeClass("letterj"));
	}
	if(e.which == 107) {
		$(".stage").append($(".letterk").clone().removeClass("letterk"));
	}
	if(e.which == 108) {
		$(".stage").append($(".letterl").clone().removeClass("letterl"));
	}
	if(e.which == 109) {
		$(".stage").append($(".letterm").clone().removeClass("letterm"));
	}
	if(e.which == 110) {
		$(".stage").append($(".lettern").clone().removeClass("lettern"));
	}
	if(e.which == 111) {
		$(".stage").append($(".lettero").clone().removeClass("lettero"));
	}
	if(e.which == 112) {
		$(".stage").append($(".letterp").clone().removeClass("letterp"));
	}
	if(e.which == 113) {
		$(".stage").append($(".letterq").clone().removeClass("letterq"));
	}
	if(e.which == 114) {
		$(".stage").append($(".letterr").clone().removeClass("letterr"));
	}
	if(e.which == 115) {
		$(".stage").append($(".letters").clone().removeClass("letters"));
	}
	if(e.which == 116) {
		$(".stage").append($(".lettert").clone().removeClass("lettert"));
	}
	if(e.which == 117) {
		$(".stage").append($(".letteru").clone().removeClass("letteru"));
	}
	if(e.which == 118) {
		$(".stage").append($(".letterv").clone().removeClass("letterv"));
	}
	if(e.which == 119) {
		$(".stage").append($(".letterw").clone().removeClass("letterw"));
	}
	if(e.which == 120) {
		$(".stage").append($(".letterx").clone().removeClass("letterx"));
	}
	if(e.which == 121) {
		$(".stage").append($(".lettery").clone().removeClass("lettery"));
	}
	if(e.which == 122) {
		$(".stage").append($(".letterz").clone().removeClass("letterz"));
	}
});

$("#texthere").click(function(){

	$(".cursor").removeClass("cursor");
});



