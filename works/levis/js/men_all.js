/********** MEN_ALL **********/



$(document).ready(function(){

    
    // 탑박스
    $('#top_container.pd, #pd_header').on({
      
        mouseenter: function(){
            
            $('#top_container.pd').addClass('active');
        },
        mouseleave: function(){
            
            $('#top_container.pd').removeClass('active');
        }
    });
    
    // 헤더 lnb : 탑 이동
    $('#pd_tit').click(function(){
        
        var top=$('html, body').offset().top;
        $('html, body').animate({scrollTop: top}, 300);
    });
    
    itemsBoxH(); // .items_box 높이
    
    // 제품 수량 카운트
    var count = $('.items_box').length;
    $('#count').html('ALL('+count+')');
    
    // 필터
    $('#filterBtn').click(function(){
        
        $('#filter').stop().slideToggle(150);
        $('#filterBtn, #count').toggleClass('active');
    });
    // 필터 리셋
    $('#reset').click(function(){
        
        $('input').prop("checked", false);
    });
    $('#search').click(function(){
        
        $('input').prop("checked", false);
        $('#filterBtn, #count').toggleClass('active');
        $('#filter').hide();
    });

    
    // 등장 애니메이션
    if($(window).width()>1033){
        $('.hd_slide.pc').addClass('scroll');
    }else{
        $('.swiper-container').addClass('scroll');
    }
    
});//-->$(document).ready(function(){



/************************************************************ 스크롤 */
$(window).scroll(function(){
    
    
    var WscrollTop=$(this).scrollTop();
    var winH=$(this).height();
    
    // PRODUCT : lnb (PC)
    if($(window).width()>1033 && WscrollTop>130){
        
        $('#pd_header').addClass('scroll');
    }else{
        
        $('#pd_header').removeClass('scroll');
    }
    // PRODUCT : lnb (MOBILE)
    if($(window).width()<=1033 && WscrollTop>1){
        
        $('#pd_lnb').addClass('scroll');
    }else{
        
        $('#pd_lnb').removeClass('scroll');
    }
    
    
});//-->$(window).scroll(function(){


 
// .items_box 높이
function itemsBoxH(){
    
    var H = $('.items_box').width() * (900/600);
    $('.items_box').height(H);
}






/* plug-in : wow */
wow = new WOW(
    {
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
    }
);
wow.init();

