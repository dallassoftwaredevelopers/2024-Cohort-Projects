class CreateShoppingLists < ActiveRecord::Migration[7.0]
  def change
    create_table :shopping_lists do |t|
      t.string :name
      t.string :color
      #t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
