/* 
    파일명 : main.js 
    작성자 : 이윤정
    작성일 : 24.05.10
    설  명 : 메인페이지에서 사용된 jqeury (header 빼고)
*/
$(document).ready(function(){
    let item_name

    $('.notice .tit .tap_menu ul li').on('click', function(){
        $('.notice .tit .tap_menu ul li').removeClass("on")
        $(this).addClass("on")
        item_name = $(this).attr('data-name') 
    })

    const popupzon_swiper = new Swiper('.popupzon .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
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
            nextEl: '.next',  /* 다음 버튼의 클래스명 */
            prevEl: '.prev',  
        },

    });
}) //$(document).ready