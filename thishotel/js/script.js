$(function(){
    
    /* 탑박스 스크롤 */
    $(window).on('scroll', function(){
        
        if($(document).scrollTop() > 300){
            $('#topBox').addClass('scroll');
            $('#topBtn').css('display', 'block');
        } else{
            $('#topBox').removeClass('scroll');
            $('#topBtn').css('display', 'none');
        }
    });
    
    /* 로고, 탑버튼 */
    $('#logo, #topBtn').click(function(){
        
        var top = $('html').offset().top;
        
        $('html').animate({scrollTop : top}, 500);
    });

    /* 메뉴 */
    $('.mainLi').on({
        mouseenter: function(){
            $(this).children('.subUl').fadeIn(100);
        },
        mouseleave: function(){
            $('.subUl').fadeOut(100);
        }
    });
    
});


/* 헤더 슬라이드 */
var slideNo=0;
var loop;
    
function slide(x){

    slideNo += x;
    if(slideNo>3) slideNo=1;
    if(slideNo<1) slideNo=3;

    var slide=document.getElementById('hd_slideBox');

    var leftX=(slideNo-1) * -100;
    slide.style.left=leftX+"%";
    
    // 닷버튼
    var dot=document.getElementsByClassName('dot');
        
        var i;
        for(i=0; i<3; i++){
            dot[i].style.backgroundColor="rgba(255,255,255,.3)";
            dot[i].style.transform="scale(1)";
        }
        dot[slideNo-1].style.backgroundColor="rgba(255,255,255,.8)";
        dot[slideNo-1].style.transform="scale(2)";
    

        loop=setTimeout('slide(1)', 5000);
}

function jump(x){
    clearTimeout(loop);
    slideNo=x;
    slide(0);
}


/* 섹션C 슬라이드 */
var sC_slideNo=0;
var sC_loop;
    
function sC_slide(x){

    sC_slideNo += x;
    if(sC_slideNo>3) sC_slideNo=1;
    if(sC_slideNo<1) sC_slideNo=3;

    var slide=document.getElementById('sC_slideBox');

    var leftX=(sC_slideNo-1) * -100;
    slide.style.marginLeft=leftX+"%";
    
    // 닷버튼
    var dot=document.getElementsByClassName('sC_dot');
        
        var i;
        for(i=0; i<3; i++){
            dot[i].style.backgroundColor="transparent";
        }
        dot[sC_slideNo-1].style.backgroundColor="rgba(255,255,255,.5)";

        sC_loop=setTimeout('sC_slide(1)', 3000);
}

function sC_jump(x){
    clearTimeout(sC_loop);
    sC_slideNo=x;
    sC_slide(0);
}

function sC_btn(x){
        
        clearTimeout(sC_loop);
        sC_slide(x);
}