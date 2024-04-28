class Meal < ApplicationRecord
  belongs_to :user
  has_many :meal_items
  has_many :recipes, through: :meal_items

  validates_inclusion_of :category, in: ["Breakfast", "Lunch", "Dinner", "Dessert", "Snack"]
  validates :description, presence: true

end