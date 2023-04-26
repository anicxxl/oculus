$(function () {
  $('.product-tabs__link').on('click',function(e){
    e.preventDefault();
    $('.product-tabs__link').removeClass('product-tabs__link--active');
		$(this).addClass('product-tabs__link--active');

		$('.product-tabs__content-box').removeClass('product-tabs__content-box--active');
		$($(this).attr('href')).addClass('product-tabs__content-box--active');

  });


});