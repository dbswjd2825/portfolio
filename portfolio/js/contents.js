$(document).ready(function(){
    //서울특별시체육회 main_visual swiper
    const sport_swiper = new Swiper('.sport .detail .main .swiper', {
        slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
        spaceBetween: 40, /* li와 li사이 - 제일 작은 여백 */
        breakpoints: {
            1024: {  /* 1024px 이상이 되면 적용 */
                spaceBetween: 40,
            },
        },
        centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        autoplay: { 
            delay: 2500,
            disableOnInteraction: true,
        },
    });
})