var theidnex=null;
 var theidnex1=null;

$(".item_super").hover(function(){
 theidnex=$(this).index();

$(".item_super").eq(theidnex).find(".man_ti").css("background","#E5674E");
 		
 	
 	 $(".item_super").eq(theidnex).find(".manu_item").css({
 		"box-shadow":"5px 20px 40px #c1c0c0,-5px 8px 40px #c1c0c0"
 	 });
 	
 	
 	// $(".manu_item").eq(theidnex).animate({"height":"},100);
 	if(theidnex==5){

 		$(".item_super").eq(5).find(".manu_item").animate({"height":"+=70"},100);
 		$(".item_super").eq(5).find(".jianjie").animate({"height":"+=70"},100);
 	}
 //	alert($(".item_super").eq(theidnex).children(".manu_item").children(".man_arti").children(".jianjie").css("height"));
 	
 	
},function(){
	
$(".manu_item").eq(theidnex).children(".man_ti").css("background","#cccccc");

 	 $(".item_super").eq(theidnex).find(".manu_item").css({
 		"box-shadow":"none"
 	});
 	
 	if(theidnex==5){
 	$(".item_super").eq(5).find(".jianjie").css("overflow","hidden");
 		$(".item_super").eq(5).find(".manu_item").animate({"height":"-=70"},150);
 		$(".item_super").eq(5).find(".jianjie").animate({"height":"-=70"},150);
 	}
 	
})




$(".team_item").hover(function(){
 theidnex1=$(this).index();
 theidnex1--;

$(".team_item").eq(theidnex1).children(".team_pic2").css("background","#E5674E");
$(".team_item").eq(theidnex1).css("border","3px solid #e9e9e9");
 	$(".team_item").eq(theidnex1).css({
 		"box-shadow":"5px 15px 40px #bdbdbd,-5px 8px 40px #bdbdbd"
 	});
},function(){
	
$(".team_item").eq(theidnex1).children(".team_pic2").css("background","#cccccc");
$(".team_item").eq(theidnex1).css("border","3px solid transparent");
 	$(".team_item").eq(theidnex1).css({
 		"box-shadow":"none"
 	});
})