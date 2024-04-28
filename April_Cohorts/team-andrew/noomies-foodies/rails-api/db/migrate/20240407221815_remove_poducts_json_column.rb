class RemovePoductsJsonColumn < ActiveRecord::Migration[7.0]
  def change
    remove_column :shopping_lists, :products
  end
end
