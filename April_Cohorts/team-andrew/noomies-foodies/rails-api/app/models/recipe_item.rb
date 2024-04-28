class RecipeItem < ApplicationRecord
    belongs_to :recipe 
    belongs_to :food

    validates :quantity, presence: true
end
