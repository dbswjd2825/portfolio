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
        if(device == 'pc'){
        $('.best .list > ul >li > .detail > ul > li').removeClass('active')
        $(this).addClass('active')
        }   
    })

    //$('.sticky').sticky();
    var sticky = new Sticky('[data-sticky]', {});

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
                        $('.event .pagination').attr('data-active', index)
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

    
    $('.sns .list ul li').on('mouseenter', function(){
        if(device == 'pc'){
            $(this).index()
            console.log($(this).index())
            $('.sns .list ul li').attr('data-hover', '')
            $(this).attr('data-hover','cur')
            $('.sns .list ul li').eq($(this).index()-1).attr('data-hover','pre')
            $('.sns .list ul li').eq($(this).index()+1).attr('data-hover','next')()
            swiper.destroy();
        }else{
            const sns_swiper = new Swiper('.sns .swiper', { /* 팝업을 감싼는 요소의 class명 */
                slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
                spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
                breakpoints: {
                    640: {  /* 640px 이상이 되면 적용 */
                        spaceBetween: 30, 
                    },
                    1024: {  /* 1024px 이상이 되면 적용 */
                        spaceBetween: 40,
                    },
                },
                centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
                loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
                autoplay: {  /* 팝업 자동 실행 */
                    delay: 1500,
                    disableOnInteraction: true,
                },
                pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
                    el: '.swiper-pagination', /* 해당 요소의 class명 */
                    clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
                },
            });
        }
    })

    $('.footer .fmailysite button.open').on('click', function(){
        $('.footer .fmailysite ul').slideDown()
        $('.footer .fmailysite').addClass('on')
    })
    $('.footer .fmailysite button.close').on('click', function(){
        $('.footer .fmailysite ul').slideUp()
        $('.footer .fmailysite').removeClass('on')
    })
})
