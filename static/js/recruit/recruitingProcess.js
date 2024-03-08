$(document).ready(function () {
  var animatedElements = $('.recruitingWeek');

  function checkAndAnimate() {
    animatedElements.each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element && !$(this).hasClass('animated')) {
        $(this).addClass('animated');
      }
    });
  }

  checkAndAnimate();

  $(window).scroll(function () {
    checkAndAnimate();
  });
});
