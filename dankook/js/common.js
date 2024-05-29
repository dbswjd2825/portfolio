/* 
    파일명 : common.js 
    작성자 : 이윤정
    작성일 : 24.05.10
    설  명 : 모든 페이지에서 작동되는 jqeury (header와 footer에서 작동)
*/

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

    $('.header .tnb .lang').on('click', function(){
        $('.header .tnb .lang .list').toggle()
    })

    //top 버튼 눌러서 상단으로 이동
    $('aside button').on('click', function(){
        $('html,body').animate({
            scrollTop:0
        }, 500)
    })

    $('.footer .family_site .list').hide()
    $('.footer .family_site > ul > li').on('click', function(){
        $(this).children('.list').toggle()
        $(this).toggleClass('on')
    })
}) //$(document).ready