 
var cingeneArabasi = ["<span class='turkish'>Yeşil bir çingene vagonudur İzmir</span> <span class='english'>Izmir is a green gypsy wagon </span>",
					"<span class='turkish'>Tekerleklerinde çanlar çalan</span> <span class='english'>Bells ringing in its wheels </span>",
					"<span class='turkish'>Hız arabaları çeker götürür hafta sonları</span><span class='english'>Speed pulls the cars on the weekends</span>",
					"<span class='turkish'>Kendisinin BMW annesinin Chrysler </span><span class='english'>His BMW his mom's Chrysler </span>",
					"<span class='turkish'>İlk yüz metrede üçüncü vites </span><span class='english'>The first two hundred meters third gear </span>",
					"<span class='turkish'>Çeker gider sıcaklığın yükseldiği yere </span><span class='english'>Goes away to where the heat rises </span>", 
					"<span class='turkish'>Ve bu sıcak güzeldir</span> <span class='english'>And this heat is nice </span>",
					"<span class='turkish'>Her şey uzaktır bir su yakın</span> <span class='english'>Everything is far except water is near </span>",
					"<span class='turkish'>İzmir’in tarihini su yazdı zaten</span> <span class='english'>Water wrote the history of Izmir </span>",
					"<span class='turkish'>Kumluğun kenarında durur yeşil bir vagon</span> <span class='english'>In the corner of sand a green wagon </span>",
					"<span class='turkish'>Dünyaya inananların yer ülkesinde</span> <span class='english'>In the country of people who believe in world </span>",
					"<span class='turkish'>Hoş vakit geçirmek için kararlı </span><span class='english'>Dedication to spend nice time </span>",
					"<span class='turkish'>Bir karargâh görevindedir deniz</span> <span class='english'>The sea acts as an headquarter </span>", 
					"<span class='turkish'>Ve bu görev güzeldir</span> <span class='english'>And this duty is nice </span>",
					"<span class='turkish'>Hafta sonları hafta içini unutarak </span><span class='english'>On the weekends forgetting the weekdays </span>",
					"<span class='turkish'>Cuma geceleri yüz elliyle karşılanacak</span> <span class='english'>On friday nights welcomed by hundred and fifty </span>",
					"<span class='turkish'>Bu yeşil dünyanın karargâhında yakılır ateş </span><span class='english'>The fire is lit on the headquarters of this green world </span>",
					"<span class='turkish'>Şarabın kırmızısına bir ışık vurur</span> <span class='english'>It reflects light on to the redness of wine </span>",
					"<span class='turkish'>Bir Yanlış Kuşu konar vagonun tepesine</span> <span class='english'>A bird of mistakes perches on top of the wagon </span>",
					"<span class='turkish'>Yanlışları yiyerek bütünler haftayı</span> <span class='english'>It completes the week by eating away the mistakes </span>",
					"<span class='turkish'>Çatlar ölür yanlışların çokluğundan</span> <span class='english'>Bang! dies due to the expense of the wrong </span>", 
					"<span class='turkish'>Ve bu ölüm güzeldir</span> <span class='english'>And this death is nice </span>"
					]

var randomLine = Math.floor(Math.random()* (cingeneArabasi.length));

	$(".lines_eight").append(cingeneArabasi[randomLine])
	for (var multiplier = 0; multiplier < cingeneArabasi.length; multiplier++) {
    var result = multiplier * 6;
  	console.log(cingeneArabasi[multiplier]);
  	$("body").append("<div class='lines_eight paragraph-"+multiplier+"'>"+cingeneArabasi[multiplier]+"</div>");
};


$('.lines_eight').each(function(){
	var offset = Math.floor(Math.random() * (700));
	var offsetLeft = Math.floor(Math.random() * (900));
	$(this).css("top",offset);
	$(this).css("left",offsetLeft);
});


$( ".lines_eight" ).draggable();

$(".lines_eight").mouseover(function(){
	$(this).find(".english").css("opacity",1);
$(".lines_eight").mouseleave(function(){
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
	$(".lines_eight").toggle("hide");
	$(".p8").toggleClass("hide");
	$(".version_eight").toggleClass("hide");
	
});