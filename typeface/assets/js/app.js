
var elapsedSecond = 0;
var elapsedMinute = 0;
var elapsedHour = 0;
var elapsedSecondStr = "00";
var elapsedMinuteStr = "00";
var elapsedHourStr = "00";
// var entryCount = 0;
var topVal = 1;

var letters_pressed = 0;
var position_to_use = "";

setInterval(function(){ 
	elapsedSecond++;
	if (elapsedSecond < 10) {
		elapsedSecondStr = "0" + elapsedSecond;
	} else {
		elapsedSecondStr = elapsedSecond;

	}


	if (elapsedSecond == 60) {
		elapsedSecond = 0;
		elapsedMinute++;

	} 
	if (elapsedMinute < 10) {
		elapsedMinuteStr = "0" + elapsedMinute;
	} else {
		elapsedMinuteStr = elapsedMinute;

	}


	if (elapsedMinute == 60) {
		elapsedMinute = 0;
		elapsedHour++;
	}
	if (elapsedHour == 13) {
		elapsedHour = 1;
		
	}


	$("#clock").html("0" + elapsedHour +":" + "0" + elapsedMinute + ":"  + elapsedSecondStr);
	topVal = topVal + 5;

	$(".spot").each(function() {
		
		if ($(this).children().length > 0) {
			$(this).append($(this).children().last().clone());
			// $(this).children().css("top",topVal + "px");
			$(this).append($(this).children().last().css("top",topVal + "px"));
			$(this).append($(this).children().last().css("left",topVal + "px"));
			$(".spot").css("top",topVal + "px");
		} 

	})
}, 1000);


$(function(){
    $(".stage").scroll(function(){
        $(".letter-outer").html($(this).scrollTop());
    });
    
});

$(window).keypress(function(e){
	console.log(e);

	letters_pressed+=1;
	position_to_use = ".p" + letters_pressed;


	if(e.which == 97) {
		$(position_to_use).append($(".lettera").clone().removeClass("lettera"));

	}
	if(e.which == 98) {
		$(position_to_use).append($(".letterb").clone().removeClass("letterb"));
	}
	if(e.which == 99) {
		$(position_to_use).append($(".letterc").clone().removeClass("letterc"));
	}
	if(e.which == 100) {
		$(position_to_use).append($(".letterd").clone().removeClass("letterd"));
	}
	if(e.which == 101) {
		$(position_to_use).append($(".lettere").clone().removeClass("lettere"));
	}
	if(e.which == 102) {
		$(position_to_use).append($(".letterf").clone().removeClass("letterf"));
	}
	if(e.which == 103) {
		$(position_to_use).append($(".letterg").clone().removeClass("letterg"));
	}
	if(e.which == 104) {
		$(position_to_use).append($(".letterh").clone().removeClass("letterh"));
	}
	if(e.which == 105) {
		$(position_to_use).append($(".letteri").clone().removeClass("letteri"));
	}
	if(e.which == 106) {
		$(position_to_use).append($(".letterj").clone().removeClass("letterj"));
	}
	if(e.which == 107) {
		$(position_to_use).append($(".letterk").clone().removeClass("letterk"));
	}
	if(e.which == 108) {
		$(position_to_use).append($(".letterl").clone().removeClass("letterl"));
	}
	if(e.which == 109) {
		$(position_to_use).append($(".letterm").clone().removeClass("letterm"));
	}
	if(e.which == 110) {
		$(position_to_use).append($(".lettern").clone().removeClass("lettern"));
	}
	if(e.which == 111) {
		$(position_to_use).append($(".lettero").clone().removeClass("lettero"));
	}
	if(e.which == 112) {
		$(position_to_use).append($(".letterp").clone().removeClass("letterp"));
	}
	if(e.which == 113) {
		$(position_to_use).append($(".letterq").clone().removeClass("letterq"));
	}
	if(e.which == 114) {
		$(position_to_use).append($(".letterr").clone().removeClass("letterr"));
	}
	if(e.which == 115) {
		$(position_to_use).append($(".letters").clone().removeClass("letters"));
	}
	if(e.which == 116) {
		$(position_to_use).append($(".lettert").clone().removeClass("lettert"));
	}
	if(e.which == 117) {
		$(position_to_use).append($(".letteru").clone().removeClass("letteru"));
	}
	if(e.which == 118) {
		$(position_to_use).append($(".letterv").clone().removeClass("letterv"));
	}
	if(e.which == 119) {
		$(position_to_use).append($(".letterw").clone().removeClass("letterw"));
	}
	if(e.which == 120) {
		$(position_to_use).append($(".letterx").clone().removeClass("letterx"));
	}
	if(e.which == 121) {
		$(position_to_use).append($(".lettery").clone().removeClass("lettery"));
	}
	if(e.which == 122) {
		$(position_to_use).append($(".letterz").clone().removeClass("letterz"));
	}
	  if (e.which == 32) {
    $(position_to_use).append($(".space_mark").clone().removeClass("space_mark"));
  }
	
});


$(".refresh").click(function() {
	window.location.reload ();
});
// function deleteElement() {
// 	$(".letter-outer").last().remove();

// }

// $(window).keydown(function(e){
// 	console.log(e);
// 	if(e.which == 8){
// 		e.preventDefault();
// 		entryCount ++;
// 		console.log("entry #" + entryCount + ":" + e.which + "| BKSP");
// 		deleteElement()
// 	}





