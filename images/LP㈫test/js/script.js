'use strict'

// ローディングアニメーションの作成
$(window).on('load',function(){
    $(".loading-ttl").delay(1200).fadeOut('slow');
    $(".loading-animation").delay(1500).fadeOut('slow', function () {
        $('body').addClass('appear');
    }); 
});

// スムーズスクロールの作成
$('#js-nav a').on('click', function () {
    let hrefElement = $(this).attr('href');
    let headerHeight = $('.header_inner').outerHeight(true);
    let position = $(hrefElement).offset().top - headerHeight;
    $('body,html').animate({
        scrollTop: position
    }, 500);
    return false;
});

// スクロールアニメーションの作成
function fadeIn() {
  $('.fadeUpTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeUp');
    }
    else {
      $(this).removeClass('fadeUp');
    }
  });
  $('.fadeRightTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight){
      $(this).addClass('fadeRight');
    }else{
      $(this).removeClass('fadeRight');
    }
  });
}

$(window).scroll(function () {
  fadeIn();
});

$('.vision_ttl').addClass('fadeRightTrigger');
$('.vision_descript').addClass('fadeRightTrigger');
$('.service_item_1').addClass('fadeRightTrigger');
$('.service_item_2').addClass('fadeRightTrigger');
$('.service_img_1').addClass('fadeRightTrigger');
$('.service_img_2').addClass('fadeRightTrigger');
$('.service_img_3').addClass('fadeRightTrigger');
$('.about_item').addClass('fadeUpTrigger');
$('.faq_ttl').addClass('fadeUpTrigger');
$('.contact_inner').addClass('fadeUpTrigger');

// faqのアコーディオンメニュー
$(function(){
  $('.faq_ttl_link').click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass('on');
    $('.faq_ttl_link').not(this).removeClass('on');
    $('.faq_ttl_link').not($(this)).next('.submenu').slideUp();
  });
});

// ハンバーガーメニューの作成
window.onunload = function() {};

function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}

var w = 0;
var h = 0;
sizecheck();
$(function () {
    if (w > 769) {  
    } else { 
        $('header .drawer').click(function () {
          $('body').toggleClass('nav-open');
          $('.header_nav').toggleClass('nav-open');
        });
        
        $(".header_link").click(function () {
            $('body').toggleClass('nav-open');
            $('.header_nav.nav-open').removeClass('nav-open');
        });
    }
});