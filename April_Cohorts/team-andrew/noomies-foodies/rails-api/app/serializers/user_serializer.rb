class UserSerializer
  include JSONAPI::Serializer

attributes :id, :email, :foods, :recipes, :shopping_lists, :fridge, :meals, :groceries
end

