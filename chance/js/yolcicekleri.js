var yolCicekleri = ["<span class='turkish'>İşte yolculuk kuralı: olmayanı git yaşa </span><span class='english'>It is the rule of journey: live the inexistence </span>",
					"<span class='turkish'>Gözlerinde neler var Oğuz</span> <span class='english'> What is in your eyes, Oğuz </span>",
					"<span class='turkish'>Her gemi bir eylem yavrusu seç bir yol</span> <span class='english'>Every ship is an action, choose a path </span>",
					"<span class='turkish'>Gözlerin yıldız falcısı Oğuz </span><span class='english'>Your eyes are the fortune teller </span>",
					"<span class='turkish'>Serüvenlerden bilinir gerçeklik duygusu </span><span class='english'>The sense of reality from the adventures </span>",
					"<span class='turkish'>Kendi kendine kalma Oğuz</span> <span class='english'>Dont stay by yourself, Oğuz </span>",
					"<span class='turkish'>Bir başka zamanda bir başka hayat </span><span class='english'>In another time in another life </span>",
					"<span class='turkish'>İkisini birbirine bağla Oğuz</span> <span class='english'>Tie those two together, Oğuz </span>",
					"<span class='turkish'>Küçük beyaz çiçekleri uğruna düşüncenin</span> <span class='english'>Small white flowers for the sake of your thoughts </span>",
					"<span class='turkish'>Büyük dağlar aşacağız Oğuz </span><span class='english'>We are going to go over big mountains Oguz </span>",
					"<span class='turkish'>Bir avize gibi ışırsa eğer gökyüzünde renkleri</span> <span class='english'>if its colors shine like a chandelier in the sky </span>",
					"<span class='turkish'>Bulunur yol çiçekleri Oğuz </span><span class='english'>the flowers will be found Oğuz </span>",
					"<span class='turkish'>Hiçbir gemi kalkmıyor yaşanılmak istenene </span><span class='english'>None of the ships are taking off to the wanted to be lived </span>",
					"<span class='turkish'>Yine de bin git sen Oğuz</span> <span class='english'>Even so get on and leave Oğuz  </span>",
					"<span class='turkish'>Büyük bir serüveni düşleyebilenler yaşar ancak</span> <span class='english'>The ones who can dream a big adventure will experience </span>",
					"<span class='turkish'>Bak ve unutma </span><span class='english'>Look and dont forget </span>",
					"<span class='turkish'>Anlatmaya dön gel Oğuz</span> <span class='english'>Come back to tell, Oguz </span>"

					]

var randomLine = Math.floor(Math.random()* (yolCicekleri.length));

	$(".lines_nine").append(yolCicekleri[randomLine])
	for (var multiplier = 0; multiplier < yolCicekleri.length; multiplier++) {
    var result = multiplier * 6;
  	console.log(yolCicekleri[multiplier]);
  	$("body").append("<div class='lines_nine paragraph-"+multiplier+"'>"+yolCicekleri[multiplier]+"</div>");
};


$('.lines_nine').each(function(){
	var offset = Math.floor(Math.random() * (700));
	var offsetLeft = Math.floor(Math.random() * (900));
	$(this).css("top",offset);
	$(this).css("left",offsetLeft);
});


$( ".lines_nine" ).draggable();

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



$(".lines_nine").mouseover(function(){
	$(this).find(".english").css("opacity",1);
$(".lines_nine").mouseleave(function(){
	$(".english").css("opacity",0);
});
});

$(".done").click(function(){
	$(".english").css("opacity",1);
	$(".turkish").css("opacity",0);
});

$(".full").hide(1).delay(5000).show(1);

$(".full").click(function(){
	$(".lines_nine").toggle("hide");
	$(".p9").toggleClass("hide");
	$(".version_nine").toggleClass("hide");
});



