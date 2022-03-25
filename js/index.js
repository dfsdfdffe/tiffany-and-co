$(document).ready(function(){

    // new fullpage('#wrap',{});

    $('.hamberger').click(function(){
        $(this).children().toggleClass('on');

        if($('.menu-bar-box').hasClass('active')){
            $('.menu-bar-box').removeClass('active');
        }else{
            $('.menu-bar-box').addClass('active');
        }
    });

    const but = $('#top_but');
    $(window).scroll(function(){
        let sct = $(window).scrollTop();
        // console.log(sct);
        if(sct >= 900){
            but.addClass('show');
        }else{
            but.removeClass('show');
        }
        but.click(function(){
            $('html,body').stop().animate({
                scrollTop:0
            },300)
        });
    });
    
    $('.category-but').click(function(){
        $(this).toggleClass('on');
        if($(this).hasClass('on')){
            $('.category-but span').css({
            color:'#fff'
            });
        }else{
            $('.category-but span').css({
                color:'#222'
            });
        }
        
    });
});//end