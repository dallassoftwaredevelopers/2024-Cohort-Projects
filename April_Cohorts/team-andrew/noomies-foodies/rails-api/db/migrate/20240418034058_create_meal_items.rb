class CreateMealItems < ActiveRecord::Migration[7.0]
  def change
    create_table :meal_items do |t|
      t.references :recipe, foreign_key: true
      t.references :meal, foreign_key: true

      t.timestamps
    end
  end
end
