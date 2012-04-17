define( ['boot/bootjquery', 'boot/bootunderscore', 'boot/bootbackbone'], function ($, _, Backbone) {
    console.log('future model intialized');
    var Future = Backbone.Model.extend({
        defaults:{
            currency:'GBP'
        },
        doIt:function () {
            console.log('hello wolrd');
        }
    });

    return Future;
});


//require(['query','text!../templates/searchview.html'], function () {
//    console.log('templates loaded');
//});