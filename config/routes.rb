Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  root 'pages#home'
  namespace 'api' do
    resources :jobs, only: [:create, :index, :destroy, :update]
    resources :resumes, only: [:create, :index] do
      member do
        get 'download_url'
      end
    end
  end
  get '*unmatched_route', to: 'pages#home'
end
