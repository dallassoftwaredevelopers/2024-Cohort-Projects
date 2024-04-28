class Grocery < ApplicationRecord
    belongs_to :user
    has_many :fridge_items
    has_many :fridges, through: :fridge_items

    validates :brand, presence: true, length: {in: 1..100}
    validates :quantity, presence: true, length: {in: 1..100}
end
