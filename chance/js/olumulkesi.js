var olumUlkesi = ["<span class='turkish'>Gece bir karşı varlıktı karanlığıma</span> <span class='english'>Night was an object against my darkness</span>",
					"<span class='turkish'>Gece tanımsız bir bütünlük</span> <span class='english'>Night is an unknown whole </span>",
					"<span class='turkish'><span class='turkish'>Senin hayatını düşündüm</span> <span class='english'>I thought about your life </span>",
					"<span class='turkish'>Sevmek sevgilinin suretine bürünmektir biraz da</span><span class='english'>to love is to transform yourself in the appearance of your beloved </span>",
					"<span class='turkish'>Sonbahar uzaktan bakmaktı sana </span><span class='english'>Autumn was looking at you from the distance </span>",
					"<span class='turkish'>Sonbahar yeniden ölüm</span> <span class='english'>Autumn is re-death </span>",
					"<span class='turkish'>Mithatpaşa Caddesi’nde yürüyorum</span> <span class='english'>I am walking on Mithatpasa street </span>",
					"<span class='turkish'>Kimbilir bu duyguyu kaçıncı kez yaşıyorum</span> <span class='english'>Who knows how many times I have been feeling this emotion </span>",
					"<span class='turkish'>Güzelyalı tenha bir gece olmuş İzmir’de</span> <span class='english'>Guzelyali has become a deserted night in Izmir</span>",
					"<span class='turkish'>Hep senin gözlerini görüyorum </span><span class='english'>I always see your eyes </span>",
					"<span class='turkish'>Yaşamak yumuşak dikenlerinde yokluğunun</span> <span class='english'>Living in your soft thorns in your absence </span>",
					"<span class='turkish'>İkimize de iki ayrı evrende iki ayrı barış</span> <span class='english'>Both of us in two different universe two different peace </span>",
					"<span class='turkish'>Bir uyumu eylemek zordur bunun gibi</span> <span class='english'>It is hard to get harmony like this </span>",
					"<span class='turkish'>Uyum yokluğuysa uyumsuzluğunun</span> <span class='english'>If it is absence of harmony of your disharmony </span>",
					"<span class='turkish'>Sen yok gibisin</span><span class='english'>Like you are not here </span>",
					"<span class='turkish'>Yokluğunu kim tamamlayacak</span> <span class='english'>who is going to define your absence </span>",
					"<span class='turkish'>Güzelyalı bir vapur olmuş körfezde</span> <span class='english'>Guzelyali has turned into a boat at the gulf </span>",
					"<span class='turkish'>Sulara ışığını sürüyor yanılsama</span> <span class='english'>Illusion is spreading its light on the water</span>",
					"<span class='turkish'>İşte bir kavram sevgimi tanımlayacak</span> <span class='english'>Here is a concept defining my love  </span>",
					"<span class='turkish'>Yanılsama yansır içinde bir vapur penceresinin</span> <span class='english'>Illusion is reflected on the window of the boat </span>",
					"<span class='turkish'>Sevgilim gölgen gölgeni görüyorum senin</span> <span class='english'>My love I see your shadow </span>",
					"<span class='turkish'>Kimse bilmeyecek yerini ölüm ülkesinin</span> <span class='english'>No one is going to know the location of the world of death </span>",
					"<span class='turkish'>Ölüm ülkesi karanlık bir gece</span> <span class='english'>A world of death is a dark night </span>",
					"<span class='turkish'>Kimsenin tanıklığı yok sevgimize</span> <span class='english'>No one has witnessed our love </span>",
					"<span class='turkish'>Gece kimsenin bilmediği bir ölüm ülkesidir</span> <span class='english'>The night is the unknown world of the death </span>",
					"<span class='turkish'>Sevgilim bu sonbahar günlerinde</span> <span class='english'>My love in these autumn days </span>",
					"<span class='turkish'>Nadir olan şey yok gibidir</span> <span class='english'>As if the rare things are absent </span>"

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

$(".done").click(function(){
	$(".english").css("opacity",1);
	$(".turkish").css("opacity",0);
});

$(".full").hide(1).delay(5000).show(1);

$(".full").click(function(){
	$(".lines_seven").toggle("hide");
	$(".p7").toggleClass("hide");
	$(".version_seven").toggleClass("hide");
	
});
