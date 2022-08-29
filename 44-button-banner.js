$(function(){
    $(".pager>li").click(function(){
        var sNum=$(this).index();

        $(this).addClass("active")
        .siblings().removeClass("active");

        $(".mainBannerWrap").stop().animate({
            "margin-left":-sNum*100+"%"
        },1000)
    })

    $(".hamBox").click(function(){
        if ($("#nav").css("display") == "none") { 
             $("#nav").show(); //display :none 일떄
         } else {
             $("#nav").hide();  //display :block 일떄
         }
   })
   $(window).resize(function(){
        if(window.innerWidth > 1280){
             $("#nav").css("display", "block")
        } else if (window.innerWidth < 1280){
             $("#nav").css("display", "none")
        }
   })



})
