require('coffee-script');
console.log('----------');


var FirstClass = require('./first');
var x = new FirstClass( 'coffee');
x.doIt();
console.log('------------');