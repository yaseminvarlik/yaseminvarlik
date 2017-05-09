var olumUlkesi = ["Gece bir karşı varlıktı karanlığıma <span class='english'>Night was an object against my darkness</span>",
					"Gece tanımsız bir bütünlük <span class='english'>Night is an unknown whole </span>",
					"Senin hayatını düşündüm <span class='english'>I thought about your life</span>",
					"Sevmek sevgilinin suretine bürünmektir biraz da <span class='english'>to love is to transform yourself in the appearance of your beloved</span>",
					"Sonbahar uzaktan bakmaktı sana <span class='english'>Autumn was looking at you from the distance</span>",
					"Sonbahar yeniden ölüm <span class='english'>Autumn is re-death</span>",
					"Mithatpaşa Caddesi’nde yürüyorum <span class='english'>I am walking on Mithatpasa street</span>",
					"Kimbilir bu duyguyu kaçıncı kez yaşıyorum <span class='english'>Who knows how many times I have been feeling this emotion</span>",
					"Güzelyalı tenha bir gece olmuş İzmir’de <span class='english'>Guzelyali has become a deserted night in Izmir</span>",
					"Hep senin gözlerini görüyorum <span class='english'>I always see your eyes</span>",
					"Yaşamak yumuşak dikenlerinde yokluğunun <span class='english'>Living in your soft thorns in your absence </span>",
					"İkimize de iki ayrı evrende iki ayrı barış <span class='english'>Both of us in two different universe two different peace</span>",
					"Bir uyumu eylemek zordur bunun gibi <span class='english'>It is hard to get harmony like this</span>",
					"Uyum yokluğuysa uyumsuzluğunun <span class='english'>If it is absence of harmony of your disharmony </span>",
					"Sen yok gibisin<span class='english'>Like you are not here</span>",
					"Yokluğunu kim tamamlayacak <span class='english'>who is going to define your absence</span>",
					"Güzelyalı bir vapur olmuş körfezde <span class='english'>Guzelyali has turned into a boat at the gulf</span>",
					"Sulara ışığını sürüyor yanılsama <span class='english'>Illusion is spreading its light on the water</span>",
					"İşte bir kavram sevgimi tanımlayacak <span class='english'>Here is a concept defining my love </span>",
					"Yanılsama yansır içinde bir vapur penceresinin <span class='english'>Illusion is reflected on the window of the boat</span>",
					"Sevgilim gölgen gölgeni görüyorum senin <span class='english'>My love I see your shadow</span>",
					"Kimse bilmeyecek yerini ölüm ülkesinin <span class='english'>No one is going to know the location of the world of death</span>",
					"Ölüm ülkesi karanlık bir gece <span class='english'>A world of death is a dark night</span>",
					"Kimsenin tanıklığı yok sevgimize <span class='english'>No one has witnessed our love</span>",
					"Gece kimsenin bilmediği bir ölüm ülkesidir <span class='english'>The night is the unknown world of the death</span>",
					"Sevgilim bu sonbahar günlerinde <span class='english'>My love in these autumn days</span>",
					"Nadir olan şey yok gibidir <span class='english'>As if the rare things are absent</span>"

				]

var randomLine = Math.floor(Math.random()* (olumUlkesi.length));

	$(".lines_seven").append(olumUlkesi[randomLine])
	for (var multiplier = 0; multiplier < olumUlkesi.length; multiplier++) {
    var result = multiplier * 6;
  	console.log(olumUlkesi[multiplier]);
  	$("body").append("<div class='lines_seven paragraph-"+multiplier+"'>"+olumUlkesi[multiplier]+"</div>");
};


$('.lines_seven').each(function(){
	var offset = Math.floor(Math.random() * (700));
	var offsetLeft = Math.floor(Math.random() * (900));
	$(this).css("top",offset);
	$(this).css("left",offsetLeft);
});


$( ".lines_seven" ).draggable();

$(".lines_seven").mouseover(function(){
	$(this).find(".english").css("opacity",1);
$(".lines_seven").mouseleave(function(){
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
	$(".lines_seven").toggle("hide");
	$(".p7").toggleClass("hide");
	$(".version_seven").toggleClass("hide");
	
});
