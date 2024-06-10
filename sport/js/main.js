/* 
    파일명 : main.js 
    작성자 : 이윤정
    작성일 : 24.04.09
    설  명 : 메인페이지에서 사용된 jqeury (header 빼고)
*/
$(document).ready(function(){

    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },

    });

    const sport_list_swiper = new Swiper('.sport_list .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 3, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            500: {    /* 640px 이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 10,
            },
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 5,
                spaceBetween: 10,
            },
            1024: {   /* 1024px 이상일때 적용 */
                slidesPerView: 6,
                spaceBetween: 20,
            },
            1280: {    /* 1280px 이상일때 적용 */
                slidesPerView: 7,
                spaceBetween: 30,
            },
            1320: {    /* 1320px 이상일때 적용 */
                slidesPerView: 8,
                spaceBetween: 30,
            },
        },
        centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 1000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        },
    });
    swiper.autoplay.stop();  /* 일시정지 기능 */
    swiper.autoplay.start();  /* 재생 기능 */
        
    
    $('.biz  .list ul li').on('mouseenter', function(){
        $('.biz').attr('data-bg', $(this).attr('data-bg'));
    })

    
    $('.footer .family_site .list button').on('click', function(){
        $(this).parents('.list').toggleClass('on')
    })
})