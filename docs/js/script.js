
"use strict";

// Window Load Event
$(window).on("load", function() {
    // Loader Fade Out
    $(".lx-loader").fadeOut();
    return false;
});
// header scroll event
$(document).on("scroll",function(){
    if($(this).scrollTop() > 50){
        $(".lx-header").css('background','#263cb8');
        $(".lx-header").css('padding','20px 0');
    }
    else{
        $(".lx-header").css('background','transparent');
        $(".lx-header").css('padding','50px 0');
    }
});


// Main menu event : show correspondant section
$(".lx-main-menu ul li a").on("click", function() {
    // Remove active class from menus
    $(".lx-main-menu ul li a").removeClass("active");
    // Set clicked menu active
    $(this).addClass("active");
    history.pushState('data', '' + $(this).attr("href"));
    // Scroll to the correspondant scetion
    $('html, body').animate({
        scrollTop: $($(this).attr("href")).offset().top + 2
    }, 2000);
    return false;
});



// Main menu event : show Responsive menu
$(".lx-menu-btn").on("click", function() {
    // show menu
     $(".lx-main-menu").addClass("active");
    return false;
});
// Main menu event : hide Responsive menu
$(".lx-menu-close-btn").on("click", function() {
    // hide menu
     $(".lx-main-menu").removeClass("active");
    return false;
});



// Main menu event : hide Responsive menu
$(".lx-faq-item").on("click", function() {
    // hide menu
     $(".lx-faq-item").removeClass("active");
     $(this).addClass("active");
    return false;
});

// Video play event : show video popup
$(".lx-play-btn").on("click", function() {
    // show popup
     $(".lx-video-popup").addClass("active");
    return false;
});

// Video play event : hide video popup
$(".lx-frame-video > span").on("click", function() {
    // hide popup
     $(".lx-video-popup").removeClass("active");
    return false;
});


// Hide the popup when esc key is clicked
$(document).on("keyup",function(e) {
    
    if(e.keyCode === 27) {
        
        // hide popup
     $(".lx-video-popup").removeClass("active");
        
    }
    
    return false;
});


// screenshoot carousel event
$(document).ready(function(){
    $('.lx-screenshot-items.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});


// blog carousel event
$(document).ready(function(){
    $('.lx-blog-items.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
});
// reviews carousel event
$(document).ready(function(){
    $('.lx-reviews-items.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
});
// reviews carousel event : custom next and prev buttons
$(document).ready(function(){
var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.lx-reviews-next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.lx-reviews-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
});


// Contact Form Errors
$(".lx-contact-form form input[type='submit']").on("click",function(){
    
    var fullname = $(".lx-contact-form form input[name='name']");
    if(fullname.val() == ""){
        fullname.after("<span>This field must be filled</span>").css("border-right","3px solid #a94442");
    }
    
    var email = $(".lx-contact-form form input[name='email']");
    var patt = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if(!patt.test(email.val())){
        email.after("<span>Invalid Email</span>").css("border-right","3px solid #a94442");
    }
    
    var txtarea = $(".lx-contact-form form textarea");
    if(txtarea.val() == ""){
        txtarea.after("<span>This field must be filled</span>").css("border-right","3px solid #a94442");
    }
    
    return false;
});

$(".lx-contact-form form input[name='email']").on("keyup",function(){
    var patt = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if(patt.test($(this).val())){
        $(this).css("border-right","0px").next("span").remove();
    }
    
    return false;
});

$(".lx-contact-form form input[name='name']").on("keyup",function(){
    if($(this).val() != ""){
        $(this).css("border-right","0px").next("span").remove();
    }
    
    return false;
});

$(".lx-contact-form form textarea").on("keyup",function(){
    if($(this).val() != ""){
        $(this).css("border-right","0px").next("span").remove();
    }
    
    return false;
});