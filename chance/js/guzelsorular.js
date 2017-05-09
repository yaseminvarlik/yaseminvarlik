var guzelSorular = ["Eşitlik ideali, güzel kaderim,<span class='english'>Equality is his ideal, good faith</span>", 
					"kaderi onu duymuş olanı var mı,<span class='english'>is there someone who's faith has been heard</span>", 
					"yoksulun kapısını çarpınca rüzgâr,<span class='english'>when the wind hits the door of the poor</span>", 
					"şöyle bir kafasını kaldıranı var mı? <span class='english'>is their anyone who can raise his head?</span>",
					"Menteşe tutar mı, terazi tartar mı,<span class='english'>will the hinge hold, will the scale weigh</span>", 
					"kuzu susar, tavuk kaçar mı,<span class='english'>will the sheep be quiet, will the chicken run away</span>", 
					"güzel mahkemenin kurulduğu gün,<span class='english'>the day the court was built</span>", 
					"kuzu bildiğini eşeğe açar mı? <span class='english'>will the sheep open up its knowledge to a donkey?</span>",
					"Eh, kim bilir kim görecek bunları,<span class='english'>Well, who knows who is going to see these</span>", 
					"yoldan geçenin gördüğü az mı,<span class='english'>Is what is seen by the passenger little</span>", 
					"suçluyu şimdi affetse kalbim, <span class='english'>if my heart forgives the guilty</span>", 
					"sonra mahkûm sayılmaz mı? <span class='english'>then wouldnt it count as a convict?</span>"

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

$(".full").hide(1).delay(5000).show(1);

$(".full").click(function(){
	$(".lines_six").toggle("hide");
	$(".p6").toggleClass("hide");
	$(".version_six").toggleClass("hide");
	
});