require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/hello' do
#  binding.pry #params is a special variable which is hash
  "hello there #{params[:name]}"
end


get '/pizza' do # request
  erb(:pizza)
  #'here is your pizza' # response
end

get '/cake' do
  'cake' + 'pudding'
end

# http://localhost:4567/calculator?num1=2&num2=3
get '/calculator' do
  #respond with the sume of two numbers
  "#{params[:num1].to_i + params[:num2].to_i}".to_s #interpolation
end
