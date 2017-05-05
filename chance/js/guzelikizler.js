var guzelIkizler = ["Güzel ikizim, ne kadar acayip değil mi,<span class='english'>My beautiful twin, isnt it weird</span>",
					"bu kadar saf bir insanın yorgun görünmesi,<span class='english'>such a naive person looking tired</span>",
					"iyi bir kalbin alıp başını gitmesi,<span class='english'>a good heart going away</span>", 
					"ne acayip, evet, çok acayip.<span class='english'>how weird, yes, very weird</span>", 
					"Ben de biliyorum yollar bozuk, değil mi,<span class='english'> I dont know either the road are damaged, isnt it</span>", 
					"arı masum, iğne tuzak değil mi,<span class='english'>the bee is innocent, isnt the sting a trap</span>",
					"böyle dönüp dolaşma, kalbinden uzaklaşma,<span class='english'>turn around like this, dont get away from your heart</span>",
					"biz sabah olunca uyanacağız. <span class='english'> we are going to wake up when it is morning</span>",
					"Ben de senin gibiyim, hiç aldatmadım,<span class='english'>I am like you, never betrayed</span>",
					"ama sonra kaderle başbaşa kaldım,<span class='english'>but then I faced the faith</span>", 
					"meşenin altına bir yatak hazırladım,<span class='english'>I prepared a bed underneath an oak tree</span>", 
					"gel, her şey herkese anlatılmıyor.<span class='english'>Come, everything is not being told</span>"
					]

var randomLine = Math.floor(Math.random()* (guzelIkizler.length));

	$(".lines_three").append(guzelIkizler[randomLine])
	for (var multiplier = 0; multiplier < guzelIkizler.length; multiplier++) {
    var result = multiplier * 6;
  	console.log(guzelIkizler[multiplier]);
  	$("body").append("<div class='lines_three paragraph-"+multiplier+"'>"+guzelIkizler[multiplier]+"</div>");
};


$('.lines_three').each(function(){
	var offset = Math.floor(Math.random() * (700));
	var offsetLeft = Math.floor(Math.random() * (900));
	$(this).css("top",offset);
	$(this).css("left",offsetLeft);
});


$( ".lines_three" ).draggable();

$(".lines_three").mouseover(function(){
	$(".english").css("opacity",1);
$(".lines_three").mouseleave(function(){
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
