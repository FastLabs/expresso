define(['boot/bootjquery'], function () {
    !function ($) {
        var MyPlugin = function (element, options) {
           this.$el = $(element)
            registerEvens(this.$el, options)

           this.$el.on('focus', $.proxy(MyPlugin.prototype.call, this))
//           this.$el.on('my-event', function () {
//               console.log('my event')
//           })
        }

        function registerEvens($element, options) {
            if(options) {
                if(options.on) {
                    if(options.on['my-event']) {
                        $element.on('my-event', options.on['my-event'])
                    }
                }
            }
        }

        MyPlugin.prototype = {
            call: function() {
                console.log('value: ' + this.$el.val())
                this.$el.trigger('my-event')
            }
        }


        $.fn.myPlugin = function (option) {
            var pluginArguments = arguments
            return this.each(function(){
              var $this = $(this)
                  , data = $this.data('my-plugin')
                  , options = typeof option === 'object' && option
                if(!data) $this.data('my-plugin', data = new MyPlugin(this, options))
                if(typeof option === 'string') {
                    if(data[option]) {
                        data[option].apply(data, Array.prototype.slice.call(pluginArguments, 1))
                    }
                }

            })
        }

        $.fn.myPlugin.Constructor = MyPlugin

    }(window.jQuery)
})