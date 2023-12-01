$('.menu-btn').on('click',function(e){
    e.preventDefault();
      $(this).toggleClass('menu-btn-active');
    $('.menu_drop').toggleClass('menu_drop_active');
    $('body').toggleClass('body-non-overflow');
});

