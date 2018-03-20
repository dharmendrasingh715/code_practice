(function(){
    var people = {
        people: ['dharm','singh'],
        init: function() {
            this.cacheDom();
            this.render();
            this.bindEvents();
        },
        cacheDom: function() {
            this.$el = $('#people-module');
            this.$button = this.$el.find('button');
            this.$input = this.$el.find('input');
            this.$ul = this.$el.find('ul');
            this.$template = this.$el.find('#people-template').html();
        },
        render: function (){
            var data = {
                people: this.people
            };
            this.$ul.html(Mustache.render(this.$template, data));
        },
        bindEvents: function () {
            this.$button.on('click', this.addPerson.bind(this));
            this.$ul.on('click','.del', this.deletePerson.bind(this));
        },
        addPerson: function () {
            this.people.push(this.$input.val());
            this.render();
        },
        deletePerson: function(event) {
            var $remove = $(event.target).closest('li');
            var i = this.$ul.find('li').index($remove);
            this.people.splice(i,1);
            this.render();
        }
    };

    people.init();
})();