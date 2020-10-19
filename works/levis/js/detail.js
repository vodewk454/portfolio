/********** DETAIL **********/
$(function(){

    
    var WscrollTop=$(this).scrollTop();
    var winH=$(this).height();

    
    // 텍스트박스 위치
    if($(window).width() > 1033){
        
        var absolutePos = $('#dt_txtBox').offset().top;
        
        if($('#dt_imgBox').offset().top + $('#dt_imgBox').height() - winH < WscrollTop){

            $('#dt_txtBox').css({position: 'absolute', top: absolutePos});
        }else{

            $('#dt_txtBox').css({position: 'fixed', top: 190});
        }
    }
    
    /******************************** 등장 애니메이션 */
    // img박스 : toTop 애니메이션
    if($('#dt_container').offset().top - winH < WscrollTop){
        $('#dt_imgBox, #dt_txtBox').addClass('scroll');
    }
    

});






/************************************************************ 스크롤 */
$(window).scroll(function(){
    
    
    var WscrollTop=$(this).scrollTop();
    var winW=$(this).width();
    var winH=$(this).height();

    
    // 텍스트박스 위치
    if(winW > 1033){
        
        var absolutePos = $('#dt_txtBox').offset().top;
        
        if($('#dt_imgBox').offset().top + $('#dt_imgBox').height() - winH < WscrollTop){
            $('#dt_txtBox').css({position: 'absolute', top: absolutePos});
            
        }else{
            $('#dt_txtBox').css({position: 'fixed', top: 190});
        }
    }
    
    /******************************** 등장 애니메이션 */
    // bottom박스 : fromR/L 애니메이션
    if($('#dt_bottomBox').offset().top - winH /1.2 < WscrollTop){
        $('#dt_bottomBox').addClass('scroll');
    }

    
    
});//--> $(window).scroll(function(){



