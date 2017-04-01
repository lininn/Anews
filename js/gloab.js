var shan=true;
var ji=0;
var timer=null;
theop=0;
shandong();

function shandong(){
	clearInterval(timer);
if(shan){
	 timer=setInterval(function(){
		ji++;
		 theop=(100-ji)/100;
			 $(".adddown img").css("opacity",theop);
			  $(".adddown img").css("transform","scale("+theop+","+theop+")");
		
		if(ji>=90){
			clearInterval(timer);
	
			theop=0;
			ji=0;
			shan=false;
			shandong();
		}
			
	},10);	
	}else{
		
		timer=setInterval(function(){
		ji++;
		
			theop=ji/100;
			 $(".adddown img").css("opacity",theop);
			 $(".adddown img").css("transform","scale("+theop+","+theop+")");
			 if(ji>=100){
			clearInterval(timer);
			shan=true;
			theop=0;
			ji=0
			shandong();
		}
		
	},10);	
		
		
		
		
		
	}	
	
	
}
	
	

	
	
	
	var a=true;
	$(".adddown").on("click",function(){
		if(a){
			$(".footer").css("background","url(../../img/footer_bg.png) no-repeat center center");
		$(".footer").animate({"height":"600px"},200);
		$(this).find("img").attr("src","../../img/upp.png");
		$(".foo_l").animate({"height":"400px"},200);
		a=false;
		clearInterval(timer);
		$(this).find("img").css("transform","scale(1,1)");
		$(this).find("img").css("opacity","1");
		}else{
		
		$(".footer").animate({"height":"391px"},200);
		
		$(".foo_l").animate({"height":"235px"},200,function(){
			$(".footer").css("background","url(../../img/foot_bgx.jpg no-repeat center center");
		   $(".adddown").find("img").attr("src","../../img/down.png");
		   shandong();
		});
		
		a=true;
		}
		
	});
	/*导航条的下拉菜单*/
	$(".i_do").click(function(){
	 if($(".do_item").is(":hidden")){
	 	$(".do_item").slideDown();
	 	
	 }else{
	 	$(".do_item").slideUp();
	 }
	});
	
	$(".do_item li").click(function(){
		$(".i_list h2").html($(this).html());
	})
	
	
	console.log("伟仕佳杰，引领数字化亚洲！");