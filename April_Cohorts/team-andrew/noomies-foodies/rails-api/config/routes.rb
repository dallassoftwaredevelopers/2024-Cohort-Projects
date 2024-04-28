Rails.application.routes.draw do

  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  resources :fridge, only: [:create, :update, :show, :index]
  resources :meal, only: [:index, :show, :create, :update, :destroy]

  resources :grocery, only: [:index]
  resources :fridge_item, only: [:create, :update]
  resources :recipe, only: [:index, :show, :create, :update, :destroy]

  # devise_scope :user do
  #   get "sign_up", to: 'users/registrations#create'
  # end
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :shopping_list, only: [:index, :show, :create, :update, :destroy] do 
    resources :list_items, only: [:index, :show, :create, :update, :destroy]
  end

  resources :food, only: [:index, :create, :update, :destroy]
  resources :recipes do
    get 'foods', to: 'foods#index_by_recipe', on: :member
  end
end
