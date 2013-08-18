if (typeof define !== 'function') { var define = require('amdefine')(module) }
var mongo = require('mongodb');
var Server = mongo.Server;
var Db = mongo.Db

define([/*"../lib/multiply.js"*/], function() {
    describe("multiply", function() {
        it("multiplies two numbers", function() {
            if(mongo !== null && mongo !== undefined) {
                console.log('mongo initialized');
                var server = new Server('localhost')
            }

            //expect(multiply(2, 5)).toEqual(10);
            console.log('123');

        });
    });
});