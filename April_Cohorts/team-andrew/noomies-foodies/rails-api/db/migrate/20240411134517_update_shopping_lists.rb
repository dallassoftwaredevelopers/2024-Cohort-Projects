class UpdateShoppingLists < ActiveRecord::Migration[7.0]
  def change
    remove_columns :shopping_lists, :products
    add_reference :shopping_lists, :user, foreign_key: true
    add_column :shopping_lists, :archived_at, :string
    add_index :shopping_lists, :name
  end
end
