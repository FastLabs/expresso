define(['require/order!boot/bootunderscore', 'require/order!backbone/backbone'], function(_) {
    console.log('backbone loaded' + _ + '->' + Backbone)
     _.noConflict()
    //$.noConflict();
    return Backbone.noConflict()
})