class CreateMeals < ActiveRecord::Migration[7.0]
  def change
    create_table :meals do |t|
      t.string :category
      t.string :description
      t.string :archived_at

      t.timestamps
    end
  end
end
