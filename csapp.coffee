
express = require 'express'
app = express.createServer()
module.exports = app

port  = 3000
#application configuration
app.configure ->
  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use app.router
  app.use express.static '#{__dirname}/public'

#routing information
app.get '/applications', (req, res)->
  res.send ['1', '2']

app.listen(port, -> console.log 'application is listening')