Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  root 'pages#home'
  get '*unmatched_route', to: 'pages#home'
  resources :jobs, only: [:create]
end
