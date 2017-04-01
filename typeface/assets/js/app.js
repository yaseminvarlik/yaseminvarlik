
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
};

function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
};



$(window).keypress(function(e){
	console.log(e.which);
	if(e.which == 97) {
		$("body").append($(".lettera").clone().removeClass("lettera"));
	}
	if(e.which == 98) {
		$("body").append($(".letterb").clone().removeClass("letterb"));
	}
	if(e.which == 99) {
		$("body").append($(".letterc").clone().removeClass("letterc"));
	}
	if(e.which == 100) {
		$("body").append($(".letterd").clone().removeClass("letterd"));
	}
	if(e.which == 101) {
		$("body").append($(".lettere").clone().removeClass("lettere"));
	}
	if(e.which == 102) {
		$("body").append($(".letterf").clone().removeClass("letterf"));
	}
	if(e.which == 103) {
		$("body").append($(".letterg").clone().removeClass("letterg"));
	}
	if(e.which == 104) {
		$("body").append($(".letterh").clone().removeClass("letterh"));
	}
	if(e.which == 105) {
		$("body").append($(".letteri").clone().removeClass("letteri"));
	}
	if(e.which == 106) {
		$("body").append($(".letterj").clone().removeClass("letterj"));
	}
	if(e.which == 107) {
		$("body").append($(".letterk").clone().removeClass("letterk"));
	}
	if(e.which == 108) {
		$("body").append($(".letterl").clone().removeClass("letterl"));
	}
	if(e.which == 109) {
		$("body").append($(".letterm").clone().removeClass("letterm"));
	}
	if(e.which == 110) {
		$("body").append($(".lettern").clone().removeClass("lettern"));
	}
	if(e.which == 111) {
		$("body").append($(".lettero").clone().removeClass("lettero"));
	}
	if(e.which == 112) {
		$("body").append($(".letterp").clone().removeClass("letterp"));
	}
	if(e.which == 113) {
		$("body").append($(".letterq").clone().removeClass("letterq"));
	}
	if(e.which == 114) {
		$("body").append($(".letterr").clone().removeClass("letterr"));
	}
	if(e.which == 115) {
		$("body").append($(".letters").clone().removeClass("letters"));
	}
	if(e.which == 116) {
		$("body").append($(".lettert").clone().removeClass("lettert"));
	}
	if(e.which == 117) {
		$("body").append($(".letteru").clone().removeClass("letteru"));
	}
	if(e.which == 118) {
		$("body").append($(".letterv").clone().removeClass("letterv"));
	}
	if(e.which == 119) {
		$("body").append($(".letterw").clone().removeClass("letterw"));
	}
	if(e.which == 120) {
		$("body").append($(".letterx").clone().removeClass("letterx"));
	}
	if(e.which == 121) {
		$("body").append($(".lettery").clone().removeClass("lettery"));
	}
	if(e.which == 122) {
		$("body").append($(".letterz").clone().removeClass("letterz"));
	}
});



