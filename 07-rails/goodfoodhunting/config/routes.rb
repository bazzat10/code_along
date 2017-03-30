Rails.application.routes.draw do
  get '/login', to:  'session#new'
  post '/session', to: 'session#create'
  delete '/session', to: 'session#destroy'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/about', to: 'pages#about'

  post '/likes', to: 'likes#create'

  get '/dishes', to: 'dishes#index'

  get '/dishes/new', to: 'dishes#new' # getting the form

  post '/dishes', to: 'dishes#create'

  delete '/dishes', to: 'dishes#destroy'

  get '/dishes/:id', to: 'dishes#show' # users request - to controller and method

  post '/api/likes', to: 'likes#api_create'
  get '/api/dishes', to: 'api/dishes#index'

  root 'dishes#index' # can be get' '/', to: 'dishes#index'
end
