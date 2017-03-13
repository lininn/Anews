/*当移动上去动画变化*/
var theindex=0;
$(".item1").hover(function(){
	$(".art_item").stop(true,true);
	$(".art_item").css("top","5");
  theindex=$(this).index();
  $(".item1").eq(theindex).children(".art_item").animate({"top":"0"},200);
},function(){
	
$(".item1").eq(theindex).children(".art_item").animate({"top":"5"},200);
});



var yeshu=6;
			var xianye=5;
	
		//分页
		 $(".tcdPageCode").createPage({
        pageCount:yeshu,
        current:xianye,
        backFn:function(p){
         var shi=new Date().getTime();
       
         location.href="index.php?page="+p+"&shi="+shi;
        }
    });
