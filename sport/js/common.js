/* 
    파일명 : common.js 
    작성자 : 이윤정
    작성일 : 24.04.09
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
    
    /* pc 버전에서 메뉴 오버 */
    let device_status
    let window_w
    function device_chk(){
        window_w = $(window).width()
        if(window_w > 1024){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    }
    device_chk() //문서가 로딩되고 1번 실행
    $(window).resize(function(){  //문서가 리사이즈될때마다 1번씩 실행
        device_chk()
    })

    $('header .gnb .depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('header .gnb .depth1 > li').removeClass('on')
            $(this).addClass('on')
            $('header').addClass('menu_over')
        }
    })
    $('header').on('mouseleave', function(){
        if(device_status == 'pc'){
            $('header .gnb .depth1 > li').removeClass('on')
            $('header').removeClass('menu_over')
        }
    })
    $('header .tnb ul li.lang a').on('focusin', function(){
        if( device_status == 'pc'){
            $('header .gnb .depth1 > li').removeClass('on')
            $('header').removeClass('menu_over')
        } 
    })

    /* 
        모바일메뉴
        1차메뉴 a를 클릭하면 a링크 작동이 안되어야 하고
        하위메뉴를 열어줌 
    */
    $(".header .gnb ul.depth1 > li > a").on("click", function(e){
        if( device_status == 'mobile'){
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            $(this).parent().toggleClass('on')
        }
    });

    $('.header .gnb_open').on('click', function(){
        $('.header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('.header .gnb_close').on('click', function(){
        $('.header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })

})