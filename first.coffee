

class FirstClass
    constructor: (@name)->
    doIt: () ->
        console.log 'hello coffee ' + @name
    doItAgain: (nm) ->
      @name = nm

class SecondClass
    constructor: (@name)->
        console.log 'call the constructor'
    doIt: ()->
        console.log 'do it'
        
module.exports=FirstClass