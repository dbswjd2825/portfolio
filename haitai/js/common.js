/* 
    파일명 : common.js 
    작성자 : 이윤정
    작성일 : 24.03.28
    설  명 : 모든 페이지에서 작동되는 jqeury (header와 footer에서 작동)
*/

$(document).ready(function(){
    /* 
        브라우저가 스크롤이 되면 header에 fixed 클래스 추가
        맨위로 다시 올라가면 header에 fixed 클래스 삭제 
    */
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
    $('.header .tnb ul li.haitaimall a').on('focusout', function(){
        if( device_status == 'pc'){
            $('header .gnb .depth1 > li').removeClass('on')
            $('header').removeClass('menu_over')
        } 
    })
}) //$(document).ready