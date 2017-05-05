var yolCicekleri = ["İşte yolculuk kuralı: olmayanı git yaşa <span class='english'>It is the rule of journey: live the inexistence</span>",
					"Gözlerinde neler var Oğuz <span class='english'> What is in your eyes, Oğuz</span>",
					"Her gemi bir eylem yavrusu seç bir yol <span class='english'>Every ship is an action, choose a path</span>",
					"Gözlerin yıldız falcısı Oğuz <span class='english'>Your eyes are the fortune teller</span>",
					"Serüvenlerden bilinir gerçeklik duygusu <span class='english'>The sense of reality from the adventures</span>",
					"Kendi kendine kalma Oğuz <span class='english'>Dont stay by yourself, Oğuz</span>",
					"Bir başka zamanda bir başka hayat <span class='english'>In another time in another life</span>",
					"İkisini birbirine bağla Oğuz <span class='english'>Tie those two together, Oğuz</span>",
					"Küçük beyaz çiçekleri uğruna düşüncenin <span class='english'>Small white flowers for the sake of your thoughts</span>",
					"Büyük dağlar aşacağız Oğuz <span class='english'>We are going to go over big mountains</span>",
					"Bir avize gibi ışırsa eğer gökyüzünde renkleri <span class='english'>if its colors shine like a chandelier in the sky </span>",
					"Bulunur yol çiçekleri Oğuz <span class='english'>the flowers will be found Oğuz</span>",
					"Hiçbir gemi kalkmıyor yaşanılmak istenene <span class='english'>None of the ships are taking off to the wanted to be lived </span>",
					"Yine de bin git sen Oğuz <span class='english'>Even so get on and leave Oğuz</span>",
					"Büyük bir serüveni düşleyebilenler yaşar ancak <span class='english'>The ones who can dream a big adventure will experience</span>",
					"Bak ve unutma <span class='english'>Look and dont forget</span>",
					"Anlatmaya dön gel Oğuz <span class='english'>Come back to tell</span>"

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
	$(".english").css("opacity",1);
$(".lines_nine").mouseleave(function(){
	$(".english").css("opacity",0);
});
});



