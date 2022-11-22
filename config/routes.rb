Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :stocks

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? } 

  class FallbackController < ActionController::Base
    def index
      render file: 'public/index.html'
    end
  end
end
