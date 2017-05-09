var uyanmaSaati = ["Gel, dedi, birlikte taşıyalım, dedi.<span class='english'>Come, said, carry it together, said</span>",
					"Taşıyabildiğim kadarını, dedim.<span class='english'>Only the ones I can carry, I said</span>",
					"Taşıyabildiğin kadarını dedim, dedi.<span class='english'>Only the ones I can carry I said, said</span>",
					"Gidiyorsun, gitme, burada ol dedim, dedi.<span class='english'>You are leaving, dont go, be here, said.</span>",
					"Uzağa gitme dedim dedi, diyor.<span class='english'>Dont go far I said, said, saying.</span>",
					"Gitmiyorum, kalıyorum, dedim.<span class='english'>I am not leaving, I am staying, I said.</span>",
					"Uyku dinlendirir dedi, dedim.<span class='english'>Sleep will calm, said, I said</span>",
					"Uyku siler diyor dedi, dedim.<span class='english'>Sleep will erase says said, I said</span>",
					"Sonuna kadar dinlerim, dedim dedi diyor.<span class='english'>I will listen until the end, I said, said, saying</span>",
					"Açıyor dedim, kapıyı dedim,<span class='english'>Is opening I said, the door I said,</span>",
					"bana dedim, doğru dedim,<span class='english'>to me I said, I said it right,</span>",
					"oradan dedim, gözüküyor dedim, gelen dedim.<span class='english'>from there, I said, it is visible, incoming I said.</span>",
					"Kapıyor diyor bana, dedi.<span class='english'>he is closing says, to me, said.</span>",
					"Ben açacağım, sen üzülme dedim, dedi.<span class='english'>I am going to open it, dont be upset I said, said.</span>",
					"Adalet Romeo!<span class='english'>Justice, Romeo!</span>",
					"Adalet, Romeo’m!<span class='english'>Justice, my Romeo!</span>"
				
					]

var randomLine = Math.floor(Math.random()* (uyanmaSaati.length));

	$(".lines_four").append(uyanmaSaati[randomLine])
	for (var multiplier = 0; multiplier < uyanmaSaati.length; multiplier++) {
    var result = multiplier * 6;
  	console.log(uyanmaSaati[multiplier]);
  	$("body").append("<div class='lines_four paragraph-"+multiplier+"'>"+uyanmaSaati[multiplier]+"</div>");
};


$('.lines_four').each(function(){
	var offset = Math.floor(Math.random() * (700));
	var offsetLeft = Math.floor(Math.random() * (900));
	$(this).css("top",offset);
	$(this).css("left",offsetLeft);
});


$( ".lines_four" ).draggable();

$(".lines_four").mouseover(function(){
	$(this).find(".english").css("opacity",1);
$(".lines_four").mouseleave(function(){
	$(".english").css("opacity",0);
});
});

function goToHomePage( url ) {
	window.location = url;
}


$( ".homepage" ).mouseover(function() {
  $( ".back" ).animate({
    left: "0",
  }, 500,function() {
  	goToHomePage("index.html");
  });
});

$(".full").hide(1).delay(5000).show(1);

$(".full").click(function(){
	$(".lines_four").toggle("hide");
	$(".p4").toggleClass("hide");
	$(".version_four").toggleClass("hide");
	
});
