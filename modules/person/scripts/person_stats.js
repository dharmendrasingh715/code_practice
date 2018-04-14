var stats = function(){

    var $el = $('.module-display-count');
    var $template = $el.find('#stats-template').html();
    var people = 0;

    _render();

    events.on("peopleChanged", updateCount);

    function _render() {
        $el.html(Mustache.render($template,{people: people}));
    }

    function updateCount(value) {
        people = value;
        _render();
    }

    return {
        updateCount: updateCount
    };

}();
