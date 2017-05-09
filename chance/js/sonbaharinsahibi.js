var sonbaharinSahibi = ["Denizin ikiye bölündüğü yerde rüzgârın gölgesiyim <span class='english'>I am the shadow where the sea seperates from the wind</span>",
						"Gri bir mekânda s ö z’den öte bir dil var <span class='english'>In a gray place there is a language beyond voice</span>",
						"U y d u r u l m u ş gerçeklerle çözmek istediğim <span class='english'> Solving it with made up truths</span>",
						"(Kayalar griydi griydi deniz gökyüzü gri) <span class='english'>(Rocks were gray, the sea, the sky gray)</span>",
						"Geniş bir bölgesinde görünmez bir yerin <span class='english'>In a wide area of an invisible place </span>",
						"Bilinmez bir a n’ında uydurduğum gerçeklerin <span class='english'>In the unknown moment of my made up truths</span>",
						"Yaşamak ama nerde hangi şartlarda neyi <span class='english'>Living, but where in which conditions what</span>",
						"(Kayalar griydi griydi deniz gökyüzü gri)<span class='english'>(Rocks were gray, the sea, the sky gray)</span>",
						"Denizin ikiye bölündüğü yerde rüzgârın gölgesi <span class='english'>Where the sea divides into two wind's shadow</span>",
						"Kolayca kırılıp ufalanan derinliklerde <span class='english'>In an easily broken depths</span>",
						"Sonbahar bulunmamış bir dilin öte-ülkesi <span class='english'>Autumn is an undiscovered language of a country faraway </span>",
						"(Kayalar griydi griydi deniz gökyüzü gri)<span class='english'>(Rocks were gray, the sea, the sky gray)</span>",
						"Ne kelimeler ne cümleler ne de sözdizimi <span class='english'>not words not sentences not even syntax </span>",
						"Yalnızlığını aşmak gerek s ö y l e m e’nin <span class='english'>Need to pass beyond the loneliness of saying</span>",
						"Baktım anladım gerçek olsun dedim bu mevsim <span class='english'>I looked, I understood, I wanted this season to be true</span>",
						"Gri bir deniz gri gökyüzü ve yağmur sürekli <span class='english'>A gray sea, gray sky and always rain</span>",
						"Artık sonbaharın sahibi benim nitekim <span class='english'>Now, I am the owner of autumn</span>"

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

$(".full").hide(1).delay(5000).show(1);

$(".full").click(function(){
	$(".lines_ten").toggle("hide");
	$(".p10").toggleClass("hide");
	$(".version_ten").toggleClass("hide");
	
});