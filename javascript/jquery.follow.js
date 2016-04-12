(function($) {

	$.follow = function(box, options) {
		box = $(box);

        var offset_top = box.offset().top;
        $(window).scroll(function() {
            var scroll_top = $(window).scrollTop();

            if (
                (scroll_top < box.position().top) ||     // space/elements above the box
                (box.outerHeight() > $(window).height()) // box is bigger than window
                )
            {
                box.stop().animate({"marginTop": 0 + "px"}, options.speed);
                return;
            }

            var pos = scroll_top - offset_top + options.margin_top;

            box.stop().animate({"marginTop": (pos) + "px"}, options.speed);
        });

	};

	$.fn.follow = function(options) {

        options = options || {};
        options.speed = options.speed || 200;
        options.margin_top = options.margin_top || 0;

        this.each(function() {
            new $.follow(this, options);
        });

		return this;
	};

})(jQuery);
