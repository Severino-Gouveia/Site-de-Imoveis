$(window).scroll(function() {
    $('.slide-up').each(function() {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
  
      if (bottom_of_window > bottom_of_element) {
        $(this).addClass('show');
      }
    });
  });
  
  $(window).scroll(function() {
    $('.slide-up-2').each(function(index) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
  
      if (bottom_of_window > bottom_of_element) {
        $(this).addClass('show-from-bottom');
        $(this).delay(200 * index).queue(function(next) {
          $(this).addClass('show-from-left');
          next();
        });
      }
    });
  });