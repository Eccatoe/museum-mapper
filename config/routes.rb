Rails.application.routes.draw do
  resources :museums
  resources :tours
  resources :users
  resources :user_tours
  resources :checkouts
  post '/login', to: 'sessions#login'
  post '/signup', to: 'users#create'  
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#me'

  post '/checkout', to: 'checkouts#create'
  
end
