/* 
    파일명 : main.js 
    작성자 : 이윤정
    작성일 : 24.04.24
    설  명 : 메인페이지에서 사용된 jqeury (header 빼고)
*/
$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        effect: "fade", /* fade 효과 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.swiper-button-next',  /* 다음 버튼의 클래스명 */
            prevEl: '.swiper-button-prev',  
        },

    }); //visual_swiper


    let item_name

    $('.visual .quicktab .quicktab_bts button').on('click', function(){
        $('.visual .quicktab .quicktab_bts button').removeClass('on')
        $(this).addClass('on')
        item_name = $(this).attr('data-name') 
        $('.visual .quicktab .inner .item').hide()
        $('.visual .quicktab .inner').find('[data-name = "'+item_name+'"]').show()
    })
       
    $('.visual .quicktab .air_inner .air_bts button').on('click', function(){
        $('.visual .quicktab .air_inner .air_bts button').removeClass('active')
        $(this).addClass('active')
    })


    $('.trip_family .txt .tit strong').on('click', function(){
        $('.trip_family .txt .tit').toggleClass('open');
        $('html').click(function(e) {   
            if($(e.target).parents('.trip_family .txt .tit').length < 1){   
                $('.trip_family .txt .tit').removeClass('open');
            }
        });
    })

    $('.trip_family .txt .tit .tit_list li').on('click', function(){
        $('.trip_family .txt .tit strong').text($(this).text())
        $('.trip_family .txt .tit').removeClass('open');
    })


    const banner_swiper = new Swiper('.banner .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.swiper-button-next',  /* 다음 버튼의 클래스명 */
            prevEl: '.swiper-button-prev',  
        },
    }); //banner_swiper


    const best_swiper = new Swiper('.best .list.swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
        spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
        breakpoints: {
        },
        centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 0,
            disableOnInteraction: true,
        },
        speed: 1500,
        spaceBetween: 0,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        pagination: {
            el: ".best .ctrl_btn .loadingbar",
            type: "progressbar",
        },
        
    });
    $('.best .ctrl_btn .stop').on('click', function(){
        best_swiper.autoplay.stop();
        $(this).hide()
        $('.best .ctrl_btn .play').show()
    })
    $('.best .ctrl_btn .play').on('click', function(){
        best_swiper.autoplay.start();
        $(this).hide()
        $('.best .ctrl_btn .stop').show()
    })


    
    $('.series .inner button').on('click', function(){
        $('.series .inner > div').removeClass('on')
        $(this).parent().addClass('on')
    })


    let reviwe_name
    $('.reviwe .list ul li a').on('click', function(){
        reviwe_name = $(this).attr('data-name')
        $('.reviwe').attr('data-name', reviwe_name )
        $('.reviwe .list ul li a').removeClass('on')
        $(this).addClass('on')
    })

}) //$(document).ready