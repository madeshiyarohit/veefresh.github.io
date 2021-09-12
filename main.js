$(document).ready(function(){





    $(window).scroll(function(){
        var scrollValue = $(window).scrollTop();
        if (scrollValue > 150) {
            $('.shop-nav-bar').addClass('nav-bar-scroll-1');
        }
        else {
            $('.shop-nav-bar').removeClass('nav-bar-scroll-1');
        } 
    });
    $('.nav-bar-small .left-data').on('click', function(){
        $('.side-nav').css({'width':'250px'});
        $('.wrapper').css({'margin-left':'250px'});
    });
    $('.side-nav .close-btn').on('click', function(){
        $('.side-nav').css({'width':'0px'});
        $('.wrapper').css({'margin-left':'0px'});
    });








    $('.LoadingBlock').fadeOut();
    setTimeout(function(){
        $('.offer-box').css({'display':'block'});
    },10000)
    $('#closePopUp').on('click', function(event){
        event.preventDefault();
        $('.offer-box').css({'display':'none'});
    });

    // setTimeout(function(){
       
    // });
    $('.nav-bar-small .left-data').on('click', function(){
        $('.side-nav').css({'width':'250px'});
        $('.wrapper').css({'margin-left':'250px'});
    });
    $('.side-nav .close-btn').on('click', function(){
        $('.side-nav').css({'width':'0px'});
        $('.wrapper').css({'margin-left':'0px'});
    });
    $('.happy-customer-sub-section').slick({
        slidesToShow: 4,
        dots:true,
        centerMode: true,
        centerPadding: '60px',
        autoplay:true,
        autoplaySpeed:1000,
        responsive: [
        {


        
        breakpoint: 1265,
        settings: {
            slidesToShow: 3,
        }},
        {
            breakpoint: 1024,
            settings: {
                slidesToShow:2,
            }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            dots:false,
        }},
        {
        breakpoint: 575,
        settings: {
            slidesToShow: 1,
            dots:false,
        }}
        ]
    });
    $('.slider-div').slick({
        dots:true,
        infinte:true,
        autoplay:true,
        autoplaySpeed:1000,
        arrows:false,
        dots:false
    });
    $(window).scroll(function(){
    var scrollValue = $(window).scrollTop();
    if ( scrollValue > 10) {
        
        // $('nav-bar-scroll').addClass('nav-bar-scroll');
        // $('.nav-bar-small').addClass('nav-bar-scoll');
        // $('.mini-container-nav-bar').addClass('nav-bar-scroll');
       
        $('.nav-bar-main').addClass('nav-bar-scroll');
        $('.nav-bar-mid img').attr('src','./Images/veefresh-logo.png');
        $('.nav-bar-right ul .person img').attr('src', './Images/Icon material-person-blue.png');
        $('.nav-bar-right ul .cart-bag img').attr('src', './Images/Icon feather-shopping-bag-blue.png');
        $('.nav-bar-left ul li a').css({'color':'var(--main-color-2'});
        $('.nav-bar-right ul li a').css({'color':'var(--main-color-2'});

    }
    else {
       
        $('.nav-bar-main').removeClass('nav-bar-scroll');
        $('.nav-bar-mid img').attr('src','./Images/veefresh-logo white.png');
        $('.nav-bar-right ul .person img').attr('src', './Images/Icon material-person.png');
        $('.nav-bar-right ul .cart-bag img').attr('src', './Images/Icon feather-shopping-bag.png');
        $('.nav-bar-left ul li a').css({'color':'var(--main-color-1'});
        $('.nav-bar-right ul li a').css({'color':'var(--main-color-1'});
        }
    });

    $('.product-box').on({
    mouseenter: function() {
    var classValue = $(this).attr('circle-value');
    var idValue = $('.hover-circle-section').find("#"+classValue).find('.circle-box').css(
    {
        'background-color':'var(--main-color-2)',
        'transform':'scale(1.8)'
    }
    );
    },
    mouseleave: function(){
    var classValue = $(this).attr('circle-value');
    var idValue = $('.hover-circle-section').find("#"+classValue).find('.circle-box').css(
    {
        'background-color':'var(--main-color-1)'
        ,'transform':'scale(1)'
    }
    );
    }
    });
});