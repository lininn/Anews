/*这是轮播导航 */
var laleft;
$(".con_ri").click(function(){
 laleft=$(".re_cen ul").position().left-158;
 if(laleft<=-790){
 	laleft=-790;
 }
 $(".re_cen ul").css("left",laleft);
});

$(".con_le").click(function(){
 laleft=$(".re_cen ul").position().left+158;
 if(laleft>=0){
 	laleft=0;
 }
 $(".re_cen ul").css("left",laleft);
});




/*dianji*/



$(".qu_art").click(function(){
	
	
	if($(this).find(".qu_req").is(":hidden")){
		$(this).parent(".qu_q").css("color","#E5674E");
		$(this).find(".qu_ite2").css("background","url(../../img/usRelation/que_ico3.png) no-repeat center center");
	$(this).find(".qu_req").slideDown();
	}else{
		$(this).find(".qu_ite2").css("background","url(../../img/usRelation/que_ico4.png) no-repeat center center");
	$(this).find(".qu_req").slideUp();
	$(this).find(".qu_q").css("color","#333");
	}
	
	
});