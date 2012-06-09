define( ['boot/bootjquery', 'boot/bootunderscore', 'boot/bootbackbone'], function ($, _, Backbone) {

  var SimpleModel = Backbone.Model.extend({
      initialize: function() {
          console.log('model initialized')

      }

  })
//TODO: put this on stack overflow as a question as I'm not sure if this is the right solution
    //the intention is to ignore the model changes before the user submits the data from the input
  var InputView = Backbone.View.extend({
      tagName: 'input'
      , events: {
          'focus' : 'onFocus'
          , 'focusout': 'onFocusOut'
      }
      , initialize: function() {
          _.bindAll(this, 'modelChanged')
            this.model.on('change', this.modelChanged)
      }
      , onFocus: function() {
          this.model.off('change', this.modelChanged())
          console.log('input focused')
      }
      , onFocusOut: function() {
          console.log('input lost focus')
          this.requestCommit()
      }

      , requestCommit: function() {
          this.model.set('value', this.getValue())
          this.model.on('change', this.modelChanged)

      }
      , modelChanged: function() {
          console.log('model changed')
          this.setValue(this.model.get('value') + '-')

      }
      , setValue: function(value) {
            this.$el.attr('value', value)
      }
      , getValue: function() {
          return this.$el.attr('value')
      }
  })

  return {
    SimpleModel: SimpleModel
    , InputView : InputView
        }

})