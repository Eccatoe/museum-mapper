Rails.application.routes.draw do
  resources :museums
  resources :tours
  resources :users
  post '/login', to: 'sessions#login'
  post '/signup', to: 'users#create'  
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#me'
end
