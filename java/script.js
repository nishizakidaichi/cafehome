$(function(){
/*----navigation----*/
$(".fixed-header").hide();
$(window).scroll(function(){
    var fvheight = $(".news").offset().top - 70;
    if ($(window).width() > 767) {
        if ($(window).scrollTop() > fvheight) {
            $(".fixed-header").show(500, function(e){$(".fixed-header").stop(true, true);});
        }
        else{
            $(".fixed-header").hide(500, function(e){$(".fixed-header").stop(true, true);});
        }
    }
});


/*----fv----*/
$(".fv2, .fv3").hide();
setInterval(function(){
    $(".fv img:first-child").fadeOut(1000);
    $(".fv img:nth-child(2)").fadeIn(1000);
    $(".fv img:first-child").appendTo(".fv")
},5000);


/*----menu----*/
    /*menu-list*/
    $(".lunch, .cafe").hide();
    $(".lunch-text, .cafe-text").hide();
    $(".menu-item").on("click", function(){
    $(".menu-list li").removeClass("active");
    $(this).addClass("active"); 
    var idbox = $(this).attr('id');
    $(".morning, .lunch, .cafe").hide(1000);
    $("."+idbox).show(1000);
    $(".morning-text, .lunch-text, .cafe-text").hide();
    $("."+idbox+"-text").show();

    /*menu-img-wrapper*/
    });

    $(".burger-btn-wrapper").on("click", function(){
    $(".bar").toggleClass("closs");
    $(".nav-list").slideToggle();
    $("body").toggleClass("noscroll")
    });

    

});
