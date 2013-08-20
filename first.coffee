//https://www.linkedin.com/e/-xm3plx-hkl36kzl-24/doi/15602251623/g4UY7FYi/gir_4702480003_1/eml-comm_invg-b-accept-reminder/?hs=false&tok=0Y5-5c1dKac5U1
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
