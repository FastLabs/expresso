
class SimpleApplication
  constructor: (@name) ->

class Application extends Backbone.Model
  intialize: () ->
    console.log 'initialized'
  doIt: () ->
    console.log "do it #{@name}"

class Applications extends Backbone.Collection
  constructor: ()->

class AppSession
  constructor: (@application) ->

###
aur = argint = bronz = 'unknown'
vararg = (unu, doi, restul...)->
  aur = unu
  argint = doi
  bronz = restul

  vararg(['o', 'l', 'l', 'i']...)
###


window.appInstance = new Application 'Admin'