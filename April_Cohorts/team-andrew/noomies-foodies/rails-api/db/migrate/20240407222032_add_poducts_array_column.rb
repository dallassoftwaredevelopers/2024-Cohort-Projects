class AddPoductsArrayColumn < ActiveRecord::Migration[7.0]
  def change
    add_column :shopping_lists, :products, :string, array: true, default: []
  end
end
