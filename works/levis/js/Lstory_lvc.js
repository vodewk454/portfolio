/********** L'STORY - LVC **********/
$(function(){
    
    /* 등장 애니메이션 */
    $('.bg_dark.sAB, .txtBox.sA').addClass('scroll');
    
    
    /* ScrollTrigger */
    gsap.registerPlugin(ScrollTrigger);

    // secAB
    const sA = gsap.timeline({
      scrollTrigger: {
        trigger: "#secA",
        scrub: true,
//        pin: true,
        start: "top top",
        end: "+=10%"
      }
    });
    sA.from('.line1', {width: 0})
    sA.from('.line2', {width: 0})
    
    const sB = gsap.timeline({
      scrollTrigger: {
        trigger: "#secB",
        scrub: true,
//        pin: true,
        start: "top 50%",
        end: "+=50%"
      }
    });
    sB.from('.line3', {width: 0})
    

    // secC
    gsap.from(".txtBox.sC > h1", {
      scrollTrigger: {
        trigger: "#secC",
        scrub: 1,
        start: "bottom bottom",
        end: "+=100%"
      },
      left: '0'
    });

    // secD
    const sD = gsap.timeline({
      scrollTrigger: {
        trigger: "#secD",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=400%"
      }
    });
    sD.from('.bg_dark.sD', {background: 'rgba(0,0,0,0)'})
    sD.from('.maskBox > .p1', {top: 100, ease: 'back'}, '<')
    sD.from('.maskBox > .p2', {top: 100, ease: 'back'}, '>1')
    sD.from('.maskBox > .p3', {top: 100, ease: 'back'}, '>1')
             
    // secE
    const sE = gsap.timeline({
      scrollTrigger: {
        trigger: "#secE",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=1500%"
      }
    });
    sE.from('.sE_tit > p', {opacity: 0, transform: 'translate(-50%,-50%) scale(.5)', duration: 2})
    sE.to('.sE_tit', {opacity: 0, duration: 3})
    sE.from('.sE_txt > span', {opacity: 0, stagger: 1}, '<')
    sE.to('.sE_txt', {opacity: 0, duration: 2})
    sE.from('.sE_lvc', {opacity: 0, duration: 1}, '<')
    sE.to('.sE_lvc', {marginBottom: '100px', duration: 3}, '<')
});




/************************************************************ 스크롤 */
$(window).scroll(function(){
    
    var WscrollTop=$(this).scrollTop();
    var winH=$(this).height();
    
    /******************************** 등장 애니메이션 */
    if($('#secB').offset().top - winH < WscrollTop){
        $('.txtBox.sB').addClass('scroll');
    }
    
    if($('#secE').offset().top - winH < WscrollTop){
        $('.txtBox.sE').addClass('scroll');
    }
});