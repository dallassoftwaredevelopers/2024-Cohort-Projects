class Fridge < ApplicationRecord
    belongs_to :user
    has_many :fridge_items
    has_many :groceries, through: :fridge_items

    validates :name, presence: true

end
