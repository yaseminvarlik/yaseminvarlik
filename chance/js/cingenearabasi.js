 
var cingeneArabasi = ["Yeşil bir çingene vagonudur İzmir <span class='english'>Izmir is a green gypsy wagon</span>",
					"Tekerleklerinde çanlar çalan <span class='english'>Bells ringing in its wheels </span>",
					"Hız arabaları çeker götürür hafta sonları<span class='english'>Speed pulls the cars on the weekends</span>",
					"Kendisinin BMW annesinin Chrysler <span class='english'>His BMW his mom's Chrysler</span>",
					"İlk yüz metrede üçüncü vites <span class='english'>The first two hundred meters third gear</span>",
					"Çeker gider sıcaklığın yükseldiği yere <span class='english'>Goes away to where the heat rises</span>", 
					"Ve bu sıcak güzeldir <span class='english'>And this heat is nice</span>",
					"Her şey uzaktır bir su yakın <span class='english'>Everything is far except water is near</span>",
					"İzmir’in tarihini su yazdı zaten <span class='english'>Water wrote the history of Izmir</span>",
					"Kumluğun kenarında durur yeşil bir vagon <span class='english'>In the corner of sand a green wagon</span>",
					"Dünyaya inananların yer ülkesinde <span class='english'>In the country of people who believe in world</span>",
					"Hoş vakit geçirmek için kararlı <span class='english'>Dedication to spend nice time</span>",
					"Bir karargâh görevindedir deniz <span class='english'>The sea acts as an headquarter</span>", 
					"Ve bu görev güzeldir <span class='english'>And this duty is nice</span>",
					"Hafta sonları hafta içini unutarak <span class='english'>On the weekends forgetting the weekdays</span>",
					"Cuma geceleri yüz elliyle karşılanacak <span class='english'>On friday nights welcomed by hundred and fifty</span>",
					"Bu yeşil dünyanın karargâhında yakılır ateş <span class='english'>The fire is lit on the headquarters of this green world</span>",
					"Şarabın kırmızısına bir ışık vurur <span class='english'>It reflects light on to the redness of wine </span>",
					"Bir Yanlış Kuşu konar vagonun tepesine <span class='english'>A bird of mistakes perches on top of the wagon</span>",
					"Yanlışları yiyerek bütünler haftayı <span class='english'>It completes the week by eating away the mistakes</span>",
					"Çatlar ölür yanlışların çokluğundan <span class='english'>Bang! dies due to the expense of the wrong</span>", 
					"Ve bu ölüm güzeldir <span class='english'>And this death is nice</span>"
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

$(".full").hide(1).delay(5000).show(1);

$(".full").click(function(){
	$(".lines_eight").toggle("hide");
	$(".p8").toggleClass("hide");
	$(".version_eight").toggleClass("hide");
	
});