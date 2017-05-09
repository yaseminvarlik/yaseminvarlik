var guzelAyrilik = ["Hani bir dal vardır, gövdeden çıkan,<span class='english'>There is a branch, growing from the trunk</span>",
					 "sonra bir dal daha o daldan çıkan,<span class='english'>then another branch growing from that branch,</span>", 
					 "sonra bir dal daha, bir dal daha, <span class='english'>then another branch, another branch</span>", 
					 "en son dalda güzel palamut duruyor.<span class='english'>on the last branch is a beautiful acorn </span>", 
					 "Palamutun şekli şapkası güzel,<span class='english'>The shape of the acorn beautiful</span>", 
					 "bıraksın meşeyi, dala tutunmasın,<span class='english'>lets the oak go, doesnt hold on to the branch</span>", 
					 "düşsün yere şapkasıyla beraber,<span class='english'>falls to the ground with its hat</span>", 
					 "tabii, şapkası onu meşeye bağlıyor.<span class='english'>Of course, its hat is whats attaching it to the oak</span>", 
					 "Bırak kendini öyle gövdesiz, dalsız,<span class='english'>Leave yourself without a trunk, without branches</span>", 
					 "orada asılı huzur bulman imkansız,<span class='english'>it is impossible to find peace hanging like that</span>", 
					 "düşeceğin yer de meşenin gölgesi,<span class='english'>the place you are going to fall is its shadow</span>", 
					 "güzel ayrılık orada bizi bekliyor.<span class='english'>a lovely seperation is waiting for us there.</span>"
					 ]




// GUZEL AYTRILIK
var randomLine = Math.floor(Math.random()* (guzelAyrilik.length));


	
	$(".lines").append(guzelAyrilik[randomLine]);
	for (var multiplier = 0; multiplier < guzelAyrilik.length; multiplier++) {
    var result = multiplier * 6;
  	console.log(guzelAyrilik[multiplier]);
  	$("body").append("<div class='lines line-"+multiplier+"'>"+guzelAyrilik[multiplier]+"</div>");
};



$('.lines').each(function(){
	var offset = Math.floor(Math.random() * (700));
	var offsetLeft = Math.floor(Math.random() * (900));
	$(this).css("top",offset);
	$(this).css("left",offsetLeft);
});


$( ".lines" ).draggable();

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



$(".lines").mouseover(function(){
	$(this).find(".english").css("opacity",1);
$(".lines").mouseleave(function(){
	$(".english").css("opacity",0);
});
});

$(".full").hide(1).delay(5000).show(1);


$(".full").click(function(){
	$(".lines").toggle("hide");
	$(".p1").toggleClass("hide");
	$(".version_one").toggleClass("hide");
	
});



