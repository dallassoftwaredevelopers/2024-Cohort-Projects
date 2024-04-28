class CreateFridgeItems < ActiveRecord::Migration[7.0]
  def change
    create_table :fridge_items do |t|
      t.references :fridge, foreign_key: true
      t.references :grocery, foreign_key: true
      t.integer :quantity

      t.timestamps
    end
  end
end
