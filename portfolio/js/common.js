$(document).ready(function(){
    let scrolling 
    function scroll_chk(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0){ // 스크롤 O
            $('.header').addClass('fixed')
        }else{ // 스크롤X 혹은 다시 상단으로 올라간 경우
            $('.header').removeClass('fixed')
        }
    }
    scroll_chk() // 문서가 로드되었을때 1번 실행
    $(window).scroll(function(){
        scroll_chk()
    })
    
})