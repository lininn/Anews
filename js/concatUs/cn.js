var rowin=0;
var item=0;
//$(".cnn").hover(function(){
//  rowin=$(this).parent(".cn_row").index();
//  item=$(this).index();
//  $(this).animate({"top":0},200);
//  $(this).css("box-shadow","4px 10px 10px #dddddd");
//},function(){
//$(".cnn").css("top","15");	
//$(".cnn").css("box-shadow","none");
//})
$(".cn_art").on("mouseenter",".cnn",function(){
	$(".cnn").css("top","15");	
	$(".cnn").css("box-shadow","none");
rowin=$(this).parent(".cn_row").index();
  item=$(this).index();
  $(".cn_row").eq(rowin).find(".cnn").eq(item).siblings(".cnn").css("top","15");	
  $(".cn_row").eq(rowin).find(".cnn").eq(item).siblings(".cnn").css("box-shadow","none");
 
  $(".cn_row").eq(rowin).find(".cnn").eq(item).animate({"top":0},200);
  $(".cn_row").eq(rowin).find(".cnn").eq(item).css("box-shadow","4px 10px 10px #dddddd");
 
});
$(".cn_art").on("mouseleave",".cnn",function(){
	
  
	$(".cnn").css({"box-shadow":"none","top":"15"});
});

/*加载更多*/
var btnadd=0;
var btnji=0;
$("#cn_btn").click(function(){
	
	$.ajax({
		type:"get",
		url:"../../assets/cn.json",
		async:true,
	success:function(data){
		data=data.data;
		
		zhi=data.length-btnadd*6;
		btnadd++;
		if(zhi>=6){
			var shu=data.length/2;
		var str="";
		
		for(var i=btnji;i<btnji+3;i++){
			
		j=i+1;
		
	str+='<div class="cn_row"><div class="cn_left cnn"><div class="cn_itimg"><img src="../../img/concatUs/cn/cn_pic'+data[i].aimg+'.jpg"/></div><div class="cn_tel"><div class="radius"> </div><div><h3>'+data[i].name+'</h3><span></span></div><dd><i><img src="../../img/concatUs/cn/cn_ico1.png"/></i>'+data[i].adress+'</dd><dd><i><img src="../../img/concatUs/cn/cn_ico2.png"/></i>'+data[i].phone1+'</dd><dd><i><img src="../../img/concatUs/cn/cn_ico3.png"/></i>'+data[i].phone2+'</dd><dd><i><img src="../../img/concatUs/cn/cn_ico4.png"/>'+data[i].email+'</i></dd></div></div><div class="cn_right cnn"><div class="cn_itimg"><img src="../../img/concatUs/cn/cn_pic'+data[j].aimg+'.jpg"/></div><div class="cn_tel"><div class="radius"> </div><div><h3>'+data[j].name+'</h3><span></span></div><dd><i><img src="../../img/concatUs/cn/cn_ico1.png"/></i>'+data[j].adress+'</dd><dd><i><img src="../../img/concatUs/cn/cn_ico2.png"/></i>'+data[j].phone1+'</dd><dd><i><img src="../../img/concatUs/cn/cn_ico3.png"/></i>'+data[j].phone2+'</dd></div></div></div>';
		
		
	}	
	btnji=btnji+6;
		}else{
			$("#cn_btn").css("display","none");
			var shu=data.length/2;
			var str="";
			
			zhi=zhi/2;
			console.log(zhi);
		for(var i=btnji;i<btnji+zhi;i++){
			
		j=i+1;
		
	str+='<div class="cn_row"><div class="cn_left cnn"><div class="cn_itimg"><img src="../../img/concatUs/cn/cn_pic'+data[i].aimg+'.jpg"/></div><div class="cn_tel"><div class="radius"> </div><div><h3>'+data[i].name+'</h3><span></span></div><dd><i><img src="../../img/concatUs/cn/cn_ico1.png"/></i>'+data[i].adress+'</dd><dd><i><img src="../../img/concatUs/cn/cn_ico2.png"/></i>'+data[i].phone1+'</dd><dd><i><img src="../../img/concatUs/cn/cn_ico3.png"/></i>'+data[i].phone2+'</dd><dd><i><img src="../../img/concatUs/cn/cn_ico4.png"/>'+data[i].email+'</i></dd></div></div><div class="cn_right cnn"><div class="cn_itimg"><img src="../../img/concatUs/cn/cn_pic'+data[j].aimg+'.jpg"/></div><div class="cn_tel"><div class="radius"> </div><div><h3>'+data[j].name+'</h3><span></span></div><dd><i><img src="../../img/concatUs/cn/cn_ico1.png"/></i>'+data[j].adress+'</dd><dd><i><img src="../../img/concatUs/cn/cn_ico2.png"/></i>'+data[j].phone1+'</dd><dd><i><img src="../../img/concatUs/cn/cn_ico3.png"/></i>'+data[j].phone2+'</dd></div></div></div>';
		
		
	}	
		}
		
	 $(".cn_art").append(str);
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}
	});
	
});