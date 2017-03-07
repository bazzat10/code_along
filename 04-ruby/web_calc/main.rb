require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :index
end

get '/calc' do
  @magic_number = params[:num1].to_i + params[:num2].to_i
  erb :result

  #@magic_numbner - can be accessed by the VIEW folder
  #OR DO THIS
  #magic_number = params[:num1].to_i + params[:num2].to_i
  #erb :result, locals: {goal: magic_number}
end

get '/about' do
  erb :about
end

get '/thankyou' do
  @email = params[:input_email]
  erb :thankyou
end

get '/donate' do
  erb :donate
end
