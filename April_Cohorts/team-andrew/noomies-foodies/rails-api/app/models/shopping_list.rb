class ShoppingList < ApplicationRecord
  
  validates :name, presence: true
  validates :color, presence: true
  belongs_to :user

  has_many :list_items

end
