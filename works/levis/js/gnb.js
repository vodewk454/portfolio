/********** GNB **********/
$(document).ready(function(){
    
    /* easeScroll */
    $('body').easeScroll();

    
    /* 링크 이동 */
    $('.move').click(function(){
        
        var link=$(this).attr('moveHref');
        window.location.href=link;
    });
    
    
    /* 네비 링크 이동 (탑, 모달, 헤더) */
    var mainHref=['new.html', 'x', 'x', 'x', 'x'];
    var subHref=[
        ['x', 'x', 'x', 'x', 'x'],
        ['x', 'x', 'x', 'x', 'x'],
        ['men_all.html', 'x', 'x', 'x', 'x'],
        ['x', 'x', 'x', 'x', 'x'],
        ['Lsoty_lvc.html', 'x', 'x', 'x', 'x']
    ];
    // 메인메뉴
    $('.top_mainLi, .nm_mainLi, .hd_mainLi').click(function(){
        
        var link=mainHref[$(this).index()];
        if(link != 'x'){
            window.location.href=link;
        }
    });
    // 서브메뉴
    $('.top_subLi, .nm_subLi, .hd_subLi').click(function(){
            
        var mainNo = $(this).parent().parent().index();
        var subNo = $(this).index();
        var link = subHref[mainNo][subNo];

        if(link !='x'){
            window.location.href=link;
        }
    });
    // 비활성메뉴 스타일
    var i, ii;
    for(i=0; i<5; i++){
        
        if(mainHref[i] == 'x'){
            $('.top_mainLi > span').eq(i).css({cursor: 'default'});
            $('.hd_mainLi > span').eq(i).css({cursor: 'default'});
        }
        
        for(ii=0; ii<5; ii++){
            
            if(subHref[i][ii] == 'x'){
                $('.top_mainLi').eq(i).find('.top_subLi').eq(ii).css({opacity: '.5', cursor: 'default'});
                $('.nm_mainLi').eq(i).find('.nm_subLi').eq(ii).css({opacity: '.5', cursor: 'default'});
                $('.hd_mainLi').eq(i).find('.hd_subLi').eq(ii).css({opacity: '.5', cursor: 'default'});
            }
        }
    }
    
    /* top_logo 페이지 상단 이동 */
    $('#top_logo').click(function(){
        
        location.href='index.html';
        // 맵 닫기
        $('#map_foldBox').fadeOut();
        $('#map_btn').removeClass('click');
    });

    /* 퀵메뉴 : 맵 버튼 */
    $('.toMapBtn').click(function(){
        
        // 맵으로 이동
        location.href='index.html#map';
        
        mapOpen();
    });
    
    /* 탑 네비 : 서브메뉴 보임/숨김 */
    $('#top_container, #pd_header').on({

        mouseenter: function(){
            $('.top_subUl').stop().fadeIn(200);
            if($(this).scrollTop()>0){
                $('#top_container, #pd_header').removeClass('scroll');
            }
        },
        mouseleave: function(){
            $('.top_subUl').stop().fadeOut(200);
            
            if($(this).scrollTop()>0){
                $('#top_container, #pd_header').addClass('scroll');
            }
        }
    });
    /* 탑 네비 : 서브메뉴 하이라이트 */
    if($(window).width()>=1050){
        $('.top_subLi').on({

            mouseenter: function(){
                $(this).css({color: '#000'});
            },
            mouseleave: function(){
                $(this).css({color: '#555'});
            }
        });
    }
    
    var scrollHeight = 0;
    /* 네비모달 : 열기 */
    $('.nmOpenBtn').click(function(){
        
        $('.nm_subUl').hide();
        $('.nmOpen').addClass('click');
        $('#navModal').fadeIn();
    });
    /* 네비모달 : 닫기 */
    $('#nmClose').click(function(){
        
        $('.nmOpen').removeClass('click');
        $('#navModal').fadeOut();
    });
    
    /* 네비모달 : 서브메뉴 */
    $('.nm_mainLi').click(function(){
        $('.nm_subUl').stop().slideUp(200);
        $(this).children('.nm_subUl').stop().slideToggle(200);
    });


});//--> $(document).ready(function(){



/************************************************************ 리사이즈 */
$(window).resize(function(){

    // 네비모달 닫기
    if($(window).width()>=1033){
        $('.nmClose').addClass('click');
        $('.nmOpen').removeClass('click');
        $('#navModal').fadeOut();
    }
    
});//--> $(window).resize(function(){



var lastScrollTop=0; // 메뉴용
/************************************************************ 스크롤 */
$(window).scroll(function(){

    
    // (스크롤 위치 감지)
    var WscrollTop=$(this).scrollTop();
    var winH=$(this).height();
    var docH=$(document).height();

    var scrollBottom=docH - winH; // 스크롤바 하단의 위치값

    var scrollPos= Math.round((WscrollTop/scrollBottom) * 100);
    
//    console.log(scrollPos);


    // 탑 네비 (스크롤 방향 감지)
    var currentScrollTop=$(this).scrollTop();

    if(currentScrollTop>lastScrollTop && currentScrollTop>1){
        
        $('#top_container, #top_box2').addClass('scroll');
        $('#pd_header').addClass('scroll_m');
    }else{
        
        $('#top_container, #top_box2').removeClass('scroll');
        $('#pd_header').removeClass('scroll_m');
    }
    lastScrollTop=currentScrollTop;
    
    
    

    
});//--> $(window).scroll(function(){
