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

})