/* 
    파일명 : main.js 
    작성자 : 이윤정
    작성일 : 24.03.28
    설  명 : 메인페이지에서 사용된 jqeury (header 빼고)
*/

$(document).ready(function(){
    $('.best .list > ul >li').on('click', function(){
        $('.best .list > ul >li').removeClass('list_on')
        $(this).addClass('list_on')
    })

    AOS.init({
        offset: 150, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 500, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
    });

    $('.best .list > ul >li > .detail > ul > li').on('mouseenter', function(){
        $('.best .list > ul >li > .detail > ul > li').removeClass('active')
        $(this).addClass('active')
    })

    //$('.sticky').sticky();
    //var sticky = new Sticky('[data-sticky]', {});

    // $('.event .list').stickyStack({
	// 	containerElement: '.event .photo_grup',
	// 	stackingElement: '.photo',
	// });
    let window_w //브라우저 넓이
    let window_h //브라우저 높이
    let device //디바이스의 종료 pc/mobile
    let scrolling //현재 스크롤된값
    let obj_wrap = $('.event .list');
    let obj_wrap_top //감싸는 요소의 위값
    let obj_wrap_h //감싸는 요소의 높이
    let fix_start //고정 시작지점
    let fix_end //고정 종료지점
    let obj = $('.event .item') //내부 고정요소
    let obj_top //내부 고정요소의 상단값
    let obj_end 
    let obj2 = $('.event .text_grup .detail')
    
    function event_chk(){
        window_w = $(window).width()
        window_h = $(window).height()
        if(window_w > 1024){
            device = 'pc'
        }else{
            device = 'mobile'
        }
        scrolling = $(window).scrollTop()
        obj_wrap_top = obj_wrap.offset().top
        obj_wrap_h = obj_wrap.height()

        if(device == 'pc'){
            fix_start = obj_wrap_top - (window_h*0.5)
            fix_end = obj_wrap_top + obj_wrap_h - 100 - window_h
            if((scrolling >= fix_start) && (scrolling <= fix_end)){
                //console.log('고정중');
                obj.each (function (index, el) {
                    obj_top = $(el).offset().top - 100 - (index*10)
                    //console.log(index+'고정중'+obj_top)
                    if(scrolling >= obj_top){
                        $(el).addClass('fixed')
                        $(el).removeClass('fixed_before')
                        $(el).removeClass('fixed_after')
                        //obj_fixed_top = scrolling - obj_top 
                        //$(el).attr('style','position:fixed')
                    }else{
                        $(el).addClass('fixed_before')
                        $(el).removeClass('fixed')
                        $(el).removeClass('fixed_after')
                    }
                });
                obj2.each (function (index, el2) {
                    console.log(scrolling, $(el2).offset().top, window_h);
                    obj_top = $(el2).offset().top - (window_h*0.5)
                    obj_end = $(el2).offset().top + $(el2).height() - (window_h/3)
                    if((scrolling >= obj_top) && (scrolling <= obj_end)){
                        $(el2).addClass('fixed')
                        $(el2).removeClass('fixed_other')
                    }else{
                        $(el2).addClass('fixed_other')
                        $(el2).removeClass('fixed')
                    }
                });
            }else if(scrolling > fix_end){
                obj.addClass('fixed_after')
                obj.removeClass('fixed')
                obj.removeClass('fixed_before')
                obj2.addClass('fixed_other')
                obj2.removeClass('fixed')
            }else{
                obj.addClass('fixed_before')
                obj.removeClass('fixed')
                obj.removeClass('fixed_after')
                obj2.addClass('fixed_other')
                obj2.removeClass('fixed')
            }
        }else{//모바일일때
            //obj.attr('style','margin-top:0')
        }
    }
    event_chk();
    $(window).scroll(function(){
        event_chk()
    })
    $(window).resize(function(){
        event_chk()
    })
})
