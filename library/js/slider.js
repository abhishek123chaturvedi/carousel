var slider = function(option) {
    var self = this;
    $.extend(this,option);

    this.sliderWidth = 0;
    this.slideCount = 0;
    this.slideWidth = 0;

    this.slideCount = $(this.sliderClass).children('li').length;
    this.slideWidth = $(this.sectionId).width();
    this.sliderWidth = this.slideCount*this.slideWidth;
    $(this.sliderClass).css({width : this.sliderWidth, marginLeft: - this.slideWidth});
    console.log(this.slideCount, this.slideWidth, this.sliderWidth);
    // constructor start here
    (function() {
        self.bindEvents();
    })();
}

slider.prototype = {

    bindEvents: function() {
        var slideWidth = this.slideWidth;
        var sliderClass = this.sliderClass;

        function moveRight() {
            $(sliderClass).animate({
                left: -slideWidth
            }, function () {
                $('#slider ul li:first-child').appendTo(sliderClass);
                $(sliderClass).css('left', '');
            });
        }

        function moveLeft() {
            $(sliderClass).animate({
                left: + slideWidth
            }, function () {
                $('#slider ul li:last-child').prependTo(sliderClass);
                $(sliderClass).css('left', '');
            });
        }

        $(this.nextLink).unbind().bind("click",function() {
            moveRight();
        });

        $(this.preLink).unbind().bind("click",function() {
            moveLeft();
        });
        console.log($(this.autoplayId).val())

        $(this.autoplayId).change(function() {
            console.log($(this.autoplayId).val())
            if($(this.autoplayId).val() == "on") {
                setInterval(function () {
                    moveRight();
                }, 3000);
            }
        });
    }

};
