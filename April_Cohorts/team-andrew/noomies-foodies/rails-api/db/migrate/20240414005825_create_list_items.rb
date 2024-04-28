class CreateListItems < ActiveRecord::Migration[7.0]
  def change
    create_table :list_items do |t|
      t.string :name
      t.integer :quantity
      t.string :archived_at
      t.references :shopping_list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
