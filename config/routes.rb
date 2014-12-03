Rails.application.routes.draw do
  root 'application#index'

  resources :users, only: [] do
    resources :recipes
  end

  get 'auth/:provider/callback', to: 'sessions#create', as: "new_session"
  get 'logout', to: 'sessions#destroy'
  get '/current_user', to: 'sessions#current_user'
  get '/login', to: 'sessions#login'

end
