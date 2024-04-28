class Food < ApplicationRecord
    has_many :groceries
    has_many :recipe_items
    has_many :recipes, through: :recipe_items
    belongs_to :user

    validates :name, presence: true
    validates :description, presence: true
end
