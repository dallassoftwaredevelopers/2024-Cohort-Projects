class FridgeItem < ApplicationRecord
    belongs_to :fridge 
    belongs_to :grocery

    validates :quantity, presence: true
end
