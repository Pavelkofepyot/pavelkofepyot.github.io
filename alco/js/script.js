$(function(){
    let body = $("html");
    $(".click").click(function(){
        let advantages = $(".advantages-section").offset().top;
        
        body.animate({scrollTop:advantages}, 500);
    });

});
