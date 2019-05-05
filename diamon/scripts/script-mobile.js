
  $('#menuButton').on('click', function(event) {
      event.stopPropagation();
      $('.header__info').addClass("open");
  });
  $(document).click(function(e) {
      var $clicked = $(e.target);
      if (!$clicked.parents().hasClass("open")) {
          $('.header__info').removeClass("open");
      }
  });
  $('.close-btn').click(function(e) {
      var $clicked = $(e.target);
      if ($clicked.parents().hasClass("open")) {
          $('.header__info').removeClass("open");
      }
  });

