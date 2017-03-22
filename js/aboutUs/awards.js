 var appendNumber = 4;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        loop : true,

    });
    var awsc1=0;
$(".awsc_carous .swiper-slide").hover(function(){
	$(".awsc_carous .swiper-slide").find(".car_move").stop(true,true);
	$(".awsc_carous .swiper-slide").find(".car_move").css("display","none");
awsc1=$(this).index();
$(".awsc_carous .swiper-slide").eq(awsc1).find(".car_move").fadeIn();
},function(){
	$(".awsc_carous .swiper-slide").eq(awsc1).find(".car_move").fadeOut();
});
var awscs1=0;
$(".awsc_con span").hover(function(){
	awscs1=$(this).index();
	$(this).css("color","#E5674E");
$(this).find("i").css("background","#E5674E");
},function(){
	$(this).css("color","#e3e3e3");
$(this).find("i").css("background"," #e3e3e3");
})