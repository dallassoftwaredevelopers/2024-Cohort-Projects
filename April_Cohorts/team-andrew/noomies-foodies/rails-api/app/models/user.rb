class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
  
  devise :database_authenticatable, :registerable, :recoverable, :validatable, :jwt_authenticatable, jwt_revocation_strategy: self
  has_one :fridge
  has_many :shopping_lists
  has_many :meals
  has_many :recipes
  has_many :groceries
  has_many :foods
  has_many :ShoppingLists
end
