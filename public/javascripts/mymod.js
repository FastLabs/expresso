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

    var TypeEditorInfo = {
        Currency: {
            pattern: '[A-Z]{3}'
            , maxlength: 3
            , onCommit: function () {

            }
        }
    }
        /**/

    var SimpleView = Backbone.View.extend({
        tagName: 'input'
        , initialize: function() {
            console.log('initialization')
            this.$el[0].oninvalid = function()  {
                console.log('zozo')
            }
        }
        , attributes: {
            required: 'requiured'
            , pattern: '[A-Z]{3}'
            , maxlength: 3
        }
        , events: {
            'blur': 'validate'
        }
        , validate : function () {
            if(this.$el[0].checkValidity()) {
                console.log('valid')
            } else {
                console.log('invalid')
            }
        }
    })

        var enums = ['Currency']
        var unions = ['Schedule']

    var Schema = {
        VanillaSwap : {
            id: {required : 'true'}
            , schedule: {required: 'true', type: 'Schedule'}
            , currency: {reqired: 'true', type: 'Currency'}
        },

        Schedule : {
            id: {required: 'true'}
        }
    }


    var scanSchema =function (schema) {
        var keys = _.keys(schema)
            _.each(keys, function(key) {
                var typeInfo = schema[key]
                    if(_.include(enums, typeInfo.type)) {
                        console.log('is enum')
                    } else if (_.include(unions, typeInfo.type)) {
                        console.log('is struct')
                    } else {
                        console.log('is diffrent')
                    }
            })
    }

    return {
        future: Future
        , input: SimpleView
        , schema : Schema
        , scanSchema: scanSchema
    }
});


//require(['query','text!../templates/searchview.html'], function () {
//    console.log('templates loaded');
//});