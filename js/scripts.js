/*!
    Title: Dev Portfolio Template
    Version: 1.2.1
    Last Change: 08/27/2017
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/

(function($) {
  // Animate scroll-in animation

  $.fn.visible = function(partial) {
    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return compareBottom <= viewBottom && compareTop >= viewTop;
  };

  // Remove no-js class
  $("html").removeClass("no-js");

  // Animate to section when nav is clicked
  $("header a").click(function(e) {
    // Treat as normal link if no-scroll class
    if ($(this).hasClass("no-scroll")) return;

    e.preventDefault();
    var heading = $(this).attr("href");
    var scrollDistance = $(heading).offset().top;

    $("html, body").animate(
      {
        scrollTop: scrollDistance + "px"
        // }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);
      },
      400
    );

    // Hide the menu once clicked if mobile
    if ($("header").hasClass("active")) {
      $("header, body").removeClass("active");
    }
  });
  $(".col-md-8 a").click(function(e) {
    // Treat as normal link if no-scroll class
    if ($(this).hasClass("no-scroll")) return;

    e.preventDefault();
    var heading = $(this).attr("href");
    var scrollDistance = $(heading).offset().top;

    $("html, body").animate(
      {
        scrollTop: scrollDistance + "px"
      },
      Math.abs(window.pageYOffset - $(heading).offset().top) / 1
    );

    // Hide the menu once clicked if mobile
    if ($("header").hasClass("active")) {
      $("header, body").removeClass("active");
    }
  });

  // Scroll to top
  $("#to-top").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      500
    );
  });

  // Scroll to first element
  $("#lead-down span").click(function() {
    var scrollDistance = $("#lead")
      .next()
      .offset().top;
    $("html, body").animate(
      {
        scrollTop: scrollDistance + "px"
      },
      300
    );
  });

  // Create timeline
  $("#experience-timeline").each(function() {
    $this = $(this); // Store reference to this
    $userContent = $this.children("div"); // user content

    // Create each timeline block
    $userContent.each(function() {
      $(this)
        .addClass("vtimeline-content")
        .wrap(
          '<div class="vtimeline-point"><div class="vtimeline-block"></div></div>'
        );
    });

    // Add icons to each block
    $this.find(".vtimeline-point").each(function() {
      $(this).prepend(
        '<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>'
      );
    });

    // Add dates to the timeline if exists
    $this.find(".vtimeline-content").each(function() {
      var date = $(this).data("date");
      if (date) {
        // Prepend if exists
        $(this)
          .parent()
          .prepend('<span class="vtimeline-date">' + date + "</span>");
      }
    });
  });

  // $("img").mouseenter(function(){
  //   console.log($(this).parent)
  //     $(this).addClass("larger")
  // })
  // $("img").mouseout(function(){
  //     $(this).removeClass("larger")
  // })

  $("img").hover(
    function() {
      // $("img").attr("src", "images/imgir.gif");
      var foo = $(this).attr("src");
      $(this)
        .parent()
        .siblings("div")
        .css("background", "rgb(255, 255, 255, 0.8)")
        .css("border", "3px solid #26792F")
        .css("font-weight", "800");
        foo = foo.split(".")[0] + ".gif";
        $(this).attr("src", foo);
      },
      function() {
        $(this)
        .parent()
        .siblings("div")
        .css("background", "none")
        .css("font-weight", "400")
        .css("border", "none")
      var foo = $(this).attr("src");
      foo = foo.split(".")[0] + ".png";
      $(this).attr("src", foo);
    }
  );

  // Open mobile menu
  $("#mobile-menu-open").click(function() {
    $("header, body").addClass("active");
  });

  // Close mobile menu
  $("#mobile-menu-close").click(function() {
    $("header, body").removeClass("active");
  });

  // Load additional projects
  $("#view-more-projects").click(function(e) {
    e.preventDefault();
    $(this).fadeOut(300, function() {
      $("#more-projects").fadeIn(300);
    });
  });
})(jQuery);

var win = $(window);

var allMods = $(".project");

var lils = $("#skills li");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function(event) {
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });
});
lils.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function(event) {
  lils.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("appear");
    }
  });
});
