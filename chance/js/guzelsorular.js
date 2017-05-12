var guzelSorular = ["<span class='turkish'>Eşitlik ideali, güzel kaderim,</span><span class='english'>Equality is his ideal, good faith </span>", 
					"<span class='turkish'>kaderi onu duymuş olanı var mı,</span><span class='english'>is there someone who's faith has been heard </span>", 
					"<span class='turkish'>yoksulun kapısını çarpınca rüzgâr,</span><span class='english'>when the wind hits the door of the poor </span>", 
					"<span class='turkish'>şöyle bir kafasını kaldıranı var mı?</span> <span class='english'>is their anyone who can raise his head? </span>",
					"<span class='turkish'>Menteşe tutar mı, terazi tartar mı,</span><span class='english'>will the hinge hold, will the scale weigh </span>", 
					"<span class='turkish'>kuzu susar, tavuk kaçar mı,</span><span class='english'>will the sheep be quiet, will the chicken run away </span>", 
					"<span class='turkish'>güzel mahkemenin kurulduğu gün,</span><span class='english'>the day the court was built </span>", 
					"<span class='turkish'>kuzu bildiğini eşeğe açar mı?</span> <span class='english'>will the sheep open up its knowledge to a donkey? </span>",
					"<span class='turkish'>Eh, kim bilir kim görecek bunları,</span><span class='english'>Well, who knows who is going to see these </span>", 
					"<span class='turkish'>yoldan geçenin gördüğü az mı,</span><span class='english'>Is what is seen by the passenger little </span>", 
					"<span class='turkish'>suçluyu şimdi affetse kalbim,</span> <span class='english'>if my heart forgives the guilty </span>", 
					"<span class='turkish'>sonra mahkûm sayılmaz mı?</span> <span class='english'>then wouldnt it count as a convict? </span>"

					]

var randomLine = Math.floor(Math.random()* (guzelSorular.length));

	$(".lines_six").append(guzelSorular[randomLine])
	for (var multiplier = 0; multiplier < guzelSorular.length; multiplier++) {
    var result = multiplier * 6;
  	console.log(guzelSorular[multiplier]);
  	$("body").append("<div class='lines_six paragraph-"+multiplier+"'>"+guzelSorular[multiplier]+"</div>");
};


$('.lines_six').each(function(){
	var offset = Math.floor(Math.random() * (700));
	var offsetLeft = Math.floor(Math.random() * (900));
	$(this).css("top",offset);
	$(this).css("left",offsetLeft);
});


$( ".lines_six" ).draggable();

$(".lines_six").mouseover(function(){
	$(this).find(".english").css("opacity",1);
$(".lines_six").mouseleave(function(){
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
	$(".english").css("opacity",1);
	$(".turkish").css("opacity",0);
});

$(".full").hide(1).delay(5000).show(1);

$(".full").click(function(){
	$(".lines_six").toggle("hide");
	$(".p6").toggleClass("hide");
	$(".version_six").toggleClass("hide");
	
});