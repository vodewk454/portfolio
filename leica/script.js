$(document).ready(function(){
    
    // 유틸 search
    $('.search').click(function(){
        $('.search').animate({width: '130px'});
        $('.search_close').stop().fadeIn(150);
    });
    $('.search_close').click(function(){
        $('.search').val('');
        $('.search').animate({width: '57px'});
        $('.search_close').stop().fadeOut(150);
    });
    
    // 네비 여닫기
    $('#nav .mainLi').mouseenter(function(){
        $('#nav .subUl').hide();
        $(this).children('#nav .subUl').show();
        $('#navBg').stop().slideDown(100);
    });
    $('#navBg').mouseleave(function(){
        $('#nav .subUl').hide();
        $('#navBg').stop().slideUp(100);
    });
    
    // 헤더 : 메인 슬라이더
    changeImg();
    
    $('#main-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
    });
    
    changeBtn();
    
    // secC : 슬라이더
    $('#sC-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1050,
          settings: {
//            centerPadding: '80px',
            slidesToShow: 1.2
          }
        },
        {
          breakpoint: 450,
          settings: {
            centerPadding: '20px',
            slidesToShow: 1
          }
        }
      ]
    });
    
    // secD : 스크롤 슬라이더
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 4,
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1050: {
              slidesPerView: 3,
            }
        }
    });
    
    $('.swiper-container').css('margin-right', 0);
    
    // 모바일) 네비 여닫기
    $('#nav-btn-mobile').click(function(){
        
        $('#nav-box-mobile').addClass('active');
        $('#navBg-mobile').fadeIn(200);
    });
    $('#nav-close-btn').click(function(){
        
        $('#nav-box-mobile').removeClass('active');
        $('#navBg-mobile').fadeOut(200);
    });
    $('#navBg-mobile').click(function(){
        
        $('#nav-box-mobile').removeClass('active');
        $('#navBg-mobile').fadeOut(200);
    });
    // 모바일) 서브메뉴
    $('#nav-mobile .mainLi').click(function(){
        
        $('#nav-mobile .subUl').stop().slideUp(150);
        $(this).children('.subUl').stop().slideDown(150);
    });
    
});


$(window).resize(function(){
    
    // 모바일 네비 닫기
    $('#nav-box-mobile').removeClass('active');
    $('#navBg-mobile').fadeOut(200);
    
    // 
    changeImg();
    //
    changeBtn();
    
});




// 헤더 : 메인 슬라이더 이미지 변경
function changeImg(){
    
   if($(window).width()>1050){ // 1050px~
        $('#main-slide-img1').attr('src', 'images/banner/Top_main_pc.jpg');
        $('#main-slide-img2').attr('src', 'images/banner/img_slide_d_01_200527.jpg');
        $('#main-slide-img3').attr('src', 'images/banner/img_slide_d_02_200527.jpg');
        $('#main-slide-img4').attr('src', 'images/banner/img_slide_d_03_200527.jpg');
    }else if($(window).width()>450){ // ~1050px
        $('#main-slide-img1').attr('src', 'images/banner/Top_main_pc_1050px.jpg');
        $('#main-slide-img2').attr('src', 'images/banner/img_slide_d_01_1050px.jpg');
        $('#main-slide-img3').attr('src', 'images/banner/img_slide_d_02_1050px.jpg');
        $('#main-slide-img4').attr('src', 'images/banner/img_slide_d_03_1050px.jpg');
    }else{ // ~450px
        $('#main-slide-img1').attr('src', 'images/banner/Top_main_pc_450px.jpg');
        $('#main-slide-img2').attr('src', 'images/banner/img_slide_d_01_450px.jpg');
        $('#main-slide-img3').attr('src', 'images/banner/img_slide_d_02_450px.jpg');
        $('#main-slide-img4').attr('src', 'images/banner/img_slide_d_03_450px.jpg');
    }
}

// 헤더 : 메인 슬라이더 버튼 변경
function changeBtn(){
    
    if($(window).width()<450){
        $('#slick-slide-control00').html('Leica<br />M10-R');
        $('#slick-slide-control01').html('Leica<br />Q2');
        $('#slick-slide-control02').html('Leica<br />M1O-P');
        $('#slick-slide-control03').html('Leica<br />SOFORT');
    }else{
        $('#slick-slide-control00').html($('.main-tit').eq(1).html());
        $('#slick-slide-control01').html($('.main-tit').eq(2).html());
        $('#slick-slide-control02').html($('.main-tit').eq(3).html());
        $('#slick-slide-control03').html($('.main-tit').eq(4).html());
    }
}