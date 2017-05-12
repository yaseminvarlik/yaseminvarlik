var beyazPeugeot = ["<span class='turkish'>Güneşin altında radyo dinleyen çocuk </span> <span class='english'>A kid listening to the radio beneath the sun</span>",
					"<span class='turkish'>Sen bu dünyaya mı aitsin</span> <span class='english'>Do you belong to this world </span>",
					"<span class='turkish'>Hayatın nasıl olduğu değil </span><span class='english'>It is not how the life is, </span>", 
					"<span class='turkish'>kimlerle olduğu önemli dersin </span><span class='english'>it is who's, is the importance (04)</span>",
					"<span class='turkish'>Göğe ara sıra başını kaldır bak öyleyse</span> <span class='english'>Then, sometimes look at the sky</span>",
					"<span class='turkish'>Kendine ait bir yıldız bulabilir misin</span> <span class='english'>Can you find a star that belongs to you </span>",
					"<span class='turkish'>İçinde hiçbir şey olmayan bir dünya özlüyorsun </span><span class='english'>You are missing an empty world </span>",
					"<span class='turkish'>Hadi birkaç şeyi daha atsak boşluğa sevinir misin</span> <span class='english'>Would you be happy if we throw somethings away into the darkness </span>",
					"<span class='turkish'>Sevdikleriyle anlaşamayan</span> <span class='english'>Cannot agree with its loving ones </span>", 
					"<span class='turkish'>anlaştıklarından durmadan kaçan</span> <span class='english'>hiding from the ones he loves </span>",
					"<span class='turkish'>Bakıp on altı yaşından ağlayan çocuk</span> <span class='english'>Looking at sixteen, crying kid </span>",
					"<span class='turkish'>Peugeot çalışmıyor biraz ittirir misin </span><span class='english'>The Peugeot is not working can you push it a little</span>",
					"<span class='turkish'>Eğer çalışsaydı uzun bir yolculuk isterdin </span><span class='english'>If it worked you would want a long trip </span>",
					"<span class='turkish'>Beyaz Peugeot’yu kullanan arkadaşına de ki:</span><span class='english'>Tell your friend who is driving the white Peugeot:</span>",
					"<span class='turkish'>Çok gaz verme vitesi ikile beni unutma</span> <span class='english'>change the gear,dont forget me </span>",
					"<span class='turkish'>Herkesin herkesle sevgili olduğu bir toplumu özleyen</span> <span class='english'>Missing a society where everyone is a couple</span>",
					"<span class='turkish'>Ve bütün gün güneşin altında radyo dinleyen</span> <span class='english'>And,listening to the radio all day beneath the sun </span>", 
					"<span class='turkish'>bu çocuğu unutma</span> <span class='english'>Dont forget this kid </span>",
					"<span class='turkish'>Bir gün buradan gideceğim </span><span class='english'>One day I am going to leave this place </span>",
					"<span class='turkish'>Sen kontağı çevir vitesi ikile beni unutma</span><span class='english'>Change the gear and dont forget me </span>",
					"<span class='turkish'>Uzak yollar beni çağırıyor</span> <span class='english'>Long roads are calling me</span>",
					"<span class='turkish'>Hiçbir şey yapmayacağım bundan sonra </span><span class='english'>I am not going to be able to do anything from now on</span>",
					"<span class='turkish'>“Ben buradayım” de güneşin altında radyo </span><span class='english'>Say 'I am here', radio beneath the sun </span>'", 
					"<span class='turkish'>dinleyen çocuğa “Dünyadan korkma”</span><span class='english'>to the kid listening 'Dont be scared of the world'</span>",
					"<span class='turkish'>Güneşin altında radyo dinleyen çocuğu </span><span class='english'>The kid listening to the radio beneath the sun</span>", 
					"<span class='turkish'>sakın unutma</span> <span class='english'>Never forget it</span>",
					"<span class='turkish'>Güneşin altında radyo dinleyen çocuk</span> <span class='english'>The kid listening to the radio beneath the sun </span>",
					"<span class='turkish'>FM’de ne çalıyor</span> <span class='english'>What is playing in the channel </span>",
					"<span class='turkish'>Dünya senin ama sen dünyaya ilişme </span><span class='english'>The world is yours but dont come near it</span>",
					"<span class='turkish'>Peugeot çalıştı korna çalıyor bin arkaya</span> <span class='english'>The Peugeot worked, honking </span>",
					"<span class='turkish'>Her şey önünden bir bir geçsin başını cama daya </span><span class='english'>Everything passes by you lean you head to the window </span>",
					"<span class='turkish'>Başını cama dayayan çocuk hoşçakal </span><span class='english'>The kid who is leaning his head on the window goodbye</span>",
					"<span class='turkish'>Ben burada kalıyorum güneşin altında</span> <span class='english'>I am staying here beneath the sun </span> ",
					"<span class='turkish'>Anteni çıkar radyonu aç düşlerimi unutma</span> <span class='english'>Take the antenna of the radio, open your thoughts dont forget</span>"
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
$(".done").click(function(){
	$(".english").css("opacity",1);
	$(".turkish").css("opacity",0);
});

$(".full").hide(1).delay(5000).show(1);

$(".full").click(function(){
	$(".lines_five").toggle("hide");
	$(".p5").toggleClass("hide");
	$(".version_five").toggleClass("hide");
	
});





