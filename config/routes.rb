Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'single_page_app#show'

  defaults format: :html do
    get '/*path', to: redirect('/')
  end
end
