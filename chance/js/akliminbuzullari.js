// AKLIMIN BUZULLARI

var akliminBuzullari = ["<span class='turkish'>Susarlar,</span> <span class='english'>They are quiet,</span>",
					"<span class='turkish'>sustular mı konuşmazlar bir daha.</span><span class='english'>Once they are quiet they wouldnt talk again,</span>",
					"<span class='turkish'>Ses, yırtıcı bir hayvan olur, dağından iner,</span> <span class='english'>Sound,turns into a wild animal, descends from the mountain</span>",
					"<span class='turkish'>vurur pençesini üzerlerine. O yüzden</span> <span class='english'>swings its claw towards them. That is why</span>",
					"<span class='turkish'>Kırgındırlar,</span><span class='english'>They are upset,</span>",
					"<span class='turkish'>yorulmuş düşüncenin ağrılarından.</span><span class='english'>Tired from the pain of the thoughts.</span>",
					"<span class='turkish'>Güneşin ışığını ararlar, öyle sıradan,</span><span class='english'>Looking for the sunlight, so mundane</span>",
					"<span class='turkish'>herkesi ısıtan, ama bulamazlar. Artık ondan</span><span class='english'>warms up everyone, but cant find it. From now on</span>",
					"<span class='turkish'>Çay içerler.</span><span class='english'>Drinking tea.</span>",
					"<span class='turkish'>çay saatleri durma saatleridir.</span><span class='english'>Tea time is their rest time.</span>",
					"<span class='turkish'>Bir yazı sayfasının kenarında düşünürler:</span><span class='english'>They are thinking in the corner of a page:</span>",
					"<span class='turkish'>düşünmek durarak damıtmak mıdır? Kımıldamadan</span><span class='english'>Is thinking, coming to a stand still of distilling? Without moving</span>",
					"<span class='turkish'>Bir şehirde yaşarlar,</span><span class='english'>They live in a city,</span>",
					"<span class='turkish'>şeytanın evinde kiracıdırlar.</span><span class='english'>The devil is the inhabitant,</span>",
					"<span class='turkish'>Düşlerinden çözülen ince dekorda,</span><span class='english'>Thought melting into thin ornaments,</span>",
					"<span class='turkish'>bir başka dünyaya bakar gözleri. Vakti gelince</span><span class='english'>Their eyes were looking at a different world. When the time comes</span>",
					"<span class='turkish'>Severler,</span><span class='english'>They like it,</span>",
					"<span class='turkish'>ateşli bir silah patlar sevince, ses vurulur.</span><span class='english'>A gun fires to the hapiness, sound gets hit.</span>",
					"<span class='turkish'>Yazlık elbiseler giyerler, bürünüp beyazlara</span> <span class='english'>They wear summer dresses, covered in white</span>",
					"<span class='turkish'>şeytanın bir adım önünde dans ederler. Belki şimdi</span> <span class='english'>They dance one step ahead of the devil. Maybe now</span>",
					"<span class='turkish'>O başka dünyada hâlâ.</span><span class='english'>It is still at another world.</span>"
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
	$(this).find(".english").css("opacity",1);
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

$(".done").click(function(){
	$(".english").css("opacity",1);
	$(".turkish").css("opacity",0);
});

$(".full").hide(0).delay(5000).show(0);


$(".full").click(function(){
	$(".lines_two").toggle("hide");
	$(".p2").toggleClass("hide");
	$(".version_two").toggleClass("hide");
	
});
















