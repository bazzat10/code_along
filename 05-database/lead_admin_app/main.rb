require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do
  #connect to the database
  conn = PG.connect(dbname: 'leads_gen_app')
  #execute a select sql statement
  @leads = conn.exec("SELECT * FROM leads;")
  # @leads = [{
  #   name: 'jon',
  #   email: 'jon@sow.com',
  #   age: 29
  #   }]

  #close
  conn.close

  erb :index
end
