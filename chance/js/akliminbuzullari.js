// AKLIMIN BUZULLARI

var akliminBuzullari = ["Susarlar, <span class='english'>They were quiet,</span>",
					"sustular mı konuşmazlar bir daha.<span class='english'>Once they are quiet they wouldnt talk again,</span>",
					"Ses, yırtıcı bir hayvan olur, dağından iner, <span class='english'>Sound,turns into a wild animal, descends from the mountain</span>",
					"vurur pençesini üzerlerine. O yüzden <span class='english'>swings its claw towards them.</span>",
					"Kırgındırlar,<span class='english'>They were upset,</span>",
					"yorulmuş düşüncenin ağrılarından.<span class='english'>Tired from the pain of the thoughts.</span>",
					"Güneşin ışığını ararlar, öyle sıradan,<span class='english'>Looking for the sunlight, so mundane</span>",
					"herkesi ısıtan, ama bulamazlar. Artık ondan<span class='english'>warms up everyone, but cant find it</span>",
					"Çay içerler.<span class='english'>Drinking tea.</span>",
					"çay saatleri durma saatleridir.<span class='english'>Tea time is their rest time.</span>",
					"Bir yazı sayfasının kenarında düşünürler:<span class='english'>They are thinking in the corner of a page:</span>",
					"düşünmek durarak damıtmak mıdır? Kımıldamadan<span class='english'>Is thinking, coming to a stand still of distilling?</span>",
					"Bir şehirde yaşarlar,<span class='english'>They live in a city,</span>",
					"şeytanın evinde kiracıdırlar.<span class='english'>The devil is the inhabitant,</span>",
					"Düşlerinden çözülen ince dekorda,<span class='english'>Thought melting into thin ornaments,</span>",
					"bir başka dünyaya bakar gözleri. Vakti gelince<span class='english'>Their eyes were looking at a different world ,</span>",
					"Severler,<span class='english'>They like it,</span>",
					"ateşli bir silah patlar sevince, ses vurulur.<span class='english'>A gun fires to the hapiness, sound gets hit.</span>",
					"Yazlık elbiseler giyerler, bürünüp beyazlara <span class='english'>They were wearing summer dresses, covered in white</span>",
					"şeytanın bir adım önünde dans ederler. Belki şimdi <span class='english'>They were dancing one step ahead of the devil ,</span>",
					"O başka dünyada hâlâ.<span class='english'>It is still at another world.</span>"
					]

var randomLine = Math.floor(Math.random()* (akliminBuzullari.length));

	$(".lines_two").append(akliminBuzullari[randomLine])
	for (var multiplier = 0; multiplier < akliminBuzullari.length; multiplier++) {
    var result = multiplier * 6;
  	console.log(akliminBuzullari[multiplier]);
  	$("body").append("<div class='lines_two paragraph-"+multiplier+"'>"+akliminBuzullari[multiplier]+"</div>");
};


$('.lines_two').each(function(){
	var offset = Math.floor(Math.random() * (700));
	var offsetLeft = Math.floor(Math.random() * (900));
	$(this).css("top",offset);
	$(this).css("left",offsetLeft);
});


$( ".lines_two" ).draggable();

$(".lines_two").mouseover(function(){
	$(".english").css("opacity",1);
$(".lines_two").mouseleave(function(){
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

