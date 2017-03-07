require 'pry'
require 'sinatra'
require 'sinatra/reloader'

# global variable
$leads = ['kev', 'mark', 'sam']


get '/' do #
  @info = ''
  erb :index # automatically uses layout.erb
  # er (:index :layout false) to turn off automatically using layout
end

post '/thanks' do # instead of get - you will need to change the form metho to 'post'
  # am i getting the form data
  # store it in a file
  # open the file in write mode use File.open()
  # $leads << params[:name]

  File.open('data.csv', 'a') do |file|

    file.puts params[:name]

  end

  @info = "thanks " + params[:name] # or use interpolation
  #instead of rendering here redirect to a safe route
  #show thank you page
  #erb :index


 redirect '/' #attach information using ?
end

get '/admin' do
  @leads = [] #assuming
  File.open('data.csv') do |file|
    file.each do |line|
      @leads << line.chomp
    end
  end
  erb :admin
end
