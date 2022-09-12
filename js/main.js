$(function($){
    $('.bg-swicher').bgSwitcher({
        images:['../images/background1.jpg','../images/background2.jpg','../images/background3.jpg','../images/background4.jpg','../images/background5.jpg'],
        interval:5000,
        loop: true
    });

    $('.slider').slick({
        autoplay:true, // 自動再生を設定
        autoplaySpeed:5000, // スライド切り替えの時間を設定
        dots:true, // インジケーターを表示
        autoplay:true,
        slidesToShow: 3,
        infinite:true,
        slidesToScroll:1,
      });

      $(document).ready(function(){
        $('.fuwat').css('visibility','hidden');
        $(window).scroll(function(){
         var windowHeight = $(window).height(),
             topWindow = $(window).scrollTop();
         $('.fuwat').each(function(){
          var objectPosition = $(this).offset().top;
          if(topWindow > objectPosition - windowHeight + 200){
           $(this).addClass("fuwatAnime");
          }
         });
        });
      });

});