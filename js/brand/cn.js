$(".art_bod ul li").hover(function(){
	$(".tx2").stop(true,true);
	$(".tx4").stop(true,true);
		$(".pin_tx1").css("display","none");
		$(".tx2").css("top","55");
		$(".tx4").css("top","55");
	$(this).find(".pin_tx1").fadeIn();
	$(this).find(".tx2").animate({"top":"55"},200);
	$(this).find(".tx4").animate({"bottom":"55"},200);
},function(){
	$(this).find(".pin_tx1").css("display","none");
	$(this).find(".tx2").css("top","55");
	$(this).find(".tx4").css("bottom","55");
})