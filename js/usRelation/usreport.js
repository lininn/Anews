
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








var thez;
$(".us_ima").hover(function(){

thez=$(this).index();
$(".us_ima").find(".re_tit").stop(true,true);
	$(".us_ima").find(".re_mor").stop(true,true);
$(".us_ima").find(".re_tit").css({"top":"30px"});
	$(".us_ima").find(".re_mor").css({"bottom":"30px"});
	$(".us_ima").eq(thez).find(".itmeng").fadeIn();
	$(".us_ima").eq(thez).find(".re_tit").animate({"top":"75px"},200);
	$(".us_ima").eq(thez).find(".re_mor").animate({"bottom":"75px"},200);
},function(){
	$(".us_ima").find(".re_tit").css({"top":"30px"});
	$(".us_ima").find(".re_mor").css({"bottom":"30px"});
	$(".itmeng").css("display","none");
});


/*nian*/
$(".us_r").click(function(){
	if($(".us_list").is(":hidden")){
		$(".us_list").slideDown();
	}else{
		$(".us_list").slideUp();
	}
});


/*跳转*/
function tiaozhuan(url){
	location.href=url;
}
