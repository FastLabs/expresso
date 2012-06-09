define( ['boot/bootjquery', 'boot/bootunderscore', 'boot/bootbackbone'], function($, _, Backbone) {
    var templ = {};

    require(['./require/text!templates/form.html'], function(tmpl) {
        templ.form = _.template(tmpl);
       // console.log('template loaded ' + tmpl);
    });

    require(['./require/text!templates/input.html'], function(tmpl) {
        templ.input = _.template(tmpl);
       // console.log('template loaded ' + tmpl);
    });

    //defines the list of the data structures,
    //at the moment this is a bare collection, but may be separated later
    //in a particular model and more functional collection
    var Structures = new Backbone.Collection([
        {name: 'MockSecurity', title: 'Mock Security'},
        {name: 'InvalidSecurity', title: 'Invalid Security'},
        {name: 'IborIndex', title: 'Ibor Index'},
        {name: 'SwapIndex', title: 'Swap Index'}
    ])

    var PricingEngineType = new Backbone.Collection([ {name: 'DISCOUNTIN_SWAP_ENGINE', id: 1}
        , {name: 'BLAC_SWAPTION_ENGINE', id: 2}
    ])

    var PricingengineTypePlus = new Backbone.Collection([ {id: 1, shortcut: 'DSE', title: 'Discount Swap Engine'}
        , {name: 'BLACK_SWAPTION_ENGINE', shortcut: 'BSE', title: 'Black Swaption Engine'}
    ])

    var Currency = new Backbone.Collection([ {name: 'AED', code: '784'}
        , {name: 'AFN', code: 71 }
        , {name: 'ALL', code: 8 }]
    )


    var FieldModel = Backbone.Model.extend({
        initialize: function () {

        },
        defaults: {
            title: 'Future Id',
            identifier: 'id'
        }
    })

    var FieldCollection = Backbone.Collection.extend({
        model: FieldModel
    })

    var SwapIndex = new FieldCollection([ {name: 'id', value: 0, required: true}
        , {name: 'currency', value: 'USD', required: true, type: Currency}
        , {name: 'fixingsId', required: false}
        , {name: 'discountCurveId', required: false, type: 'SecurityLink'}
    ])


  var TextInputView = Backbone.View.extend({
        tagName: 'input'
        , className: 'input-xlarge'
        , setValue: function(value) {
            this.$el.val(value)
        }
    })



    var InputView = Backbone.View.extend({
            className: 'control-group'
            , tagName: 'div'
            , render: function() {
                if (this.el !== undefined) {
                    //TODO: validate the model
                    this.$el.html(templ.input(this.model))
                        console.log(this.model.value)
                    var x = new TextInputView({id: this.model.identifier})
                        x.$el.insertBefore(this.$el.find('span.help-inline'))
                        x.setValue(this.model.value)
                    return this
                }
            }
            , inlineMessage: function(message, decorator) {
                this.ok()
                if(decorator) {
                    this.$el.addClass(decorator)
                }
                this.$el.find('span.help-inline').text(message).show()
            }
            , blockMessage: function (message, decorator) {
                this.ok()
                if(decorator) {
                    this.$el.addClass(decorator)
                }
                this.$el.find('p.help-block').text(message).show()
            }
            , ok: function() {
                this.$el.attr('class', this.className)
                this.$el.find('span.help-inline').hide()
                this.$el.find('p.help-block').hide()
            }
        }
    )

    var FormModel = Backbone.Model.extend({
         defaults: {
             title: ''
         }
        , initialize: function() {

        }

    })

    var FormView = Backbone.View.extend({
         el: '#formContainer'
        , content: []
        , initialize: function() {
            console.log('Form View Initialized' )
            this.title = this.model.get('title')
            var that = this
            this.model.on('change:title', function (model, title) {
                that.setTitle(title)
            })
        }
        , setTitle:  function(title) {
            $('legend').html(title)
        }
        , render: function () {
            $(this.el).html(templ.form({title: this.title}))
            var entity = this.model.get('entity')
            var that = this
            if(entity !== undefined) {
                var formActionBar = $('.form-actions')
                var attrNames = _.keys( entity.attributes)
                _.each(attrNames, function(attr) {
                    var inputView = new InputView({model: {title: attr
                        , identifier: attr
                        , value: entity.get(attr)}})
                    inputView.render()
                    inputView.$el.insertBefore(formActionBar)
                    that.content.push(inputView)
                })

            }
            return this;
        }
    });


    var StructuresView = Backbone.View.extend({
        el: '.nav-list', 
        initialize : function () {
            this._template = _.template('<li><a href="#<%=name%>"><%=title%></a></li>');
        },
        render: function() {
            var that = this;
            if(this.model !== undefined) {
                this.model.forEach(function (val) {
                  that.$el.append(that._template({
                        'title': val.get('title')
                      , 'name' : val.get('name')
                  }))
                });
            }
        }
    })


    return {
        text: TextInputView
        , formModel: FormModel
        , form: FormView
        , structuresView : StructuresView
        , structures: Structures
        , form : FormView
        , template : templ
    }
})