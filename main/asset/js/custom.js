/* 커서 */
function cursor(){
    if(window.innerWidth > 1050){
        window.addEventListener('mousemove', function(event){
            const x = event.clientX - 25 + 'px';
            const y = event.clientY - 25 + 'px';
            document.querySelector('#cursor').style.cssText = 'left:' + x + '; top:' + y;

            // text
            document.querySelectorAll('.cursor_text').forEach(elem => {
                elem.addEventListener('mouseenter', () => {
                    document.querySelector('#cursor').classList.add('text');
                });
                elem.addEventListener('mouseleave', () => {
                    document.querySelector('#cursor').classList.remove('text');
                });
            });
            // pointer
            document.querySelectorAll('.cursor_pointer').forEach(elem => {
                elem.addEventListener('mouseenter', () => {
                    document.querySelector('#cursor').classList.add('pointer');
                });
                elem.addEventListener('mouseleave', () => {
                    document.querySelector('#cursor').classList.remove('pointer');
                });
            });
            // whiteBg
            document.querySelectorAll('.cursor_whiteBg').forEach(elem => {
                elem.addEventListener('mouseenter', () => {
                    document.querySelector('#cursor').classList.add('whiteBg');
                });
                elem.addEventListener('mouseleave', () => {
                    document.querySelector('#cursor').classList.remove('whiteBg');
                });
            });
            // none
            document.querySelectorAll('.cursor_none').forEach(elem => {
                elem.addEventListener('mouseenter', () => {
                    document.querySelector('#cursor').classList.add('none');

                    const point = document.querySelectorAll('.cursor_none');
                    point[0].classList.add('sticky');
                    point[1].classList.add('sticky');
                });
                elem.addEventListener('mouseleave', () => {
                    document.querySelector('#cursor').classList.remove('none');

                    const point = document.querySelectorAll('.cursor_none');
                    point[0].classList.remove('sticky');
                    point[1].classList.remove('sticky');
                });
            });
            // works_ani_2
            document.querySelectorAll('.cursor_ani2').forEach(elem => {
                elem.addEventListener('mouseenter', () => {
                    document.querySelector('#cursor').classList.add('ani2');
                });
                elem.addEventListener('mouseleave', () => {
                    document.querySelector('#cursor').classList.remove('ani2');
                });
            });
            // works_ani_2 : 스파클링 버블 애니메이션
            const f = document.querySelectorAll('.follower');
            for(var i=0; i<f.length; i++){
                const ani2_x = event.clientX - 15;
                const ani2_y = event.clientY - 15;

                gsap.to(f[0], {duration: 0.8, top: ani2_y, left: ani2_x});
                gsap.to(f[1], {duration: 1.2, top: ani2_y, left: ani2_x});
                gsap.to(f[2], {duration: 2, top: ani2_y, left: ani2_x});
                gsap.to(f[3], {duration: 1.4, top: ani2_y, left: ani2_x});
                gsap.to(f[4], {duration: 1, top: ani2_y, left: ani2_x});
                gsap.to(f[5], {duration: .7, top: ani2_y, left: ani2_x});
                gsap.to(f[6], {duration: 1.7, top: ani2_y, left: ani2_x});
                gsap.to(f[7], {duration: 1.7, top: ani2_y, left: ani2_x});
                gsap.to(f[8], {duration: 2, top: ani2_y, left: ani2_x});
                gsap.to(f[9], {duration: 1.7, top: ani2_y, left: ani2_x});
            }
        });
    }
}
/* 헤더 높이 */
function hd_height(){
    if(window.innerWidth > 450){
        const hd_height = window.innerWidth * (3024/2240);
        document.querySelector('#header').style.height= hd_height + 'px';
        document.querySelector('#hd_bg').style.height= hd_height + 'px';
    }else{
        document.querySelector('#header').style.height= '100vh';
        document.querySelector('#hd_bg').style.height= '100vh';
    }
}
/* 헤더 높이 (로드 화면) */
function load_hd_height(){
    document.querySelector('#header').style.height= '100vh';
}
/* 로드 화면 */
function afterLoad(){
    document.querySelector('#preLoad').style.display= 'none';
    document.querySelector('#hd_in').classList.remove('load');
    document.querySelector('#hd_in').classList.add('after');

    const hides = document.querySelectorAll('#about, #works_web, #works_ani, #getInTouch, #footer');
    for(var i=0; i<5; i++){
        hides[i].classList.remove('hide');
    }
}
/* skill : 슬라이드 */
let slideNo=1;
function skill_slide(x){
    slideNo += x;

    const skill = document.querySelectorAll('.skill_name');
    const skillTxt = document.querySelectorAll('.skill_txt');
    const length = skill.length;

    if(slideNo>length){slideNo=1};
    if(slideNo<1){slideNo=length};

    for(let i=0; i<length; i++){
        skill[i].classList.remove('active');
        skillTxt[i].classList.remove('active');
    }
    skill[slideNo-1].classList.add('active');
    skillTxt[slideNo-1].classList.add('active');
}
/* skill : 슬라이드 버튼 */
function skill_btn(){
    document.querySelector('#skill_left').addEventListener('click', function(){
        skill_slide(1);
    });
    document.querySelector('#skill_right').addEventListener('click', function(){
        skill_slide(-1);
    });
}

/* works_web : 사이트 열기 */
function openSite(x){
    window.open(x, 'sitename');
}
/* getInTouch : 이메일 전송 */
emailjs.init('user_wwuvZvvCca6w1jWZRmMB0');
function sendEmail(){
    document.querySelector('#msg_form').addEventListener('submit', function(e){
        e.preventDefault();

        alert('메세지가 전송되었습니다. 감사합니다!');
        emailjs.sendForm('service_jncqvul', 'template_ilvocbn', this);

        const inputTxt = document.querySelectorAll('.msg_txt');
        for(let i=0; i<3; i++){
            inputTxt[i].value='';
        }
    });
}

window.addEventListener('DOMContentLoaded', function(){
   hd_height();        // 헤더 높이
   load_hd_height()    // 헤더 높이 (로드 화면)
});

/*** onload ***/
window.onload = function(){
    
    // 로드 화면
    document.querySelector('#preLoad').style.opacity='0';
    setTimeout(afterLoad, 3000);
    setTimeout(hd_height, 3700);
    // setTimeout(document.querySelector('#preLoad').style.display= 'none', 3700);

    // 커서
    cursor();

    // 네비모달
    const navBtn = document.querySelector('#navBtn');
    const navClose = document.querySelector('#navClose');
    const nav = document.querySelector('#nav');

    navBtn.addEventListener('click', function(){
        nav.style.display= 'block';
    });
    navClose.addEventListener('click', function(){
        nav.style.display= 'none';
    });

    // skill : 슬라이드 버튼
    skill_btn();

    // getInTouch : 이메일 전송
    sendEmail();
}




$(document).ready(function(){

    //  네비 이동
    $('.navMove').click(function(){
        $('.container.ani').removeClass('fixed');
        ani3_pause();
        $('#nav').css({display: 'none'});

        if($(this).hasClass('down')){
            $('#works_ani').css({background: '#A7CFB6'});
            $('.ani_list').removeClass('active');
            $('#ani_list_4').addClass('active');
        }else{
            $('#works_ani').css({background: '#EBB086'});
        }
        const href = $(this).attr('move');
        const location = $(href).offset().top;
        $(window).scrollTop(location);
    });

    // education
    $('.edu_list').on({
        click: function(){
            $('.edu_listTxt').stop().slideUp(200);
            $(this).children('.edu_listTxt').stop().slideToggle(200);

            if($(this).find('.plusBtn').hasClass('active')){
               $('.plusBtn').removeClass('active');
                $(this).find('.edu_listBg_bf1').stop().delay(150).animate({top: '100%'}, 400);
                $(this).find('.edu_listBg_bf2').stop().stop().animate({top: '100%'}, 400);
            }else{
                $('.plusBtn').removeClass('active');
                $(this).find('.plusBtn').addClass('active');
                $(this).find('.edu_listBg_bf1').stop().animate({top: '0'}, 400);
                $(this).find('.edu_listBg_bf2').stop().delay(150).animate({top: '0'}, 400);
            }
        },
        mouseenter: function(){
            $(this).find('.edu_listBg_bf1').stop().animate({top: '0'}, 400);
            $(this).find('.edu_listBg_bf2').stop().delay(150).animate({top: '0'}, 400);
        },
        mouseleave: function(){
            $(this).find('.edu_listBg_bf1').stop().delay(150).animate({top: '100%'}, 400);
            $(this).find('.edu_listBg_bf2').stop().stop().animate({top: '100%'}, 400);
        }
    });

    // CSS ani_1
    $('#dog').on({
        mouseenter: function(){
            $('.heartBox').stop().animate({opacity: 1}, 200);
        },
        mouseleave: function(){
            $('.heartBox').stop().animate({opacity: 0}, 1000);
        }
    });
    // CSS ani_3
    $('.trigger').click(function() {
        if(ani3_mp3.paused == false) {
            ani3_pause();
        }else{
            ani3_play();
        }
    });
    
    //// PC only
    if($(window).width() > 1050){
    
        ani_background(); // works_ani : 배경
        
        $('.msg_group, .tape').draggable(); // msg_group
        
        footer(); // 푸터
    };
});


/*** 리사이즈 ***/
$(window).resize(function(){
    
    hd_height(); // 헤더 높이
    ani_background(); // works_ani : 배경
});


/*** 스크롤 ***/
$(window).scroll(function(){
    
    const WscrollTop = $(this).scrollTop();
    const winH = $(this).height();

    /** 등장 애니메이션 (기본형) **/
    const basics = ['#award', '.sec_titBox.about', '.sec_subTit.int', '#int_txt', '.sec_subTit.edu', '#edu_listBox', '.sec_subTit.skill', '.sec_subTit.ani', '#goal_txtBox', '.sec_titBox.git'];
    for(var i=0; i<basics.length; i++){
        let $basic = $(basics[i]);
        
        if($basic.offset().top - winH < WscrollTop){
            $basic.addClass('scroll');
        }else{
            $basic.removeClass('scroll');
        }
    }
    
    /* 헤더 */
    // : 타이틀 시간차 효과
    if($('#header').height() > WscrollTop){
        $('#hd_tit_img').css({transform: 'translate(-50%, '+WscrollTop * -0.05+'%)'});
    }
    if($('#hd_tit').offset().top - winH/1.54 < WscrollTop){
        $('#hd_tit').stop().animate({opacity: 1, transform: 'translate(-50%,50%)'}, 300);
    }else{
        $('#hd_tit').stop().animate({opacity: 0, transform: 'translate(-50%,-50%)'}, 300);
    }
    // : 네비 버튼
    if($('#header').offset().top + 100 <= WscrollTop){
        
        $('#navBtn').addClass('scroll');
    }else{
        $('#navBtn').removeClass('scroll');
    }
    
    /* about */
    // introduce : 시간차 효과
    if($('#about').offset().top - winH/2 < WscrollTop && $('#education').offset().top > WscrollTop){
        
        const thisScroll = WscrollTop - $('#introduce').offset().top;
        const moveY = thisScroll*-.1;
        
        $('.sec_titBox.about').css({transform: 'translateY('+moveY+'%)'});
        $('.sec_subTit.int').css({transform: 'rotate(-90deg) translate('+(-60-moveY)+'%, 35%)'});
        $('#int_txt').css({transform: 'translateY('+moveY+'%)'});
    }
    // education : 시간차 효과
    if($('#education').offset().top - winH/2 < WscrollTop && $('#skill').offset().top > WscrollTop){
        
        const thisScroll = WscrollTop - $('#education').offset().top;
        const moveY = thisScroll*-.1;
        
        $('.sec_subTit.edu').css({transform: 'rotate(-90deg) translate('+(78-moveY)+'%, -30%)'});
        $('#edu_listBox').css({transform: 'translateY('+moveY+'%)'});
    }
    // skill
    // : 시간차 효과
    if($('#skill').offset().top - winH/2 < WscrollTop && $('#works_web').offset().top > WscrollTop){
        const thisScroll = WscrollTop - $('#skill').offset().top;
        const moveY = thisScroll*-.1;
        
        $('.sec_subTit.skill').css({transform: 'rotate(-90deg) translate('+(-9-moveY)+'%, 35%)'});
        $('#skill_txtBox').css({transform: 'translateY('+moveY+'%)'});
        $('#skill_graphBox').css({transform: 'translateY('+moveY+'%)'});
    }
    // : 그래프 애니메이션
    if($('#skill_graphBox').offset().top - winH < WscrollTop){
        $('.skill_graph, .skill_name').addClass('scroll');
        $('#html.skill_name').addClass('active');
        setTimeout(function(){
                $('#skill_txtBox').addClass('active');
        }, 1000);
    }else{
        $('.skill_graph, .skill_name').removeClass('scroll');
        $('.skill_name, #skill_txtBox, .skill_txt').removeClass('active');
        $('.skill_txt.p1').addClass('active');
        slideNo=1;
    }
    
    /* works */
    if($(window).width() > 1050){
        // : 섹션타이틀 애니메이션
        if($('#works_web').offset().top < WscrollTop){
            $('.sec_titBox.works').addClass('scroll');
        }else{
            $('.sec_titBox.works').removeClass('scroll');
        }
        // : works_web 섹션서브타이틀 애니메이션
        if($('#works_web').offset().top + winH < WscrollTop){
            $('.sec_subTit.web').addClass('scroll');
        }else{
            $('.sec_subTit.web').removeClass('scroll');
        }
    }
    if($(window).width() <= 1050){
        // : 섹션타이틀 애니메이션
        if($('.sec_titBox.works').offset().top - winH < WscrollTop){
            $('.sec_titBox.works').addClass('scroll');
        }else{
            $('.sec_titBox.works').removeClass('scroll');
        }
        // : works_web 섹션서브타이틀 애니메이션
        if($('.sec_subTit.web').offset().top - winH < WscrollTop){
            $('.sec_subTit.web').addClass('scroll');
        }else{
            $('.sec_subTit.web').removeClass('scroll');
        }
    }
    // works_web : 시간차 효과
    if($('#works_web').offset().top - winH/2 < WscrollTop){
        
        const thisScroll = WscrollTop - $('#works_web').offset().top;
        
        if($(window).width()>1050){
            const moveX = thisScroll*-.2;
            $('.sec_subTit.web').css({transform: 'rotate(-90deg) translate(-85%,'+(-500-moveX)+'%)'});
        }
        if($(window).width()<=1050){
            const moveY = thisScroll*-.1;
            $('.sec_subTit.web').css({transform: 'rotate(-90deg) translate('+(50-moveY)+'%, 370%)'});
            $('.sec_titBox.works').css({transform: 'translateY('+moveY+'%)'});
        }
        
    }
    // works_ani : 시간차 효과
    if($('#works_ani').offset().top - winH/2 < WscrollTop){
        
        const thisScroll = WscrollTop - $('#works_ani').offset().top;
        const moveY = thisScroll*-.1;
        
        $('.sec_subTit.ani').css({transform: 'rotate(-90deg) translate('+(-100-moveY)+'%,-30%)'});
    }
    
    //// PC only
    if($(window).width() > 1050){
        
        // works_web : 가로 스크롤
        if($('#works_web').offset().top < WscrollTop && $('#works_web').offset().top + $('#works_web').height() > WscrollTop){
            const web_scroll = WscrollTop - $('#works_web').offset().top;
            $('#web_container').css('left', -1 * web_scroll);
        }
        
        // works_ani : 리스트 스크롤
        if($('#works_ani').offset().top < WscrollTop && $('#works_ani').offset().top + $('#works_ani').height() > WscrollTop){
            const ani_offset = WscrollTop - $('#works_ani').offset().top;
            
            // ani : 고정
            const persent = Math.round((ani_offset / $('#works_ani').height()) * 100);
            if(23 < persent){
                $('.container.ani').addClass('fixed');
            }else{
                $('.container.ani').removeClass('fixed');
            }
            if(70 < persent){
                $('.container.ani').removeClass('fixed');
                $('.container.ani').addClass('after');
            }else{
                $('.container.ani').removeClass('after');
            }

            // ani_list : 스크롤
            if(persent < 40){
                $('.ani_list').removeClass('active');
                $('#ani_list_1').addClass('active');
                $('#works_ani').css({background: '#EBB086'});
            }else if(persent < 50){
                ani3_pause();
                $('.ani_list').removeClass('active');
                $('#ani_list_2').addClass('active');
                $('#works_ani').css({background: '#7cc7e0'});
            }else if(persent < 60){
                $('.ani_list').removeClass('active');
                $('#ani_list_3').addClass('active');
                $('#works_ani').css({background: '#f5baa5'});
            }else if(persent < 70){
                ani3_pause();
                $('.ani_list').removeClass('active');
                $('#ani_list_4').addClass('active');
                $('#works_ani').css({background: '#A7CFB6'});
            }
        }
    }
    
    /* get In Touch */
    // goal : 시간차 효과
    if($('#goal').offset().top - winH/2 < WscrollTop && $('#message').offset().top > WscrollTop){
        
        const thisScroll = WscrollTop - $('#goal').offset().top;
        const moveY = thisScroll*-.1;
        
        $('#goal_txtBox').css({transform: 'translateY('+moveY+'%)'});
    }
    // message
    // : 시간차 효과
    if($('#message').offset().top - winH/2 < WscrollTop){
        
        const thisScroll = WscrollTop - $('#message').offset().top;
        const moveY = thisScroll*-.1;
        
        $('.sec_titBox.git').css({transform: 'translateY('+(-60-moveY)+'%)'});
        $('.bulb1').css({transform: 'translateY('+moveY+'%)'});
        $('.bulb2').css({transform: 'translateY('+moveY+'%)'});
    }
    // : .msg_group 등장 애니메이션
    for(var i=1; i<10; i++){
        if($('.msg_group.g'+i+'').offset().top - winH < WscrollTop){$('.msg_group.g'+i+'').addClass('scroll');}
    }
    if($('#message').offset().top - winH > WscrollTop){$('.msg_group').removeClass('scroll');}
    
    // 푸터
    footer();
});


/* works_ani : 배경 _모바일 */
function ani_background(){
    if($(window).width() <= 1050){
        $('#works_ani').css({background: 'linear-gradient(#EBB086 70%, #A7CFB6)'});
    }
}

/* works_ani : ani_3 플레이어 */
const ani3_mp3 = new Audio('media/Wild_Summer.mp3');
ani3_mp3.volume = 0.1;

function ani3_play(){
    ani3_mp3.play();
    $('.fa-pause').show();
    $('.fa-play').hide();
    $('#musicBox').addClass('playing');
}
function ani3_pause(){
    ani3_mp3.pause();
    $('.fa-play').show();
    $('.fa-pause').hide();
    $('#musicBox').removeClass('playing');
}

/* 푸터 */
function footer(){
    if($('#message').offset().top < $(this).scrollTop()){
        $('.container.foot').css({display: 'flex'});
    }else{
        $('.container.foot').css({display: 'none'});
    }

    if($('#footer').offset().top - $(window).height() <= $(this).scrollTop()){
        $('#message').css({transform: 'scale(.95)'});
    }else{
        $('#message').css({transform: 'scale(1)'});
    }
}