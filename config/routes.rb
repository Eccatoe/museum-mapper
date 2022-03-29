Rails.application.routes.draw do
  resources :museums
  resources :tours
  resources :users


# ---------Login and Auth ------------
  # post '/signup', to: 'users#create'
  # get '/me', to: 'users#show'

  post '/login', to: 'sessions#login'
  # delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#me'



  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
