class ListItem < ApplicationRecord
  validates :name, presence: true
  belongs_to :shopping_list
end
