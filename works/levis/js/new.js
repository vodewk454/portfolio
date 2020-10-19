/********** PRODUCTS **********/

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
    // 헤더 lnb : 섹션 이동, 하이라이트
    $('.pd_lnb_li').click(function(){
        
        var link=$($(this).attr('moveHref')).offset().top;
        $('html, body').animate({scrollTop: link}, 300);
    });
    
    //  NEW - 섹션 pm : 타이틀 등장 애니메이션
    $('.subTitBg.pm, .subTit_m.pm').addClass('scroll');
    
        
    // 팝업창
    $('.popup').click(function(){
        
        $(this).hide();
    });
    
    
    
    
    
});//-->$(document).ready(function(){



/************************************************************ 스크롤 */
$(window).scroll(function(){
    
    
    var WscrollTop=$(this).scrollTop();
    var winH=$(this).height();
    var total=$('section').length;
    
    
    // PRODUCT : lnb (PC)
    if($(window).width()>1033 && WscrollTop>130){
        
        $('#pd_header').addClass('scroll');
    }else{
        
        $('#pd_header').removeClass('scroll');
    }
    
    if($(window).width()<=1033 && WscrollTop>1){
        
        $('#pd_lnb').addClass('scroll');
    }else{
        
        $('#pd_lnb').removeClass('scroll');
    }
    
    var i;
    for(i=0; i<total; i++){

        // 헤더 lnb : 하이라이트
        var target=$('section').eq(i);
        var secTop=target.offset().top;
        
        if(secTop - 50 < WscrollTop){
            
            $('.pd_lnb_li').removeClass('active');
            $('.pd_lnb_li').eq(i).addClass('active');
        }else{
            
            $('.pd_lnb_li').eq(i).removeClass('active');
        }
    }
    
    /******************************** 등장 애니메이션 */
    // new : fromR/L 애니메이션
    if($('.subTit.pm').offset().top - winH < WscrollTop){
        $('.subTit.pm').addClass('scroll');
    }
    if($('.subTit.mc').offset().top - winH < WscrollTop){
        $('.subTit.mc').addClass('scroll');
    }
    if($('.subTit.lvc').offset().top - winH < WscrollTop){
        $('.subTit.lvc').addClass('scroll');
    }
    
    if($('.subTit_m.mc').offset().top - winH < WscrollTop){
        $('.subTit_m.mc').addClass('scroll');
    }
    if($('.subTit_m.lvc').offset().top - winH < WscrollTop){
        $('.subTit_m.lvc').addClass('scroll');
    }
    
    
});//-->$(window).scroll(function(){



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

