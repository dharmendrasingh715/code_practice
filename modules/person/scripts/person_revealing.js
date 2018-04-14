var people = function(){
    var people = ['dharm','singh'];
    var $el = $('#people-module');
    var $button = $el.find('button');
    var $input = $el.find('input');
    var $ul = $el.find('ul');
    var $template = $el.find('#people-template').html();

    $button.on('click', addPerson.bind(this));
    $ul.on('click','.del', deletePerson.bind(this));

    render();

    function render(){
        var data = {
            people: people
        };
        $ul.html(Mustache.render($template, data));
        // stats.updateCount(people.length);
        events.trigger("peopleChanged",people.length);
    }

    function addPerson(value) {
        var name = (typeof value == "string")?value:$input.val();
        $input.val("");
        people.push(name);
        render();
    }

    function deletePerson(event) {
        var i;
        if(typeof event == "number"){
            i = event;
        } else {
            var $remove = $(event.target).closest('li');
            i = $ul.find('li').index($remove);
        }
        people.splice(i,1);
        render();
    }

    function getPeopleCount() {
        return people.length;
    }

    return {
        addPerson: addPerson,
        deletePerson:deletePerson,
        getCountPeople: getPeopleCount
    };
}();
