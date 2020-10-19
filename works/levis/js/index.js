/********** MAIN PAGE **********/

/* preload */
$(window).on('load', function(){
            
    $('#spinnerBox').fadeOut();
    $('body').css({overflowY: 'auto'});
});


$(document).ready(function(){
    
    /* 헤더 : 네비 링크 이동 */
    $('.move').click(function(){
        
        var link=$(this).attr('moveHref');
        location.href=link;
    });

    hdNav(); // 헤더 서브메뉴용
    
    /* 헤더 : 배경이미지 디졸브 */
    $('#hd_nav').on({

        mouseenter: function(){

            $('#hd_dark').removeAttr('style');
            $('#hd_dark').addClass('active');
        },
        mouseleave: function(){

            $('#hd_dark').removeClass('active');
        }
    });
    
    /* 헤더 : 배경이미지 변경, 동영상 정지 */
    $('.hd_mainLi').on({
        
        mouseenter: function(){
            liNo = $(this).index();
            hdImg();
            
            $('#hd_video').trigger('pause');
        }
    });
    
    /* 헤더 : 동영상 재생 */
    $('.hd_mainLi').eq(4).on({
        
        mouseenter: function(){
            
            $('#hd_video').trigger('play');
        }
    });
    
    /* 헤더 : 배경이미지 변경, 동영상 정지, 닷버튼 (모바일) */
    $('.hd_dot').click(function(){
        
        dotNo = $(this).index();
        hdImg();
        
        $('.hd_dot').removeClass('active');
        $('.hd_dot').eq(dotNo).addClass('active');
        
        if(dotNo!=1){
            $('.hd_moveBtn').removeClass('active');
           
        }else{
            $('.hd_moveBtn').addClass('active');
        }
        
        $('#hd_video').trigger('pause');
    });
    /* 헤더 : 동영상 재생 (모바일) */
    $('.hd_dot').eq(0).click(function(){
        
        $('#hd_video').trigger('play');
    });
    
    
    /* 섹션 ni : 슬라이드 */
    niSlide(1);
    
    $('.ni_dot').click(function(){
        
        clearTimeout(niTimeout);
        niSlideNo=$(this).index()+1;
        niSlide(0);
    });
    
    niBgH(); // ni #ni_bgBox 높이용
    
    
    instaH(); // insta iframe 높이용
    
    
    /* map : 여닫기 */
    $('#map_btn').click(function(){
        
        $('#map_foldBox').fadeToggle();
        $(this).toggleClass('click');
    });

    
});//--> $(document).ready(function(){




/************************************************************ 스크롤 */
$(window).scroll(function(){
    
    
    // (스크롤 위치 감지)
    var WscrollTop=$(this).scrollTop();
    var winH=$(this).height();
    var docH=$(document).height();

    var scrollBottom=docH - winH; // 스크롤바 하단의 위치값

    var scrollPos= Math.round((WscrollTop/scrollBottom) * 100);
    
//    console.log(scrollPos);
    
    
    // 탑 네비 보임/숨김
    if(scrollPos>=7){
        $('#top_container').css({opacity: '1'});
    }else{
        $('#top_container').css({opacity: '0'});
    }
     // 탑 네비 : 헤더 상단에서 완전히 숨김
    if($(window).scrollTop()>100){
        $('#top_box2').addClass('show');
    }else{
        $('#top_box2').removeClass('show');
    }

    
    // 헤더 : 배경이미지 디졸브
    if(1<=scrollPos && scrollPos<5){
        var dark= scrollPos +1;
        $('#hd_dark').css('background', 'rgba(0,0,0,0.'+dark+')');
    }
    
    // 헤더 : 동영상 재생/정지
    if(WscrollTop < $('.titBox.bi').offset().top){
        $('#hd_video').trigger('play');
    }else{
        $('#hd_video').trigger('pause');
    }

    
    // lil : 동영상 재생/정지 (모바일 : max-width: 500px)
    if($('#lil').offset().top - winH < WscrollTop){
        $('#lil_video').trigger('play');
    }else{
        $('#lil_video').trigger('pause');
    }
    if($('#tip').offset().top - winH < WscrollTop){
        $('#lil_video').trigger('pause');
    }
    
    
    /******************************** 등장 애니메이션 */
    // bi : toTop 애니메이션
    if($('.titBox.bi').offset().top - winH < WscrollTop){
        $('.titBox.bi').addClass('scroll');
    }
    
    // pn : fromR/L 애니메이션
    if($('#pn_txtBox').offset().top - winH < WscrollTop){
        $('#pn_icon, #pn_txtBox').addClass('scroll');
    }
    
    // ni : toTop 애니메이션
    if($('.titBox.ni').offset().top - winH < WscrollTop){
        $('.titBox.ni').addClass('scroll');
    }
    
    // lvc : 페이드 애니메이션
    if($('#lvc').offset().top - winH < WscrollTop){
        $('#lvc_imgBox, .txtBox.lvc').addClass('scroll');
    }
    
    // lil : toCenter 애니메이션
    if($('#lil').offset().top - winH < WscrollTop){
        $('#lil_txtBox1, #lil_txtBox2').addClass('scroll');
    }
    
    // tip : toTop 애니메이션
    if($('#tip').offset().top - winH < WscrollTop){
        $('.titBox.tip').addClass('scroll');
    }
    
    // insta : toTop 애니메이션
    if($('.titBox.insta').offset().top - winH < WscrollTop){
        $('.titBox.insta').addClass('scroll');
    }
    // insta : fromR/L 애니메이션
    if($('.titBox.insta').offset().top - winH /2 < WscrollTop){
        $('.insta_deco').addClass('scroll');
    }
    
    // lh : toTop 애니메이션
    if($('#lh_logo').offset().top - winH < WscrollTop){
        $('#lh_logo').addClass('scroll');
    }
    if($('.txtBox.lh').offset().top - winH < WscrollTop){
        $('.txtBox.lh').addClass('scroll');
    }
    // lh : 배경 블러
    if($('#lh_logo').offset().top - winH/2 < WscrollTop){
        $('#lh_blur').css('backdrop-filter', 'blur(2px)');
    }else{
        $('#lh_blur').css('backdrop-filter', 'none');
    }
    
    // map : toTop 애니메이션
    if($('.titBox.map').offset().top - winH < WscrollTop){
        $('.titBox.map').addClass('scroll');
    }

    
    // 등장 애니메이션 초기화
    if(scrollPos<=1){
        $('#toBottom, .titBox.bi, #pn_icon, #pn_txtBox, .titBox.ni, #lvc_imgBox, .txtBox.lvc, #lil_txtBox1, #lil_txtBox2, .titBox.tip, .titBox.insta, #lh_logo, .txtBox.lh, .titBox.map').removeClass('scroll');
    }

    
});//--> $(window).scroll(function(){




/************************************************************ 리사이즈 */
$(window).resize(function(){
    
    niBgH(); // ni #ni_bgBox 높이용
    instaH(); // insta iframe 높이용
    
    hdNav(); // 헤더 서브메뉴용
    
    hdImg(); //헤더 : 배경이미지 변경용
    $('#hd_video').trigger('play');
    
    
});//--> $(window).resize(function(){





/* 헤더 : 메뉴 */
function hdNav(){
    
    if($(window).width()>1033){ //////// css의 width와 차이가 있음
        
        /* 헤더 : 서브메뉴 보임/숨김 */
        $('.hd_mainLi').on({
            
            'mouseenter.sub': function(){
                $(this).children('.hd_subUl').stop().slideDown(200);
            },
            'mouseleave.sub': function(){
                $(this).children('.hd_subUl').stop().slideUp(200);
            }
        });
        
        /* 헤더 : 배경동영상, 닷버튼 초기화 */
        dotNo=0;
        $('.hd_dot').removeClass('active');
        $('.hd_dot').eq(dotNo).addClass('active');
        $('.hd_moveBtn').removeClass('active');
        
    }else{
        liNo=$('.hd_mainLi').length -1;
    }
}

/* 헤더 : 배경이미지 변경 */
var bgs;
var liNo;
var dotNo;
function hdImg(){
    
    if($(window).width()>1033){
        
    bgs = [
        'url(images/hd_bg_1.jpg)',
        'url(images/hd_bg_2.jpg)',  
        'url(images/hd_bg_3.jpg)',  
        'url(images/hd_bg_4.jpg)',  
        'none'
    ];
    $('#hd_bg').css({background: bgs[liNo], backgroundPosition: 'center', backgroundSize: 'cover'});

    }else{
        
        bgs = [
            'none',
            'url(images/hd_bg_1_m.jpg)'
        ];
        $('#hd_bg').css({background: bgs[dotNo], backgroundPosition: 'center', backgroundSize: 'cover'});
    }
}


/* 섹션 ni : #ni_bgBox 높이 */
function niBgH(){
    
    var H = $('#ni_bgBox').width() * (900/600);
    $('#ni_bgBox').height(H);
}

/* 섹션 ni : 슬라이드 */
var niSlideNo=0;
var niTimeout;
function niSlide(x){
    
    var imgs=$('.ni_slideImg').length;
    
    niSlideNo+=x;
    if(niSlideNo>imgs) niSlideNo=1;
    if(niSlideNo<1) niSlideNo=imgs;
    
    
    $('.ni_slideImg').css({display: 'none', opacity: 0});
    $('.ni_slideImg').eq(niSlideNo-1).css({display: 'flex'});
    $('.ni_slideImg').eq(niSlideNo-1).stop().animate({opacity: 1}, 500);
    
    $('.txtBox.ni').css({display: 'none'});
    $('.txtBox.ni').eq(niSlideNo-1).css({display: 'block'});
    
    $('.ni_dot').removeClass('active');
    $('.ni_dot').eq(niSlideNo-1).addClass('active');
    
    niTimeout=setTimeout('niSlide(1)', 10000);
}


/* 섹션 insta : iframe 높이 */
function instaH(){
    
    var instaH=$('#insta_iBox').width() * (800/640);
    $('#insta_iBox').height(instaH);
}


/* 섹션 map : 이동 후 지도 보이기 */
function mapOpen(){
    
    // 타이틀 보이기
    $('.titBox.map').addClass('scroll');
    // 맵 열기
    $('#map_foldBox').fadeIn();
    $('#map_btn').addClass('click');
    // 네비모달 닫기
    $('.nmClose').addClass('click');
    $('.nmOpen').removeClass('click');
    $('#navModal').fadeOut();
}