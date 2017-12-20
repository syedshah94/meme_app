Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # root to: 'sessions#new'
  root to: "root#index"
  post   "/login"       => "sessions#create"
  delete "/logout"      => "sessions#destroy"

  resources :users
  get "/profile"        => "users#profile"

  resources :posts
end
