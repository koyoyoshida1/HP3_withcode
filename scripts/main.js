"use strict";

// スライドショー
let nowPage = 0;
let nextPage = 1;

const slides = $("#slider").find("img");
const slideLength = slides.length;

const fadeTime = 1500;
const showTime = 3000;

slides.hide();
slides.eq(0).show();

const slidesshow = () => {

		slides.eq(nowPage % slideLength).fadeOut(fadeTime).removeClass("zoom");
		slides.eq(nextPage % slideLength).fadeIn(fadeTime).addClass("zoom");

		nowPage++;
		nextPage++;
};

setInterval(slidesshow, showTime);

// フェードイン
let fade = $('.fade');

$(window).scroll(function () {

		if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
				fade.addClass("blur");

		} else {
				fade.removeClass("blur");

		}
});



