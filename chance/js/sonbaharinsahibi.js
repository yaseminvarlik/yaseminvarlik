var sonbaharinSahibi = ["<span class='turkish'>Denizin ikiye bölündüğü yerde rüzgârın gölgesiyim </span><span class='english'>I am the shadow where the sea seperates from the wind </span>",
						"<span class='turkish'>Gri bir mekânda s ö z’den öte bir dil var</span> <span class='english'>In a gray place there is a language beyond voice </span>",
						"<span class='turkish'>U y d u r u l m u ş gerçeklerle çözmek istediğim</span> <span class='english'> Solving it with made up truths</span>",
						"<span class='turkish'>(Kayalar griydi griydi deniz gökyüzü gri) </span><span class='english'>(Rocks were gray, the sea, the sky gray)</span>",
						"<span class='turkish'>Geniş bir bölgesinde görünmez bir yerin</span> <span class='english'>In a wide area of an invisible place</span>",
						"<span class='turkish'>Bilinmez bir a n’ında uydurduğum gerçeklerin</span> <span class='english'>In the unknown moment of my made up truths</span>",
						"<span class='turkish'>Yaşamak ama nerde hangi şartlarda neyi</span> <span class='english'>Living, but where in which conditions what</span>",
						"<span class='turkish'>(Kayalar griydi griydi deniz gökyüzü gri)</span><span class='english'>(Rocks were gray, the sea, the sky gray)</span>",
						"<span class='turkish'>Denizin ikiye bölündüğü yerde rüzgârın gölgesi</span> <span class='english'>Where the sea divides into two wind's shadow</span>",
						"<span class='turkish'>Kolayca kırılıp ufalanan derinliklerde </span><span class='english'>In an easily broken depths</span>",
						"<span class='turkish'>Sonbahar bulunmamış bir dilin öte-ülkesi </span><span class='english'>Autumn is an undiscovered language of a country faraway </span>",
						"<span class='turkish'>(Kayalar griydi griydi deniz gökyüzü gri)</span><span class='english'>(Rocks were gray, the sea, the sky gray)</span>",
						"<span class='turkish'>Ne kelimeler ne cümleler ne de sözdizimi </span><span class='english'>not words not sentences not even syntax </span>",
						"<span class='turkish'>Yalnızlığını aşmak gerek s ö y l e m e’nin </span><span class='english'>Need to pass beyond the loneliness of saying</span>",
						"<span class='turkish'>Baktım anladım gerçek olsun dedim bu mevsim </span><span class='english'>I looked, I understood, I wanted this season to be true</span>",
						"<span class='turkish'>Gri bir deniz gri gökyüzü ve yağmur sürekli </span><span class='english'>A gray sea, gray sky and always rain</span>",
						"<span class='turkish'>Artık sonbaharın sahibi benim nitekim </span><span class='english'>Now, I am the owner of autumn</span>"

					]

var randomLine = Math.floor(Math.random()* (sonbaharinSahibi.length));

	$(".lines_ten").append(sonbaharinSahibi[randomLine])
	for (var multiplier = 0; multiplier < sonbaharinSahibi.length; multiplier++) {
    var result = multiplier * 6;
  	console.log(sonbaharinSahibi[multiplier]);
  	$("body").append("<div class='lines_ten paragraph-"+multiplier+"'>"+sonbaharinSahibi[multiplier]+"</div>");
};


$('.lines_ten').each(function(){
	var offset = Math.floor(Math.random() * (700));
	var offsetLeft = Math.floor(Math.random() * (900));
	$(this).css("top",offset);
	$(this).css("left",offsetLeft);
});


$( ".lines_ten" ).draggable();

$(".lines_ten").mouseover(function(){
	$(this).find(".english").css("opacity",1);
$(".lines_ten").mouseleave(function(){
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
	$(".lines_ten").toggle("hide");
	$(".p10").toggleClass("hide");
	$(".version_ten").toggleClass("hide");
	
});