class AddProductsToShoppingLists < ActiveRecord::Migration[7.0]
  def change
    add_column :shopping_lists, :products, :json
  end
end
