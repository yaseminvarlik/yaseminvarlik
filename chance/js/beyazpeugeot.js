var beyazPeugeot = ["Güneşin altında radyo dinleyen çocuk <span class='english'>A kid listening to the radio beneath the sun</span>",
					"Sen bu dünyaya mı aitsin <span class='english'>Do you belong to this world</span>",
					"Hayatın nasıl olduğu değil <span class='english'>It is not how the life is,</span>", 
					"kimlerle olduğu önemli dersin <span class='english'>it is who's, is the importance</span>",
					"Göğe ara sıra başını kaldır bak öyleyse <span class='english'>Then, sometimes look at the sky</span>",
					"Kendine ait bir yıldız bulabilir misin <span class='english'>Can you find a star that belongs to you</span>",
					"İçinde hiçbir şey olmayan bir dünya özlüyorsun <span class='english'>You are missing an empty world</span>",
					"Hadi birkaç şeyi daha atsak boşluğa sevinir misin <span class='english'>Would you be happy if we throw somethings away into the darkness</span>",
					"Sevdikleriyle anlaşamayan <span class='english'>Cannot agree with its loving ones</span>", 
					"anlaştıklarından durmadan kaçan <span class='english'>hiding from the ones he loves</span>",
					"Bakıp on altı yaşından ağlayan çocuk <span class='english'>Looking at sixteen, crying kid </span>",
					"Peugeot çalışmıyor biraz ittirir misin <span class='english'>The Peugeot is not working can you push it a little</span>",
					"Eğer çalışsaydı uzun bir yolculuk isterdin <span class='english'>If it worked you would want a long trip</span>",
					"Beyaz Peugeot’yu kullanan arkadaşına de ki:<span class='english'>Tell your friend who is driving the white Peugeot:</span>",
					"Çok gaz verme vitesi ikile beni unutma <span class='english'>change the gear,dont forget me </span>",
					"Herkesin herkesle sevgili olduğu bir toplumu özleyen <span class='english'>Missing a society where everyone is a couple</span>",
					"Ve bütün gün güneşin altında radyo dinleyen <span class='english'>And,listening to the radio all day beneath the sun </span>", 
					"bu çocuğu unutma <span class='english'>Dont forget this kid</span>",
					"Bir gün buradan gideceğim <span class='english'>One day I am going to leave this place</span>",
					"Sen kontağı çevir vitesi ikile beni unutma<span class='english'>Change the gear and dont forget me</span>",
					"Uzak yollar beni çağırıyor <span class='english'>Long roads are calling me</span>",
					"Hiçbir şey yapmayacağım bundan sonra <span class='english'>I am not going to be able to do anything from now on</span>",
					'“Ben buradayım” de güneşin altında radyo <span class="english">Say "I am here", radio beneath the sun</span>', 
					'dinleyen çocuğa “Dünyadan korkma”<span class="english">to the kid listening"Dont be scared of the world"</span>',
					"Güneşin altında radyo dinleyen çocuğu <span class='english'>The kid listening to the radio beneath the sun</span>", 
					"sakın unutma <span class='english'>Never forget it</span>",
					"Güneşin altında radyo dinleyen çocuk <span class='english'>The kid listening to the radio beneath the sun</span>",
					"FM’de ne çalıyor <span class='english'>What is playing in the channel</span>",
					"Dünya senin ama sen dünyaya ilişme <span class='english'>The world is yours but dont come near it</span>",
					"Peugeot çalıştı korna çalıyor bin arkaya <span class='english'>The Peugeot worked, honking</span>",
					"Her şey önünden bir bir geçsin başını cama daya <span class='english'>Everything passes by you lean you head to the window</span>",
					"Başını cama dayayan çocuk hoşçakal <span class='english'>The kid who is leaning his head on the window goodbye </span>",
					"Ben burada kalıyorum güneşin altında <span class='english'>I am staying here beneath the sun</span>",
					"Anteni çıkar radyonu aç düşlerimi unutma <span class='english'>Take the antenna of the radio, open your thoughts dont forget</span>"
					]


var randomLine = Math.floor(Math.random()* (beyazPeugeot.length));

	$(".lines_five").append(beyazPeugeot[randomLine])
	for (var multiplier = 0; multiplier < beyazPeugeot.length; multiplier++) {
    var result = multiplier * 6;
  	console.log(beyazPeugeot[multiplier]);
  	$("body").append("<div class='lines_five paragraph-"+multiplier+"'>"+beyazPeugeot[multiplier]+"</div>");
};


$('.lines_five').each(function(){
	var offset = Math.floor(Math.random() * (700));
	var offsetLeft = Math.floor(Math.random() * (900));
	$(this).css("top",offset);
	$(this).css("left",offsetLeft);
});


$( ".lines_five" ).draggable();

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


$(".lines_five").mouseover(function(){
	$(this).find(".english").css("opacity",1);
$(".lines_five").mouseleave(function(){
	$(".english").css("opacity",0);
});
});


$(".full").hide(1).delay(5000).show(1);

$(".full").click(function(){
	$(".lines_five").toggle("hide");
	$(".p5").toggleClass("hide");
	$(".version_five").toggleClass("hide");
	
});





