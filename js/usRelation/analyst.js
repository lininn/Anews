$(".ana_ite").hover(function(){
	
	$(this).css({"transform":"translate(0,-10px)","box-shadow": "5px 5px 15px #dbdbdb"});
},function(){
	$(this).css({"transform":"translate(0,0px)","box-shadow": "none"});
});
/*轮播导航*/
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