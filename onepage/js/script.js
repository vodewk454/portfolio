$(function(){
    
    
    // 네비
    $('#navBtn').click(function(){
        
        $('#navBox').addClass('active');
        $('#navBg').css('display', 'block');
        $('#navBg').animate({opacity: 1});
    });
    
    $('#closeBtn, #navBg').click(function(){
        
        $('#navBox').removeClass('active');
        $('#navBg').fadeOut();
    });
    
    $('#nav > ul > li').click(function(){
        
        var sec=$(this).attr('href');
        var secTop=$(sec).offset().top;
        
        $('html, body').animate({scrollTop: secTop});
    });
    
    $('.logo').click(function(){
        
        var top=$('html, body').offset().top;
        $('html, body').scrollTop(top);
    });

    
    // 모달 닫기버튼
    $('#ModalCloseBtn').click(function(){
        
        $('#modalBg').hide();
    });
    
    // 모달 썸네일
    $('#Showcase > img').click(function(){
        
        // 애니메이션 초기화
        $('#modalBg').css({display: 'none', opacity: 0});
        
        // 애니메이션
        $('#modalBg').css('display', 'block');
        $('#modalBg').stop().animate({opacity: 1});
        
        slideNo=$(this).index('#Showcase > img');
        
        clearTimeout(timeout);
        slide(0);
    });
    
    $('.dot').click(function(){
        
        slideNo=$(this).index();
        clearTimeout(timeout);
        slide(0);
    });
    
    $('.btn.left').click(function(){
        
        clearTimeout(timeout);
        slide(-1);
    });
    
    $('.btn.right').click(function(){
        
        clearTimeout(timeout);
        slide(1);
    });
});


$(window).resize(function(){
    
    $('#navBox').removeClass('active');
    $('#navBg').css('display', 'none');
});


// 슬라이드
var slideNo=0;
var timeout;
function slide(x){
    
    // 애니메이션 초기화
    $('#modalImg').css({display: 'none', opacity: 0});
    $('#modalTit').css({display: 'none', opacity: 0, left: 0});

    // 애니메이션
    $('#modalImg, #modalTit').css('display', 'block');
    $('#modalImg').stop().animate({opacity: 1}, 500);
    $('#modalTit').stop().animate({opacity: 1, left: '50px'}, 500);

    slideNo+=x;
    if(slideNo>3) slideNo=0;
    if(slideNo<0) slideNo=3;

    var imgs=$('#Showcase > img').eq(slideNo).attr('src');
    $('#modalImg').attr('src', imgs);
    
    $('.dot').css({opacity: '.5', transform: 'scale(.5)'});
    $('.dot').eq(slideNo).css({opacity: '1', transform: 'scale(1)'});
    
    var tits=$('#Showcase > img').eq(slideNo).attr('alt');
    $('#modalTit').html(tits);

    
    timeout=setTimeout('slide(1)', 3000);
}