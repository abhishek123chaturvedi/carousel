var home = function(option) {
    var self = this;
    $.extend(this,option);

    // constructor start here
    (function() {
        self.bindEvents();
    })();
}

home.prototype = {

    getName : function() {
        return this.name;
    },
    bindEvents: function() {

        $(this.buttonClass).unbind('click').bind('click',function() {
            console.log("button clicked !!");
        });
    }
};
