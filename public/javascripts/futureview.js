define( ['boot/bootjquery', 'boot/bootunderscore', 'boot/bootbackbone'], function ($, _, Backbone) {
    console.log('future view initialized');

    var view = Backbone.View.extend( {
        template : $('#first_template'),

        initialize:function () {
            this.el = $('#search_container');
            console.log('future view initialized');
            this.model.on('change:currency', this.render, this);

        },

        render:function () {
            this.el.text(_.template(this.template.html(), {currency: this.model.get('currency')}) );
        }

    });
    return view;
});
