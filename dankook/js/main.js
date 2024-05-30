/* 
    파일명 : main.js 
    작성자 : 이윤정
    작성일 : 24.05.10
    설  명 : 메인페이지에서 사용된 jqeury (header 빼고)
*/
$(document).ready(function(){


    //top 버튼 눌러서 상단으로 이동
    $('.quick_menu ul li.q_top').on('click', function(){
        $('html,body').animate({
            scrollTop:0
        }, 500)
    })


    let item_name

    $('.notice .tit .tap_menu ul li').on('click', function(){
        $('.notice .tit .tap_menu ul li').removeClass("on")
        $(this).addClass("on")
        item_name = $(this).attr('data-name') 
        $('.notice .detail .item').hide()
        $('.notice .detail').find('[data-name = "'+item_name+'"]').show()
    })


    const popupzon_swiper = new Swiper('.popupzon .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        
        navigation: {  /* 이전, 다음 버튼 */
        nextEl: '.popupzon .next',  /* 다음 버튼의 클래스명 */
        prevEl: '.popupzon .prev',  
        },

    });

        // 클래스가 "counter"인 모든 요소를 선택합니다.
        const $counters = $(".counter");
    
        // 노출 비율(%)과 애니메이션 속도(ms)을 설정합니다.
        const exposurePercentage = 100; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
        const duration = 1000; // ex) 1000 = 1초
        
        // 숫자에 쉼표를 추가할지 여부를 설정합니다.
        const addCommas = true; // ex) true = 1,000 / false = 1000
        
        // 숫자를 업데이트하고 애니메이션하는 함수 정의
        function updateCounter($el, start, end) {
            let startTime;
            function animateCounter(timestamp) {
                if (!startTime) startTime = timestamp;
                const progress = (timestamp - startTime) / duration;
                const current = Math.round(start + progress * (end - start));
                const formattedNumber = addCommas ? current.toLocaleString() : current;
                $el.text(formattedNumber);
                
                if (progress < 1) {
                    requestAnimationFrame(animateCounter);
                } else {
                    $el.text(addCommas ? end.toLocaleString() : end);
                }
            }
            requestAnimationFrame(animateCounter);
        }
    
        
        // 윈도우의 스크롤 이벤트를 모니터링합니다.
        $(window).on('scroll', function() {
            // 각 "counter" 요소에 대해 반복합니다.
            $counters.each(function() {
                const $el = $(this);
                // 요소가 아직 스크롤되지 않았다면 처리합니다.
                if (!$el.data('scrolled')) {
                    // 요소의 위치 정보를 가져옵니다.
                    const rect = $el[0].getBoundingClientRect();
                    const winHeight = window.innerHeight;
                    const contentHeight = rect.bottom - rect.top;
                    
                    // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
                    if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                        const start = parseInt($el.data("start"));
                        const end = parseInt($el.data("end"));
                        // 숫자를 업데이트하고 애니메이션을 시작합니다.
                        updateCounter($el, start, end);
                        $el.data('scrolled', true);
                    }
                }
            });
        }).scroll();
        

    const swiper = new Swiper('.schedule .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 3, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 20, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            1600: {   
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
        centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 1500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.schedule .next',
            prevEl: '.schedule .prev',
        },
    });
    $('.schedule .tit .stop').on('click', function(){
        $(this).hide()
        $('.schedule .tit .start').show()
        swiper.autoplay.stop();  /* 일시정지 기능 */
    })
    $('.schedule .tit .start').on('click', function(){
        $(this).hide()
        $('.schedule .tit .stop').show()
        swiper.autoplay.start();  /* 재생 기능 */
    })

    let now = new Date()
	let now_year = now.getFullYear()
	let now_month = now.getMonth()+1
	let now_date = now.getDate()
	let now_day = now.getDay() //요일
	$('.schedule .date span').text(now_year + '년' + now_month + '월' + now_date + '일')

    }) //$(document).ready