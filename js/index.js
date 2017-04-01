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
			$(".footer").css("background","url(img/footer_bg.png) no-repeat center center");
		$(".footer").animate({"height":"600px"},200);
		$(this).find("img").attr("src","img/upp.png");
		$(".foo_l").animate({"height":"400px"},200);
		a=false;
		clearInterval(timer);
		$(this).find("img").css("transform","scale(1,1)");
		$(this).find("img").css("opacity","1");
		}else{
		
		$(".footer").animate({"height":"391px"},200);
		
		$(".foo_l").animate({"height":"235px"},200,function(){
			$(".footer").css("background","url(img/foot_bgx.jpg no-repeat center center");
		   $(".adddown").find("img").attr("src","img/down.png");
		   shandong();
		});
		
		a=true;
		}
		
	});
	console.log("伟仕佳杰，引领数字化亚洲！");
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
	

/*下方的*/
var unslider04=null;
$(function(){
	   unslider04 = $('#b04').unslider({
	
		dots: true,
		fluid: true,
		delay:2000

	});
	

	data04 = unslider04.data('unslider');


	$('.unslider-arrow04').click(function() {

        var fn = this.className.split(' ')[1];

        data04[fn]();

    });
   
   $(".btnplay").click(function(){
		str='<video autoplay="autoplay" controls="controls" id="vi_src" src="assets/video/fisrst.mp4"></video>';
	$(".btnplay").css("display","none");
	$("#bo_con").css("opacity","1");
	$("#bo_con").html(str);
	//unslider04.data()[0].stop();
	unslider04.data("unslider").stop()
	console.log(unslider04.data("unslider").stop());
	//unslider04
	
	})

/*给video添加事件绑定当点击video界面是轮播图停止*/
$("#bo_con").on("click","#vi_src",function(){
	unslider04.data("unslider").stop();
});

  

    
	
});


    
    
    /*轮播图 点击切换*/
   $(function(){
				var nowleft=null;
				//点击切换图 
				$(".pre").click(function(){
					nowleft=parseInt($(".aboutPic").css("left"));
				
					nowleft+=1080;
					if(nowleft>=0){
						nowleft=0;
					}
					$(".aboutPic").css("left",nowleft);
				
				})
				
				$(".next").click(function(){
					
				
					
					
					nowleft=parseInt($(".aboutPic").css("left"))   ;
					
					nowleft-=1080;
				var Picul=$(".aboutPic").children("ul").length;
				Picul=-Math.ceil(Picul/5)*1080;
				if(nowleft<=Picul){
					nowleft+=1080;
				}
					$(".aboutPic").css("left",nowleft);
					
				})
				
				
				
				
			
				
				
			})
   


function newsCar(){
	var  zhi=0;
	var timera=null;
var timerd=null;
	timera=setInterval(ding,2000);
	
	$("#news_btnl").click(function(){
		clearInterval(timera);
	clearTimeout(timerd);
	zhi--;
	if(zhi<0){
		zhi=3
	}
	
	$(".neimg ul li").eq(zhi).siblings().css("display","none");
	$(".neimg ul li").eq(zhi).fadeIn();
	newCar1(zhi);
	timerd=setTimeout(function(){
		timera=setInterval(ding,2000);
	},2000);
	
});
$("#news_btnr").click(function(){
	clearInterval(timera);
	clearTimeout(timerd);
	zhi++;
	if(zhi>3){
		zhi=0
	}
	$(".neimg ul li").eq(zhi).siblings().css("display","none");
	$(".neimg ul li").eq(zhi).fadeIn();
	newCar1(zhi);
	timerd=setTimeout(function(){
		timera=setInterval(ding,2000);
	},2000);
})


function ding(){
	zhi++;
	if(zhi>=4){
		zhi=0;
	}
	
	$(".neimg ul li").eq(zhi).siblings().css("display","none");
	$(".neimg ul li").eq(zhi).fadeIn();
	$(".news_new ul li").eq(zhi).siblings("li").css({"background":"#f5f5f5","color":"#000"});
	$(".news_new ul li").eq(zhi).css({"background":"#e5674e","color":"#fff"});
	$(".news_new ul li").eq(zhi).siblings("li").find("img").attr("src","img/index/color_1.png");
	$(".news_new ul li").eq(zhi).find("img").attr("src","img/index/color_2.png");
	
	}



}

function newCar1(zhi){
	$(".news_new ul li").eq(zhi).siblings("li").css({"background":"#f5f5f5","color":"#000"});
	$(".news_new ul li").eq(zhi).css({"background":"#e5674e","color":"#fff"});
	$(".news_new ul li").eq(zhi).siblings("li").find("img").attr("src","img/index/color_1.png");
	$(".news_new ul li").eq(zhi).find("img").attr("src","img/index/color_2.png");
	
}
newsCar();



/*地址*/
$(".biao").click(function(){
		var country=$(this).text();
		switch (country){
			case "中国":
			 eachArr(contries[0]);break;
			case "泰国":
			 eachArr(contries[1]);
			
			
			
			break;
				
			case "老挝":
			eachArr(contries[2]);break;
				
		
			case "缅甸":
			eachArr(contries[3]);break;
				
			case "柬埔寨":
			eachArr(contries[4]);break;
			
			case "马来西亚":
			eachArr(contries[5]);break;
			
			case "菲律宾":
			eachArr(contries[6]);break;
			
			case "新加坡":
			eachArr(contries[7]);break;
			
			case "印尼":
			eachArr(contries[8]);break;
			
			}
	});
	
	
	




function eachArr(arr){
	var zhi=arr.dataas.length;
	console.log(arr);
	var str="<h2>"+arr.name+"</h2>";
	
	for(var i=0;i<zhi;i++){
		nth=arr.dataas;
		//console.log(arr.dataas[0]);
		str+="<ul>";
		for(var j in nth[i]){
			str+="<li>"+nth[i][j]+"</li>";
		}
		str+="</ul>";
	}
	
	$(".nei_1").html(str);
	}




var contries=[{
		name:"中国",
		dataas:[{
			ming:"香港（伟仕控股集团总部)",
			adress:"地址：香港上环干诺道中200号信德中心招商局大厦33层3312室",
			tell:"电话：+0852-27861836",
			chuan:"传真：+0852-27861746",
			email:"电邮：VSTComp@vst.com.hk"
			
		}]
	},
	
	{
		name:"泰国",
		dataas:[{
			ming:"Thailand（泰国）",
			adress:"地址：21st Floor, Serm-Mit Tower 159/35 Sukhumvit 21 Road (Asok) North Klongtoey, Wattana Bangkok 10110, Thailand",
			tell:"电话：+66 2661 6666 / +66 2261 2900",
			chuan:"传真：+66 2661 6564 / +66 2661 6990 / +66 2661 6910",
			email:"电邮：pr@value.co.th Offices in Bangkok, Chiang Mai, Hat Yai, Khon Kaen, Nakhon Ratchasima, Phitsanulok, Phuket, Rayong, Surat Thani"
			
		}]
	},
	
	
	
	{
		name:"老挝",
		dataas:[]
	},
	
	
	{
		name:"缅甸",
		dataas:[]
	},
	
	
	{
		name:"柬埔寨",
		dataas:[]
	},
	
	{
		name:"马来西亚",
		dataas:[{
			ming:"马来西亚",
			adress:"地址：Lot 3, Jalan Teknologi 3/5 Taman Sains Selangor Kota Damansara 47810 Petaling Jaya Selangor, Malaysia",
			tell:"电话：+60 3 6286 8222",
			chuan:"传真：enquiry@ecsm.com.my",
			email:"Offices in Johor Bahru, Kota Kinabalu, Kuantan, Kuching, Penang, Petaling Jaya"
			
		}]
	},
	
	{
		name:"菲律宾",
		dataas:[{
			ming:"Philippines（菲律宾）",
			adress:"地址：Topy II Bldg, #3 Economia Street Libis Quezon City 1110 Philippines",
			tell:"电话：+63 2 688-3890",
			chuan:"传真：+63 2 688-3590",
			email:"电邮：marketing@msi-ecs.com.ph",
			ying:"Offices in Manila, Cebu, Davao, Taguig"
			
		}]
		


	},
	
		
		{
		name:"新加坡",
		dataas:[{
			ming:"Singapore（新加坡）",
			adress:"地址：ECS Holdings Limited 19 Kallang Avenue Singapore 339410",
			tell:"电话：+65 66596888/62999433",
			chuan:"传真：+65 6884 7549/62913912/62918380",
			email:"电邮：enquiry@ecs.com.sg"
			
			
		}]
		






	},
	
		{
		name:"印尼",
		dataas:[{
			ming:"Indonesia（印度尼西亚）",
			adress:"地址：ECS Indo Jaya, PT Ruko Mangga Dua Square Blok E 34-37 Jl. Gunung Sahari Raya No.1 Jakarta Utara 14420 - Indonesia",
			tell:"电话：+62 21 6231 2893 | Fax: +62 21 6231 3661",
			chuan:"电邮：marketing@ecsindo.com",
			email:"Offices in Bandung, Jakarta, Makassar, Medan, Semarang, Surabaya, Yogyakarta"
			
			
		}]
		








	}
	
	
	
	]


/*业务部分的js*/
yewu();
function yewu(){
	zhi=0;
$(".ye_ico li").mouseover(function(){
	
	zhi=$(this).index();
	
	$(this).find("img").css("bottom","-70px");
	$(this).find("img").attr("src","img/index/ye_icoo"+(zhi+1)+".png");
	$(this).find("img").animate({"bottom":"0px"},300);
});
$(".ye_ico li").mouseout(function(){
	$(".ye_ico li").eq(zhi).find("img").attr("src","img/index/ye_ico"+(zhi+1)+".png");
});
}


