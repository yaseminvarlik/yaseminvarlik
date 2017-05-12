var guzelIkizler = ["<span class='turkish'>Güzel ikizim, ne kadar acayip değil mi,</span><span class='english'>My beautiful twin, isnt it weird</span>",
					"<span class='turkish'>bu kadar saf bir insanın yorgun görünmesi,</span><span class='english'>such a naive person looking tired </span>",
					"<span class='turkish'>iyi bir kalbin alıp başını gitmesi,</span><span class='english'>a good heart going away </span>", 
					"<span class='turkish'>ne acayip, evet, çok acayip.</span><span class='english'>how weird, yes, very weird </span>", 
					"<span class='turkish'>Ben de biliyorum yollar bozuk, değil mi,</span><span class='english'> I dont know either the road are damaged, isnt it </span>", 
					"<span class='turkish'>arı masum, iğne tuzak değil mi,</span><span class='english'>the bee is innocent, isnt the sting a trap </span>",
					"<span class='turkish'>böyle dönüp dolaşma, kalbinden uzaklaşma,</span><span class='english'>turn around like this, dont get away from your heart </span>",
					"<span class='turkish'>biz sabah olunca uyanacağız.</span> <span class='english'> we are going to wake up when it is morning </span>",
					"<span class='turkish'>Ben de senin gibiyim, hiç aldatmadım,</span><span class='english'>I am like you, never betrayed </span>",
					"<span class='turkish'>ama sonra kaderle başbaşa kaldım,</span><span class='english'>but then I faced the faith </span>", 
					"<span class='turkish'>meşenin altına bir yatak hazırladım,</span><span class='english'>I prepared a bed underneath an oak tree </span>", 
					"<span class='turkish'>gel, her şey herkese anlatılmıyor.</span><span class='english'>Come, everything is not being told </span>"
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
	$(this).find(".english").css("opacity",1);
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
$(".done").click(function(){
	$(".english").css({"opacity": "1", "left": "-45%"});
	$(".turkish").css("opacity",0);
});

$(".full").hide(1).delay(5000).show(1);

$(".full").click(function(){
	$(".lines_three").toggle("hide");
	$(".p3").toggleClass("hide");
	$(".version_three").toggleClass("hide");
	
});
