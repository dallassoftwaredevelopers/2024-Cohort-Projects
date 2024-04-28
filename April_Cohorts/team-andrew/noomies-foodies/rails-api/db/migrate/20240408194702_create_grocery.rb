class CreateGrocery < ActiveRecord::Migration[7.0]
  def change
    create_table :groceries do |t|
      t.string :archived_at
      t.boolean :universal
      t.string :brand, limit: 100
      t.string :quantity, limit: 100
      t.references :user, foreign_key: true
      
      t.timestamps
    end
  end
end
