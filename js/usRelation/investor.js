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
/*使用下拉*/
/*将年放进去*/
$.get("../../admin/relation/dealphp/relation/relation.php",{wd:1},function(data){
	var data=JSON.parse(data);
	var ayear="";
	    	 data=data.data;
	    	 if(data.length<=0){
	    	 
	    	 }else{
	    	 	for(var i=0;i<data.length;i++){
					ayear+="<li>"+data[i].ryear+"</li>";
	    	 	}
	    	 	$("#ryear").html(ayear);
	    	 }
			
			
})
toogleYear();
function toogleYear(){
	
	$(".sele").click(function(){
		
		if($(".sele div>ul").is(":hidden")){
			if($(".sele>div>ul").children("li").length>0){
				$(".sele>div>ul").slideDown();
			}
			
			
		}else{
			$(".sele>div>ul").slideUp();
		}
	});
	
	
	
	$(".sele div ul").on("click","li",function(){
		 theyear=$(this).html();
		$("#reti_1").html($(this).html());
		
		$.get("../../admin/relation/dealphp/relation/relation.php",{year:theyear},function(data){
			str="";
			var data=JSON.parse(data);
	    	 data=data.data;
	    	 if(data.length<10){
	    	 	$("#btn_mor").css("display","none");
	    	 }else{
	    	 	$("#btn_mor").css("display","block");
	    	 }
			for(var i=0;i<data.length;i++){
			data[i].rshijian=data[i].rshijian.substr(0,10);
			str+="<dd onclick=locati('"+data[i].rpath+"')><i><img src='../../img/usRelation/re_item1.png'/></i><p>"+data[i].rtitle+"</p><span>"+data[i].rshijian+"</span></dd>"
		}
		$(".re_table").html(str);
		
		});
		
		$(".sele>div>ul").slideUp();
	})
	
	
}
