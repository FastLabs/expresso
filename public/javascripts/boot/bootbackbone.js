define(['order!boot/bootunderscore', 'order!backbone/backbone'], function(_) {
    console.log('backbone loaded' + _ + '->' + Backbone)

     _.noConflict()
    //$.noConflict();
    return Backbone.noConflict()
})