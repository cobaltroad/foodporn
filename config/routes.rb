Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'single_page_app#show'

  namespace :api do
    resource :authentication, only: [:create], as: :login
    resource :current_user, only: [:show]
    resource :current_user, only: [:destroy], as: :logout
    resources :dishes, only: [:index]
  end

  defaults format: :html do
    get '/*path', to: redirect('/')
  end
end
