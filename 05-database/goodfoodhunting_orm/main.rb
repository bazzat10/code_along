require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require_relative 'database_config'
require_relative 'models/dish'
require_relative 'models/dish_type'
require_relative 'models/user'
require_relative 'models/comment'



# router

enable :sessions

helpers do

  def current_user
    User.find_by(id: session["user_id"])
  end

  def loggin_in? #should return boolean
    # if current_user != nil
    #   true
    # else
    #   false

    # current_user != nil #instea returns true or false without using if statement
    !!current_user

  end

end

after do
  ActiveRecord::Base.connection.close
end

get '/' do
  @dishes = Dish.all
  @num=  5
  erb :index
end

get '/dishes' do
end

get '/dishes/new' do
  erb :new
end

post '/dishes' do
  dish = Dish.new
  dish.name = params[:name]
  dish.image_url = params[:image_url]

  dish.save
  if dish.save
    redirect '/'
  else
    erb.new
  end
  # sql = "INSERT INTO dishes (name, image_url) VALUES ('#{ params[:name] }', '#{ params[:image_url] }');"
  # run_sql(sql)

end


# localhost:4567/dishes?id=7
get '/dishes/:id' do

  @dish = Dish.find(params[:id])
  @comments = @dish.comments

  ## find always uses id
  # sql = "SELECT * FROM dishes where id = #{ params[:id] };"
  # @dish = run_sql(sql)[0]

  erb :show

end

delete '/dishes/:id' do

  dish = Dish.find(params[:id])
  dish.destroy
  # sql = "DELETE FROM dishes WHERE id = #{params[:id]};"
  # run_sql(sql)
  redirect '/'
end

get '/dishes/:id/edit' do
  redirect '/session/new' unless loggin_in? # if not logged in redirects back to login page

  @dish = Dish.find(params[:id])
  # @dish = run_sql("SELECT * FROM dishes WHERE id = #{params[:id]}")[0]
  erb :edit
end

put '/dishes/:id' do
  redirect '/session/new' unless loggin_in? # if not logged in redirects back to login page

  # run_sql("UPDATE dishes SET name = '#{params[:name]}', image_url = '#{params[:image_url]}' WHERE id = #{params[:id]};")
  dish = Dish.find(params[:id])
  redirect "/dishes/#{params[:id]}"
end

post '/comments' do
  comment = Comment.new
  comment.body = params[:body]
  comment.dish_id = params[:dish_id]
  comment.user_id = params[:user_id]
  if comment.save
    redirect "/dishes/#{comment.dish_id}" # params[:dish_id]
  else
    erb :show
  end
end

get '/dishtype' do
  @dish_type = DishType.all
  erb :dishtype
end

get '/session/new' do
 erb :login
end

post '/session' do
  user = User.find_by(email: params[:email])
  if user && user.authenticate(params[:password])
    #you are ok, let me create a session for you
    session[:user_id] = user.id
    redirect '/'
  else
    #who are you ??#
    erb :login
  end
end

#log out
delete '/session' do
  session[:user_id] = nil
  redirect '/session/new'
end
